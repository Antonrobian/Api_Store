<template>
  <nav>
    <div class="container d-flex gap-5 align-items-center">
      <h3>Logo</h3>
      <form class="col-md-4" role="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
      <div class="logo ms-auto d-flex gap-2">
        <img class="img-custom" src="../assets/grid.png" alt="" />
        <img class="img-custom" src="../assets/notification.png" alt="" />
        <img class="img-custom" src="../assets/person.png" alt="" />
      </div>
    </div>
  </nav>
  <div class="container">
    <div class="rows">
      <div class="col-md-6"></div>
      <div class="col-md-3">
        <img src="" alt="" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.img-custom {
  width: 25px;
  height: 25px;
}
</style>
