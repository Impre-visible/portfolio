<script lang="ts">
</script>

<section id="skills">
  <section class="left">
    <span>
      <h1 class="giga text-stroke">Skills</h1>
      <p class="exa">*</p>
    </span>
    <span>
      <h4 class="exa">
        Here you can see some of the technologies, programming languages and
        frameworks I use and have mastered.
      </h4>
      <p>*non-exhaustive list</p>
    </span>
  </section>
  <section class="right">
    <article><img src="assets/js.svg" alt="js" /></article>
    <article><img src="assets/ts.svg" alt="ts" /></article>
    <article><img src="assets/react.svg" alt="react" /></article>
    <article><img src="assets/svelte.svg" alt="svelte" /></article>
    <article><img src="assets/angular.svg" alt="angular" /></article>
    <article><img src="assets/python.svg" alt="python" /></article>
    <article><img src="assets/flask.svg" alt="flask" /></article>
    <article><img src="assets/java.svg" alt="java" /></article>
  </section>
</section>

<style lang="scss">
  #skills {
    background-image: url(../assets/skills_background.svg);
    background-repeat: no-repeat;
    background-size: cover;
    height: 90dvh;
    margin-top: -15dvh;
    width: 92vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 4vw;
    padding-right: 4vw;
  }

  .left > span {
    display: flex;
  }

  .left h1 {
    font-size: 64px;
    color: var(--orange);
  }

  .left h4 {
    font-size: 20px;
    font-weight: bold;
    width: 70%;
  }

  .left span:first-child p {
    font-size: 24px;
  }

  .left span:last-child {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .right {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 32px;
    column-gap: 80px;
  }

  .right article {
    background: var(--white);
    border: var(--border);
    box-shadow: var(--box-shadow);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 18px;
    border-radius: 10px;
  }

  .right img {
    margin: 12px;
    border-radius: 16px;
    height: calc(11.5vw - 12px);
    width: calc(11.5vw - 12px);
    object-fit: cover;
  }
</style>
