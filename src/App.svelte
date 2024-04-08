<script lang="ts">
  import { onMount } from "svelte";
  import Header from "./lib/Header.svelte";
  import Home from "./lib/Home.svelte";
  import Github from "./lib/Github.svelte";
  import Showcase from "./lib/Showcase.svelte";
  import Skills from "./lib/Skills.svelte";
  import Socials from "./lib/Socials.svelte";

  let prevDoodle = document.querySelectorAll(".doodle");
  let prevLoc = [0, 0];
  //doodleData is an array of objects, each object contains the x and y coordinates of the doodle, the velocity, and the vector direction
  let doodleData: {
    x: number;
    y: number;
    v: number;
    dir: number;
    moving: boolean;
  }[] = [];

  function setDoodleEvents() {
    const doodles = document.querySelectorAll(".doodle");

    doodles.forEach((doodle, i) => {
      doodleData[i] = {
        x: doodle.offsetLeft,
        y: doodle.offsetTop,
        v: 1,
        dir: -1.5 * Math.PI,
        moving: true,
      };
    });

    if (prevDoodle.length == doodles.length) return;
    prevDoodle = doodles;
    doodles.forEach((doodle) => {
      let doodleInData = doodleData.find(
        (d) => d.x == doodle.offsetLeft && d.y == doodle.offsetTop
      );
      doodle.addEventListener("mousedown", (e) => {
        e.preventDefault();
        const initialX = e.clientX;
        const initialY = e.clientY;
        const initialLeft = doodle.offsetLeft;
        const initialTop = doodle.offsetTop;
        const mousemove = (e) => {
          const deltaX = e.clientX - initialX;
          const deltaY = e.clientY - initialY;
          if (prevLoc[0] != deltaX || prevLoc[1] != deltaY) {
            prevLoc = [deltaX, deltaY];
            let x = initialLeft + deltaX;
            let y = initialTop + deltaY;
            let percentX = x / window.innerWidth;
            let percentY = y / window.innerHeight;
            doodle.style.left = `${percentX * 100}%`;
            doodle.style.top = `${percentY * 100}%`;
            try {
              // @ts-ignore
              doodleData.find(
                (d) => d.x == initialLeft && d.y == initialTop
              ).moving = false;
            } catch (e) {
              // do nothing
            }
          }
        };
        const mouseup = () => {
          // @ts-ignore
          document.removeEventListener("mousemove", mousemove);
          document.removeEventListener("mouseup", mouseup);
          doodleInData.moving = true;
        };
        document.addEventListener("mousemove", mousemove);
        document.addEventListener("mouseup", mouseup);
        doodleInData.moving = true;
      });
    });

    const collisionsObjects = [
      ...document.querySelectorAll(".doodle"),
      ...document.querySelectorAll(".card"),
      ...document.querySelectorAll(".repo"),
    ];
    const collisionsObjectsBackground = [
      document.querySelector("#github"),
      document.querySelector("#chocolate"),
      document.querySelector("#vtools"),
      document.querySelector("#skills"),
      document.querySelector("#socials"),
      document.querySelector(".presentation"),
    ];

    /*
    setInterval(() => {
      doodles.forEach((doodle, i) => {
        let doodleInData = doodleData.find(
          (d) => d.x == doodle.offsetLeft && d.y == doodle.offsetTop
        );
        if (!doodleInData || !doodleInData.moving) return;
        doodleData[i].x += doodleData[i].v * Math.cos(doodleData[i].dir);
        doodleData[i].y += doodleData[i].v * Math.sin(doodleData[i].dir);
        let x = doodleData[i].x;
        let y = doodleData[i].y;
        let percentX = x / window.innerWidth;
        let percentY = y / window.innerHeight;
        doodle.style.left = `${percentX * 100}%`;
        doodle.style.top = `${percentY * 100}%`;
        if (
          doodleData[i].x < 0 ||
          doodleData[i].x > window.innerWidth - doodle.offsetWidth
        ) {
          doodleData[i].dir = Math.PI - doodleData[i].dir;
        }
        if (
          doodleData[i].y < 0 ||
          doodleData[i].y > window.innerHeight - doodle.offsetHeight
        ) {
          doodleData[i].dir = -doodleData[i].dir;
        }

        collisionsObjects.forEach((object) => {
          if (object == doodle) return;
          if (!doodleInData || !doodleInData.moving) return;
          const rect1 = doodle.getBoundingClientRect();
          const rect2 = object.getBoundingClientRect();
          rect2.x += 4;
          rect2.y += 4;
          if (
            rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.y + rect1.height > rect2.y
          ) {
            doodleData[i].dir = -doodleData[i].dir;
          }
        });
      });
    }, 10);
    */
  }

  onMount(() => {
    setDoodleEvents(); // Attach events initially
    const observer = new MutationObserver(() => {
      setDoodleEvents(); // Attach events when new elements are added
    });
    observer.observe(document.body, { childList: true, subtree: true });
  });
</script>

<main>
  <Header />
  <Home />
  <Github />
  <Showcase />
  <Skills />
  <Socials />
</main>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
  }
</style>
