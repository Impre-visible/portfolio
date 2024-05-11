<script lang="ts">
  import { onMount } from "svelte";
  import Header from "./lib/Header.svelte";
  import Home from "./lib/Home.svelte";
  import Github from "./lib/Github.svelte";
  import Showcase from "./lib/Showcase.svelte";
  import Skills from "./lib/Skills.svelte";
  import Socials from "./lib/Socials.svelte";

  let prevDoodle = document.querySelectorAll<HTMLElement>(".doodle");
  let prevLoc = [0, 0];

  function setDoodleEvents() {
    const doodles = document.querySelectorAll<HTMLElement>(".doodle");

    if (prevDoodle.length == doodles.length) return;
    prevDoodle = doodles;
    doodles.forEach((doodle) => {
      doodle.addEventListener("mousedown", (e) => {
        e.preventDefault();
        doodle.classList.add("active");
        const initialX = e.clientX;
        const initialY = e.clientY;
        const initialLeft = doodle.offsetLeft;
        const initialTop = doodle.offsetTop;
        const mousemove = (e) => {
          const deltaX = e.clientX - initialX;
          const deltaY = e.clientY - initialY;
          if (prevLoc[0] != deltaX || prevLoc[1] != deltaY) {
            prevLoc = [deltaX, deltaY];
            doodle.style.left = `${initialLeft + deltaX}px`;
            doodle.style.top = `${initialTop + deltaY}px`;
          }
        };
        const mouseup = () => {
          doodle.classList.remove("active");
          document.removeEventListener("mousemove", mousemove);
          document.removeEventListener("mouseup", mouseup);
        };
        document.addEventListener("mousemove", mousemove);
        document.addEventListener("mouseup", mouseup);
      });
    });

    const collisionsObjects = [
      ...document.querySelectorAll(".doodle"),
      ...document.querySelectorAll(".card"),
      ...document.querySelectorAll(".repo"),
      ...document.querySelectorAll(".presentation"),
    ];
    const collisionsObjectsBackground = [
      ...document.querySelectorAll("#github"),
      ...document.querySelectorAll("#chocolate"),
      ...document.querySelectorAll("#vtools"),
      ...document.querySelectorAll("#skills"),
      ...document.querySelectorAll("#socials"),
    ];

    //for all doodles, every 100ms, make them move buy
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

    > section {
      pointer-events: none;
    }

    > section:not(#home):not(#showcase) {
      height: 90dvh;
      margin-top: -15dvh;
      width: 100vw;
      background-size: cover;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }
  }
</style>
