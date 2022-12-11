<script setup>
// import { useProduct } from "../stores/auth";
import { productAnton } from "../stores/storeOrang";

const store = productAnton();
console.log(store);
// console.log(store.data);
// console.log(store.productCount);
</script>
<template>
  <div class="container">
    <div class="mt-3 d-flex flex-wrap alignt-items-center gap-5">
      <ul
        class="list-group"
        v-for="dataStore in store.data"
        :key="dataStore.id"
      >
        <li class="list-group-item bg-primary">
          {{ dataStore.first_name }} {{ dataStore.last_name }}
        </li>
        <li class="list-group-item">Email: {{ dataStore.email }}</li>
        <div></div>
        <li class="list-group-item"><img :src="dataStore.avatar" /></li>
      </ul>
    </div>
  </div>
</template>

<!-- <ul v-for="(mhs, index) in store.mahasiswa" :key="index">
    <li>nama: {{ mhs.nama }}</li>
    <li>email: {{ mhs.email }}</li>
  </ul>
  <p>nama:{{ store.productCount }}</p>
  <p>nama:{{ store.doubleCount }}</p>
 <style scoped>
ul li {
  list-style: none;
}
</style> -->
