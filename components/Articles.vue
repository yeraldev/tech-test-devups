<template>
  <Section>
    <Subtitle text="Nuestros artículos" />
    <section class="main-content">
      <div class="main-categories-wrapper" @click="(e) => toggleDrop(e)">
        <ul
          class="main-categories dropped"
          :class="{ 'dropped--active': isDrop }"
        >
          <li
            v-for="category of categories"
            :key="category"
            class="main-category"
            :class="{ 'dropped-item': !isDrop }"
            @click="() => setActiveCategory(category)"
          >
            <span :class="{ 'main-category--active': isActive(category) }">
              {{ category }}
            </span>
            <span class="main-category-icon" v-if="isActive(category)">
              <IconsArrow />
            </span>
          </li>
        </ul>
        <div
          class="main-categories-toggle"
          :class="{ 'main-categories-toggle--active': isDrop }"
        >
          <IconsArrowDown />
        </div>
      </div>
      <div class="main-cards">
        <div class="main-card" v-for="article of articles" :key="article.id">
          <Article :article="article" />
        </div>
      </div>
    </section>
  </Section>
</template>

<script lang="ts" setup>
let vw: number;
const articles = ref(await getArticles());
const categories = ["TODOS", "PRODUCTOS", "RECETAS", "CONSEJOS"];
const activeCategory = ref(categories[0]);
const isDrop = ref(false);

const isActive = (category: string): boolean => {
  return activeCategory.value === category;
};

const setActiveCategory = async (category: string): Promise<void> => {
  activeCategory.value = category;
  const filter = category === categories[0] ? "" : category;
  articles.value = await getArticles(filter);
};

const isMinWidth = (width: number): boolean => {
  const minWidth = 900;
  return width >= minWidth;
};

const checkWidth = (): void => {
  if (typeof window !== "undefined") {
    vw = window.screen.width;
    isDrop.value = isMinWidth(vw);
  }
};

const toggleDrop = ({ view }: MouseEvent): void => {
  const width: number = view?.screen.width!;
  if (isMinWidth(width)) return;
  isDrop.value = !isDrop.value;
};

onMounted(() => checkWidth());
onUpdated(() => checkWidth());
if (typeof window !== "undefined") {
  window.addEventListener("resize", () => checkWidth());
}
</script>

<style scoped>
.main-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.main-categories-wrapper {
  display: block;
  height: fit-content;
  width: 16rem;
  overflow: hidden;
  margin: 0 auto;
  padding: 0.5rem 1rem;
}
.main-categories {
  display: none;
  flex-direction: column;
  gap: 1rem;
  font-weight: 500;
  width: 100%;
  padding-top: 0.5rem;
}
.main-category {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
.main-category--active {
  color: #d8ad3d;
  font-weight: 700;
}
.main-category-icon {
  transform: rotate(90deg);
}
.main-categories-toggle {
  width: fit-content;
  margin: 0.5rem auto 0;
  transform: rotate(0);
}
.main-categories-toggle--active {
  transform: rotate(180deg);
}
.main-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(15rem, 100%), 1fr));
  gap: 2rem;
}
.main-card,
.main-categories-wrapper {
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.15);
}
@media (min-width: 600px) {
  .main-title {
    font-size: 2.5rem;
  }
}
@media (min-width: 900px) {
  .main-content {
    display: flex;
    flex-direction: row;
  }
  .main-categories-wrapper {
    width: 20rem;
    margin: 0 0 0 5rem;
  }
  .main-category-icon {
    transform: rotate(0);
  }
  .main-categories-toggle {
    display: none;
  }
  .main-cards {
    width: 100%;
  }
}
.dropped {
  position: absolute;
  max-height: 0;
  opacity: 0;
}
.dropped--active {
  position: relative;
  display: flex;
  opacity: 1;
  max-height: 100vh;
}
.dropped-item {
  display: none;
}
</style>
