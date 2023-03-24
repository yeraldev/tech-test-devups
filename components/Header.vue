<template>
  <section class="head pf">
    <h1 class="head-title">
      <em class="head-line">El secreto</em>
      <em class="head-line">de tu cocina</em>
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
  margin-left: 2.5rem;
  font-size: 1.5rem;
  z-index: 1;
}
.head-title::after {
  content: "";
  position: absolute;
  bottom: -25%;
  right: -25%;
  height: 50%;
  width: 200%;
  background-image: url("/assets/brush.png");
  background-size: cover;
  z-index: -1;
}
@media (min-width: 600px) {
  .head {
    height: 27.5rem;
    background-size: cover;
  }
  .head-title {
    font-size: 3.5rem;
    margin-left: 4.5rem;
  }
}
@media (min-width: 900px) {
  .head {
    height: 100vh;
    background-size: cover;
  }
  .head-title {
    font-size: 5rem;
    margin-left: 4rem;
  }
}
</style>
