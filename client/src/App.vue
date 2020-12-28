<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{name: 'AFC_East', params:{id: '1'}}">AFC East </router-link>|
    <router-link :to="{name: 'AFC_South', params:{id: '2'}}">AFC South </router-link>|
    <router-link :to="{name: 'AFC_North', params:{id: '3'}}">AFC North </router-link>|
    <router-link :to="{name: 'AFC_South', params:{id: '4'}}">AFC West </router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
