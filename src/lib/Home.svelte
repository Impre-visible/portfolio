<script lang="ts"></script>

<section id="home">
  <article class="card">
    <h3 class="exa">Hi, I'm Roméo</h3>
    <h1 class="giga">a Fullstack developer</h1>
    <h2 class="exa">a student, and a freelancer</h2>
    <button>Learn more</button>
  </article>
  <article class="presentation"></article>
</section>

<style>
  #home {
    background: var(--pink);
    display: flex;
    width: 100vw;
    padding: 10vw 5vw;
  }

  article.card {
    flex-basis: 33%;
    background: var(--white);
    padding: 15px;
    border-radius: 15px;
    border: var(--border);
    box-shadow: var(--big-box-shadow);

    & h3 {
      font-size: 16px;
      font-weight: bold;
      color: var(--black);
    }

    & h1 {
      font-size: 42px;
      font-weight: bold;
      color: var(--yellow);
    }

    & h2 {
      font-size: 24px;
      font-weight: bold;
      color: var(--salmon);
    }
  }

  article.card::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    width: 35px;
    height: 35px;
    clip-path: polygon(
      50% 0%,
      61% 35%,
      98% 35%,
      68% 57%,
      79% 91%,
      50% 70%,
      21% 91%,
      32% 57%,
      2% 35%,
      39% 35%
    );
    background: #fff799;
    border: 2px solid #000000;
    transform: rotate(66.56deg);
    flex: none;
    order: 1;
    flex-grow: 0;
    z-index: 1;
    margin-left: 33.66%;
  }
</style>
