<template>
  <header class="header">
    <h1 class="logo">Movies</h1>
    <router-link to='/' class="page-link">
      header
    </router-link>
    <router-link to='/search' class="page-link">
      search
    </router-link>
  </header>
</template>

<style lang='scss' scoped>
.header {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  background: #cdb962;
  color: white;
  overflow: hidden;
  text-transform: uppercase;
}

.page-link {
  font-size: 14px;
  padding: 30px;
    &:hover {
      background: #95884d;
    }
}
</style>