<script setup>
import { dataLogin } from "../store";

// export default {};
</script>
<template lang="">
  <div class="container">
    <div class="col-md-5 mt-3">
      <ul class="list-group">
        <li
          class="list-group-item py-3 active d-flex gap-3 align-items-center"
          aria-current="true"
        >
          <img class="user-image" :src="dataLogin.user.image" alt="" />
          <h3 class="fw-bold m-0">{{ dataLogin.user.username }}</h3>
        </li>
        <li class="list-group-item py-3">
          <h6 class="m-0 fw-bold">
            First Name : {{ dataLogin.user.firstName }}
          </h6>
        </li>
        <li class="list-group-item py-3">
          <h6 class="m-0 fw-bold">Last Name : {{ dataLogin.user.lastName }}</h6>
        </li>
        <li class="list-group-item py-3">
          <h6 class="m-0 fw-bold">Email : {{ dataLogin.user.email }}</h6>
        </li>
        <li class="list-group-item py-3">
          <h6 class="m-0 fw-bold">Gender : {{ dataLogin.user.gender }}</h6>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.user-image {
  width: 70px;
  height: 70px;
  border: 0.03rem solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
  background-color: aliceblue;
  border-radius: 50%;
}
</style>
