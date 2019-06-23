<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Lato:400,700&display=swap");
body,
html {
  --theme-color: #c70d0b;
  --main-gray: #626263;
  --sidebar-width: 12.5rem;
  width: 100%;
  height: 100%;
  font-family: "Lato", sans-serif;
  color: var(--main-gray);
  margin: 0;
  padding: 0;
}
</style>
