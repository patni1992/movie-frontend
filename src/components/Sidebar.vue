<template>
  <div class="sidebar">
    <div class="logo">
      <Logo />
    </div>
    <router-link class="sidebar__item" :to="'/coming-soon'">
      <Dashboard class="icon" /> Dashboard</router-link
    >
    <router-link class="sidebar__item" to="'/coming-soon'">
      <Heart class="icon" /> Favorites</router-link
    >
    <router-link class="sidebar__item" :to="'/coming-soon'">
      <Messages class="icon" /> Messages</router-link
    >
    <router-link class="sidebar__item" :to="{ name: 'Search' }">
      <Search class="icon" /> Search</router-link
    >
    <router-link class="sidebar__item" :to="'/coming-soon'">
      <Settings class="icon" /> Settings</router-link
    >
  </div>
</template>

<script>
import Logo from "@/assets/logo.svg";
import Dashboard from "@/assets/icons/dashboard.svg";
import Heart from "@/assets/icons/heart.svg";
import Messages from "@/assets/icons/messages.svg";
import Search from "@/assets/icons/search.svg";
import Settings from "@/assets/icons/settings.svg";
export default {
  name: "Sidebar",
  components: {
    Logo,
    Dashboard,
    Heart,
    Messages,
    Search,
    Settings
  }
};
</script>

<style lang="scss" scoped>
.logo {
  background-color: var(--theme-color);
  padding: 1.4rem 0 1rem 0;
  text-align: center;
}
.icon {
  margin-right: 0.8rem;
}
.sidebar {
  width: var(--sidebar-width);
  position: fixed;
  height: 100%;
  box-shadow: -3px 0 7px 0 var(--main-gray);
}

.sidebar__item {
  display: block;
  padding: 1.3rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  color: var(--main-gray);
  border-bottom: 1px solid rgba(98, 98, 99, 0.1);
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.8rem;
  &:hover:not(.active) {
    color: var(--theme-color);
    path {
      fill: var(--theme-color);
    }
  }
}

.router-link-active {
  color: var(--theme-color);
  path {
    fill: var(--theme-color);
  }
}
</style>
