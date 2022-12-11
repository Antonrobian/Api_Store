<script setup>
import { dataLogin } from "../store";
import { RouterLink, useRouter } from "vue-router";

const router = useRouter();
const logout = () => {
  localStorage.removeItem("user");
  dataLogin.user = null;
  router.push("/login");
};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-primary py-3">
    <div class="container">
      <a class="navbar-brand" href="#">Vue Router</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav d-flex container-fluid">
          <Router-link class="nav-link" to="/" aria-current="page"
            >Home</Router-link
          >
          <Router-link class="nav-link" :to="{ name: 'products' }"
            >Product</Router-link
          >
          <Router-link class="nav-link" to="/dynamic-route">Custom</Router-link>
          <!-- <div
            class="d-flex align-items-center gap-3 ms-auto"
            v-if="dataLogin.user"
          >
            <h3 class="m-0">{{ dataLogin.user.username }}</h3>
            <button @click="logout" class="btn btn-warning">LogOut</button>
          </div> -->
          <div class="ms-auto" v-if="dataLogin.user">
            <div class="d-flex align-items-center gap-2">
              <div class="dropdown">
                <button
                  class="btn btn-light dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {{ dataLogin.user.username }}
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li
                    class="d-flex dropdown-item align-items-center gap-2 mb-1"
                  >
                    <img
                      class="user-image rounded-4"
                      :src="dataLogin.user.image"
                      alt=""
                    />
                    <div class="">
                      <p class="m-0 text-decoration-none text-dark">
                        {{ dataLogin.user.email }}
                      </p>
                      <p class="m-0 text-decoration-none text-dark">
                        {{ dataLogin.user.gender }}
                      </p>
                    </div>
                  </li>
                  <li>
                    <RouterLink :to="{ name: 'Profil' }" class="dropdown-item"
                      >Profile</RouterLink
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Setting</a>
                  </li>
                  <li>
                    <button @click="logout" class="dropdown-item" type="submit">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Router-link v-else class="nav-link ms-auto" to="/login"
            >login</Router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.user-image {
  width: 35px;
  height: 35px;
  border: 0.03rem solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
}
</style>
