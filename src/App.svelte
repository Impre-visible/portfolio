<script lang="ts">
  import Header from "./lib/Header.svelte";
  import Home from "./lib/Home.svelte";
  import Github from "./lib/Github.svelte";
  import Showcase from "./lib/Showcase.svelte";
  import Skills from "./lib/Skills.svelte";
  import Socials from "./lib/Socials.svelte";
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

  main > section:not(#home):not(#showcase) {
    height: 90dvh;
    margin-top: -15dvh;
    width: 100vw;
    background-size: cover;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
</style>
