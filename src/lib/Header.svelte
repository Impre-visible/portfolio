<script lang="ts">
  function handleClick(e: MouseEvent) {
    const link = e.target as HTMLAnchorElement;
    e.preventDefault();
    if (link == null) return;
    if (link.getAttribute("href") == null) return;
    // @ts-ignore
    const id = link.getAttribute("href").slice(1);
    const section = document.getElementById(id);
    if (!section) return;
    window.scrollTo({
      top: section.offsetTop - 100,
      behavior: "smooth",
    });
    const headerLinks = document.querySelectorAll(".header a");
    headerLinks.forEach((link) => link.classList.remove("active"));
    link.classList.add("active");
  }

  const ids = ["home", "github", "showcase", "skills", "socials"];

  onscroll = () => {
    const scroll = window.scrollY;
    const sections = [];
    for (let i = 0; i < ids.length; i++) {
      if (!document.getElementById(ids[i])) {
        continue;
      }
      sections.push(document.getElementById(ids[i]));
    }
    if (!sections) {
      return;
    }
    const offsets = sections.map((section) => section.offsetTop - 100);

    for (let i = 0; i < sections.length; i++) {
      if (!sections[i]) {
        continue;
      }
      if (scroll >= offsets[i] && scroll < offsets[i + 1]) {
        const headerLinks = document.querySelectorAll(".header a");
        headerLinks.forEach((link) => link.classList.remove("active"));
        headerLinks[i].classList.add("active");
      }

      if (scroll >= offsets[sections.length - 1]) {
        const headerLinks = document.querySelectorAll(".header a");
        headerLinks.forEach((link) => link.classList.remove("active"));
        headerLinks[sections.length - 1].classList.add("active");
      }
    }
  };
</script>

<div class="headerContainer">
  <div class="header">
    <a href="#home" class="giga active text-stroke" on:click={handleClick}
      >Home</a
    >
    <a href="#github" class="giga text-stroke" on:click={handleClick}>Github</a>
    <a href="#showcase" class="giga text-stroke" on:click={handleClick}
      >Showcase</a
    >
    <a href="#skills" class="giga text-stroke" on:click={handleClick}>Skills</a>
    <a href="#socials" class="giga text-stroke" on:click={handleClick}
      >Socials</a
    >
  </div>
</div>

<style>
  .headerContainer {
    z-index: 999;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    top: 2dvh;
  }

  .header {
    background: white;
    border: var(--border);
    box-shadow: var(--box-shadow);
    padding: 12px 30px;
    display: flex;
    justify-content: space-between;
    width: 45%;
    border-radius: 20px;
  }

  .header a {
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
    color: var(--salmon);
  }

  .header a.active,
  .header a:hover {
    color: var(--orange);
  }
</style>
