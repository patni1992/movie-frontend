<template>
  <div>
    <sidebar :open="openSideBar" />
    <div
      class="burger"
      :class="{ 'left-margin change': openSideBar }"
      @click="openSideBar = !openSideBar"
    >
      <div class="burger__bar1"></div>
      <div class="burger__bar2"></div>
      <div class="burger__bar3"></div>
    </div>
    <div :class="{ 'left-margin': openSideBar }" class="content">
      <slot />
    </div>
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar";

export default {
  name: "AppLayout",
  data() {
    return {
      openSideBar: false
    };
  },
  components: {
    Sidebar
  }
};
</script>

<style scoped>
.content {
  margin-left: var(--sidebar-width);
}
.burger {
  display: none;
  padding: 1rem;
  transition: all 0.8s ease;
}
.burger__bar1,
.burger__bar2,
.burger__bar3 {
  width: 2.1rem;
  height: 0.3rem;
  background-color: #333;
  margin: 0.35rem 0;
  transition: 0.4s;
}

@media (max-width: 768px) {
  .content {
    margin-left: 0;
  }
  .burger {
    display: block;
  }
}

.left-margin {
  margin-left: var(--sidebar-width);
}

.change .burger__bar1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-9px, 6px);
}

.change .burger__bar2 {
  opacity: 0;
}

.change .burger__bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}
</style>
