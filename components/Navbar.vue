<template>
  <nav class="nav">
    <!-- <span class="nav-logo pf">Logo</span> -->
    <ul class="nav-icons">
      <li class="nav-icon">
        <IconsFacebook />
      </li>
      <li class="nav-icon">
        <IconsInstagram />
      </li>
      <li class="nav-icon">
        <IconsYoutube />
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav {
  position: fixed;
  display: flex;
  justify-content: end;
  width: 100%;
  padding: 1.5rem;
  z-index: 2;
}
.nav-logo {
  font-weight: 700;
  font-size: 2rem;
  margin-left: 1rem;
}
.nav-icons {
  display: flex;
  align-items: center;
  gap: 2rem;
}
</style>
