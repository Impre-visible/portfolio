<script lang="ts"></script>

<section id="home">
  <article class="card">
    <div class="starContainer">
      <div class="star"></div>
      <div class="star-border"></div>
    </div>
    <h3 class="exa">Hi, I'm Roméo</h3>
    <h1 class="giga text-stroke">a Fullstack developer</h1>
    <h2 class="exa text-stroke">a student, and a freelancer</h2>
    <button class="giga">Learn more</button>
  </article>
  <article class="presentation"></article>
</section>

<style lang="scss">
  #home {
    background: var(--pink);
    display: flex;
    width: calc(100vw - 10vw);
    padding: 7vw 5vw;
    justify-content: space-between;
    align-items: center;
  }

  article.card {
    flex-basis: 40%;
    background: var(--white);
    padding: 42px 24px;
    border-radius: 15px;
    border: var(--border);
    box-shadow: var(--big-box-shadow);
    display: flex;
    flex-direction: column;
    gap: 24px;
    height: fit-content;
    max-height: 33.5dvh;

    h3 {
      font-size: 24px;
      font-weight: bold;
      color: var(--black);
    }

    h1 {
      font-size: 48px;
      font-weight: bold;
      color: var(--yellow);
      width: 95%;
    }

    h2 {
      font-size: 32px;
      font-weight: bold;
      color: var(--salmon);
    }

    button {
      border: var(--border);
      box-shadow: var(--box-shadow);
      border-radius: 32px;
      background: var(--yellow);
      padding: 16px 24px;
      font-size: 24px;
      width: 15rem;
      text-wrap: nowrap;
      white-space: nowrap;
      height: 4rem;
      min-height: 4rem;
      font-weight: 600;
    }

    button:hover,
    button:active {
      margin-left: 4px;
      margin-top: 4px;
      box-shadow: 1px 1px var(--black);
      cursor: pointer;
    }

    button:active {
      box-shadow: var(--invert-box-shadow);
      padding: 16px 24px;
      padding-top: 20px;
      padding-left: 32px;
      text-wrap: nowrap;
      white-space: nowrap;
    }
  }

  .starContainer {
    z-index: 1;
    position: absolute;
    margin-left: 34.5%;
    margin-top: calc(-110px / 2 - 40px);
    height: 110px;
    width: 110px;
    margin-bottom: 20px;
    animation: rotate 25s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .star {
    content: "";
    box-sizing: border-box;
    width: 100%;
    height: 100%;

    -webkit-clip-path: polygon(
      100% 50%,
      78.19% 60.26%,
      88.3% 82.14%,
      65% 75.98%,
      58.68% 99.24%,
      44.79% 79.54%,
      25% 93.3%,
      27.02% 69.28%,
      3.02% 67.1%,
      20% 50%,
      3.02% 32.9%,
      27.02% 30.72%,
      25% 6.7%,
      44.79% 20.46%,
      58.68% 0.76%,
      65% 24.02%,
      88.3% 17.86%,
      78.19% 39.74%
    );
    clip-path: polygon(
      100% 50%,
      78.19% 60.26%,
      88.3% 82.14%,
      65% 75.98%,
      58.68% 99.24%,
      44.79% 79.54%,
      25% 93.3%,
      27.02% 69.28%,
      3.02% 67.1%,
      20% 50%,
      3.02% 32.9%,
      27.02% 30.72%,
      25% 6.7%,
      44.79% 20.46%,
      58.68% 0.76%,
      65% 24.02%,
      88.3% 17.86%,
      78.19% 39.74%
    );
    background: #fff799;
    position: absolute;
  }

  .star-border {
    content: "";
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    -webkit-clip-path: polygon(
      100% 50%,
      78.19% 60.2,
      88.3% 82.14%,
      65% 75.98%,
      58.68% 99.24%,
      44.79% 79.54%,
      25% 93.3%,
      27.02% 69.28%,
      3.02% 67.1%,
      20% 50%,
      3.02% 32.9%,
      27.02% 30.72%,
      25% 6.7%,
      44.79% 20.46%,
      58.68% 0.76%,
      65% 24.02%,
      88.3% 17.86%,
      78.19% 39.74%,
      100% 50%,
      78.19% 60.26%,
      calc(78.19% - 1.13px) calc(60.26% - 0.41px),
      calc(100% - 2px) calc(50% - 0px),
      calc(78.19% - 1.13px) calc(39.74% - -0.41px),
      calc(88.3% - 1.53px) calc(17.86% - -1.29px),
      calc(65% - 0.6px) calc(24.02% - -1.04px),
      calc(58.68% - 0.35px) calc(0.76% - -1.97px),
      calc(44.79% - -0.21px) calc(20.46% - -1.18px),
      calc(25% - -1px) calc(6.7% - -1.73px),
      calc(27.02% - -0.92px) calc(30.72% - -0.77px),
      calc(3.02% - -1.88px) calc(32.9% - -0.68px),
      calc(20% - -1.2px) calc(50% - 0px),
      calc(3.02% - -1.88px) calc(67.1% - 0.68px),
      calc(27.02% - -0.92px) calc(69.28% - 0.77px),
      calc(25% - -1px) calc(93.3% - 1.73px),
      calc(44.79% - -0.21px) calc(79.54% - 1.18px),
      calc(58.68% - 0.35px) calc(99.24% - 1.97px),
      calc(65% - 0.6px) calc(75.98% - 1.04px),
      calc(88.3% - 1.53px) calc(82.14% - 1.29px),
      calc(78.19% - 1.13px) calc(60.26% - 0.41px),
      calc(100% - 2px) calc(50% - 0px)
    );
    clip-path: polygon(
      100% 50%,
      78.19% 60.26%,
      88.3% 82.14%,
      65% 75.98%,
      58.68% 99.24%,
      44.79% 79.54%,
      25% 93.3%,
      27.02% 69.28%,
      3.02% 67.1%,
      20% 50%,
      3.02% 32.9%,
      27.02% 30.72%,
      25% 6.7%,
      44.79% 20.46%,
      58.68% 0.76%,
      65% 24.02%,
      88.3% 17.86%,
      78.19% 39.74%,
      100% 50%,
      78.19% 60.26%,
      calc(78.19% - 1.13px) calc(60.26% - 0.41px),
      calc(100% - 2px) calc(50% - 0px),
      calc(78.19% - 1.13px) calc(39.74% - -0.41px),
      calc(88.3% - 1.53px) calc(17.86% - -1.29px),
      calc(65% - 0.6px) calc(24.02% - -1.04px),
      calc(58.68% - 0.35px) calc(0.76% - -1.97px),
      calc(44.79% - -0.21px) calc(20.46% - -1.18px),
      calc(25% - -1px) calc(6.7% - -1.73px),
      calc(27.02% - -0.92px) calc(30.72% - -0.77px),
      calc(3.02% - -1.88px) calc(32.9% - -0.68px),
      calc(20% - -1.2px) calc(50% - 0px),
      calc(3.02% - -1.88px) calc(67.1% - 0.68px),
      calc(27.02% - -0.92px) calc(69.28% - 0.77px),
      calc(25% - -1px) calc(93.3% - 1.73px),
      calc(44.79% - -0.21px) calc(79.54% - 1.18px),
      calc(58.68% - 0.35px) calc(99.24% - 1.97px),
      calc(65% - 0.6px) calc(75.98% - 1.04px),
      calc(88.3% - 1.53px) calc(82.14% - 1.29px),
      calc(78.19% - 1.13px) calc(60.26% - 0.41px),
      calc(100% - 2px) calc(50% - 0px)
    );
    background: #000;
  }

  .presentation {
    height: 70dvh;
    width: 50%;
    background-image: url("src/assets/presentation.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
  }

  :root {
    --margin: 10%;
  }

  .presentation::before,
  .presentation::after {
    content: "";
    position: absolute;
    background: var(--light-blue);
    padding: 16px 24px;
    border: var(--border);
    box-shadow: var(--box-shadow);
    border-radius: 40px;
  }

  .presentation::before {
    content: url("src/assets/vscode.svg");
    border-bottom-right-radius: 5px;
    padding: 16px 32px;
    left: calc(var(--margin) - 24px - 4%);
    top: 15%;
    animation: move1 2s infinite ease-in-out;
  }

  .presentation::after {
    content: url("src/assets/git.svg");
    border-bottom-left-radius: 5px;
    right: var(--margin);
    animation: move2 2.25s infinite ease-in-out;
  }

  @keyframes move1 {
    0% {
      top: 15%;
    }
    50% {
      top: 10%;
    }
    100% {
      top: 15%;
    }
  }

  @keyframes move2 {
    0% {
      top: 0%;
    }
    50% {
      top: 5%;
    }
    100% {
      top: 0%;
    }
  }
</style>
