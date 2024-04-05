<script lang="ts">
  const githubRepos = [
    {
      name: "Chocolate",
      description: "Chocolate is a free and Open Source media manager.",
      image:
        "https://user-images.githubusercontent.com/69050895/185436929-c80736b3-07ce-434b-ba96-d753c8e9f83c.png",
      url: "https://github.com/ChocolateApp/Chocolate",
      stars: 414,
      forks: 12,
    },
    {
      name: "VSCopilot",
      description:
        "VSCopilot is an VSCode extension that uses AI to help you write code.",
      image:
        "https://github.com/Impre-visible/VSCopilot/raw/master/images/logo.png",
      url: "https://github.com/Impre-visible/VSCopilot",
      stars: 5,
      forks: 0,
    },
    {
      name: "PyFetch",
      description: "A clone of Neofetch.",
      image:
        "https://user-images.githubusercontent.com/69050895/154533426-a7434011-0ba6-4ce3-8e44-421426cc3e1a.png",
      url: "https://github.com/Impre-visible/PyFetch",
      stars: 2,
      forks: 0,
    },
    {
      name: "UltimateConverter",
      description: "UltimateConverter is a python-based unit converter.",
      image:
        "https://user-images.githubusercontent.com/69050895/154533196-45907e85-fe39-450c-b031-bbe2a5191e9f.png",
      url: "https://github.com/Impre-visible/UltimateConverter",
      stars: 1,
      forks: 0,
    },
  ];
</script>

<section id="github">
  <div class="repos">
    {#each githubRepos as repo}
      <article class="repo">
        <img src={repo.image} alt={repo.name} />
        <div class="info">
          <p class="exa">{repo.description}</p>
          <div class="stats">
            <span>
              <svg
                width="28"
                height="26"
                viewBox="0 0 28 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5245 1.08156C13.6741 0.620904 14.3259 0.620901 14.4755 1.08156L16.8922 8.51925C17.093 9.13729 17.6689 9.55573 18.3188 9.55573H26.1392C26.6236 9.55573 26.825 10.1755 26.4331 10.4602L20.1062 15.057C19.5805 15.439 19.3605 16.116 19.5613 16.734L21.978 24.1717C22.1277 24.6324 21.6004 25.0154 21.2086 24.7307L14.8817 20.134C14.3559 19.752 13.6441 19.752 13.1183 20.134L6.79144 24.7307C6.39959 25.0154 5.87234 24.6324 6.02202 24.1717L8.43867 16.734C8.63949 16.116 8.4195 15.4389 7.89377 15.057L1.56688 10.4602C1.17503 10.1755 1.37641 9.55573 1.86078 9.55573H9.68123C10.3311 9.55573 10.907 9.13729 11.1078 8.51925L13.5245 1.08156Z"
                  fill="#FFF799"
                  stroke="black"
                />
              </svg>

              <p class="exa">{repo.stars} stars</p>
            </span>
            <span>
              <svg
                width="16"
                height="28"
                viewBox="0 0 16 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 3.05128C0 1.3661 1.4663 0 3.27506 0C5.08388 0 6.55013 1.3661 6.55013 3.05128C6.55013 4.18068 5.89151 5.16678 4.9126 5.69436V16.8425H7.84624C9.65505 16.8425 11.1213 15.4763 11.1213 13.7912V11.8753C10.1237 11.3524 9.44987 10.3566 9.44987 9.21418C9.44987 7.52901 10.9161 6.1629 12.7249 6.1629C14.5336 6.1629 16 7.52901 16 9.21418C16 10.3305 15.3565 11.3067 14.3964 11.8387V13.7912C14.3964 17.1615 11.4637 19.8937 7.84624 19.8937H4.9126V21.7672C5.89151 22.2948 6.55013 23.2808 6.55013 24.4103C6.55013 26.0955 5.08388 27.4615 3.27506 27.4615C1.4663 27.4615 0 26.0955 0 24.4103C0 23.2808 0.658615 22.2948 1.63753 21.7672V5.69436C0.658615 5.16678 0 4.18068 0 3.05128Z"
                  fill="black"
                />
              </svg>

              <p class="exa">{repo.forks} forks</p>
            </span>
          </div>
          <button on:click={() => window.open(repo.url, "_blank")} class="giga">
            Open
          </button>
        </div>
      </article>
    {/each}
  </div>
</section>

<style lang="scss">
  #github {
    background: url("src/assets/github_background.svg");
    height: 105dvh;
    margin-top: -18dvh;
    width: 100vw;
    background-size: cover;
  }

  .repos {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    gap: 20px;
    padding-top: 16%;
  }

  .repo {
    background: var(--white);
    border: var(--border);
    box-shadow: var(--box-shadow);
    border-radius: 20px;
    display: flex;
    flex-direction: column;

    gap: 18px;
    width: 15vw;
    height: 38dvh;
    justify-content: space-between;

    img {
      border-radius: 16px 16px 0 0;
      height: 100px;
      width: 100%;
      object-fit: cover;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 8px;
    align-items: center;
    height: calc(38dvh - 100px - 16px);

    > p {
      max-height: 60px;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: start;
      width: 100%;
      min-height: 60px;
      font-weight: 700;
    }
  }

  .stats {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    width: 100%;

    span {
      display: flex;
      gap: 10px;
    }

    span > svg {
      width: 28px;
    }
  }

  button {
    border: var(--border);
    box-shadow: var(--box-shadow);
    border-radius: 32px;
    background: var(--yellow);
    font-size: 18px;
    width: 8rem;
    text-wrap: nowrap;
    white-space: nowrap;
    height: 2.25rem;
    min-height: 2.25rem;
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
    white-space: nowrap;
  }
</style>
