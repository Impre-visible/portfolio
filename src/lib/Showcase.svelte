<script lang="ts">
</script>

<section id="showcase">
  <article id="chocolate">
    <section class="left">
      <section class="text">
        <h1 class="giga text-stroke">Chocolate</h1>
        <p class="exa">
          Chocolate is a free and Open Source media manager. It allows you to
          manage your media collection and organize it in a way that is easy to
          use and easy to search.
        </p>
      </section>
      <button
        class="giga"
        on:click={() =>
          window.open("https://github.com/ChocolateApp/Chocolate", "_blank")}
        >Open on Github</button
      >
    </section>
    <section class="right">
      <img
        src="https://user-images.githubusercontent.com/69050895/185436929-c80736b3-07ce-434b-ba96-d753c8e9f83c.png"
        alt="Chocolate"
      />
    </section>
  </article>
  <article id="vtools">
    <section class="left">
      <img
        src="https://media.discordapp.net/attachments/1164565885709725747/1225168019437654026/image.png?ex=662025a2&is=660db0a2&hm=f1c584482a791af14d47958a18b81c86e407ba654e51790a0e98a61521d8c4e2&"
        alt="V-Tools"
      />
    </section>
    <section class="right">
      <section class="text">
        <h1 class="giga text-stroke">V-Tools</h1>
        <p class="exa">
          V-Tools is the essential platform for reselling novices and experts
          alike. Offering a complete range of tools to optimize your business,
          we guide you every step of the way.
        </p>
      </section>
      <button
        class="giga"
        on:click={() => window.open("https://v-tools.fr", "_blank")}
        >Open the website</button
      >
    </section>
  </article>
</section>

<style lang="scss">
  #chocolate,
  #vtools {
    height: 90dvh;
    margin-top: -15dvh;
    width: calc(100vw - 8vw);
    background-size: cover;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding-left: 4vw;
    padding-right: 4vw;

    img {
      border: var(--border);
      box-shadow: var(--big-box-shadow);
      border-radius: 20px;
      height: 50vh;
      width: 50vw;
      object-fit: cover;
    }
  }

  #chocolate {
    background-image: url("src/assets/chocolate_background.svg");
  }

  #vtools {
    background-image: url("src/assets/vtools_background.svg");
    margin-top: -16dvh;
  }

  #vtools img {
    box-shadow: var(--reverse-big-box-shadow);
  }

  #chocolate .left,
  #vtools .right {
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 30dvh;
    max-height: 30dvh;
    min-height: 30dvh;
  }

  #chocolate .left h1,
  #vtools .right h1 {
    font-size: 64px;
  }

  #chocolate .left h1 {
    color: var(--purple);
  }

  #vtools .right h1 {
    color: var(--green);
  }
  #chocolate .left p,
  #vtools .right p {
    font-weight: 600;
  }

  #chocolate .left .text,
  #vtools .right .text {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2dvh;
  }

  button {
    border: var(--border);
    box-shadow: var(--box-shadow);
    border-radius: 32px;
    background: var(--yellow);
    font-size: 18px;
    width: 16rem;
    text-wrap: nowrap;
    height: 3rem;
    min-height: 3rem;
    font-weight: bold;
    margin-bottom: 4px;
  }

  button:hover,
  button:active {
    margin-left: 6px;
    margin-top: 6px;
    box-shadow: 1px 1px var(--black);
    cursor: pointer;
    margin-bottom: 0px;
  }

  button:active {
    box-shadow: var(--invert-box-shadow);
    padding-top: 6px;
    padding-left: 6px;
    text-wrap: nowrap;
  }
</style>
