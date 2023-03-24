<template>
  <nav class="nav">
    <em class="nav-logo pf">Logo</em>
    <ul class="nav-icons">
      <li>
        <IconsFacebook />
      </li>
      <li>
        <IconsInstagram />
      </li>
      <li>
        <IconsYoutube />
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav {
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1.5rem;
  top: 0;
  left: 0;
  z-index: 2;
}
.nav-logo {
  font-weight: 700;
  font-size: 2rem;
}
.nav-icons {
  display: flex;
  align-items: center;
  gap: 1rem;
}
@media (min-width: 600px) {
  .nav-logo {
    font-size: 3rem;
    margin-left: 2.5rem;
  }
}
</style>
