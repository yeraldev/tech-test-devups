<template>
  <section class="head pf">
    <span class="head-logo">Logo</span>
    <h1 class="head-title">
      <span class="head-line">El secreto</span>
      <span class="head-line">de tu cocina</span>
    </h1>
  </section>
</template>

<style scoped>
.head {
  position: relative;
  display: flex;
  align-items: center;
  height: 15rem;
  background-image: url("/assets/hero.png");
  background-size: 115%;
  background-position: right;
}
.head-logo {
  position: absolute;
  font-weight: 700;
  font-size: 2rem;
  top: 2rem;
  left: 2rem;
}
.head-title {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  font-size: 1.5rem;
  z-index: 1;
}
.head-title::after {
  content: "";
  position: absolute;
  bottom: -0.5rem;
  right: -4rem;
  height: 2rem;
  width: 200%;
  background-image: url("/assets/brush.png");
  background-size: cover;
  z-index: -1;
}
@media (min-width: 600px) {
  .head {
    height: 25rem;
    background-size: cover;
  }
  .head-logo {
    font-size: 4rem;
    left: 3rem;
  }
  .head-title {
    font-size: 4rem;
    margin-left: 3rem;
  }
  .head-title::after {
    height: 6rem;
    bottom: -2.25rem;
    right: -12rem;
  }
}
@media (min-width: 900px) {
  .head {
    height: 100vh;
    background-size: cover;
  }
  .head-logo {
    font-size: 5rem;
    left: 4rem;
  }
  .head-title {
    font-size: 5.5rem;
    margin-left: 4rem;
  }
  .head-title::after {
    height: 8.5rem;
    bottom: -2.25rem;
    right: -12rem;
  }
}
</style>
