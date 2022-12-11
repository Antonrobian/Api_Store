<script setup>
import axios from "axios";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { dataLogin } from "../store";

const router = useRouter();

const login = reactive({
  form: {
    username: "",
    password: "",
  },
  loading: false,
});
const onLogin = () => {
  login.loading = true;
  const loginData = {
    username: login.form.username,
    password: login.form.password,
  };
  axios
    .post("https://dummyjson.com/auth/login", loginData)
    .then(({ data }) => {
      login.loading = false;
      //respon api ketika di local stroage
      dataLogin.user = data;
      localStorage.setItem("user", JSON.stringify(data));
      //   console.log(data);

      router.push("/");
    })
    .catch((err) => {
      login.loading = false;
      //   console.log(err);
    });
};
</script>
<template>
  <div class="container">
    <div class="card login-form col-md-6 m-auto mt-5">
      <div class="card-body">
        <h1 class="card-title text-center">LOGIN</h1>
        <div class="card-text">
          <form @submit.prevent="onLogin">
            <div class="mb-3">
              <label for="username" class="form-label">UserName</label>
              <input
                v-model="login.form.username"
                type="text"
                class="form-control"
                id="username"
                aria-describedby="emailHelp"
                placeholder="Masukkan username"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Password</label
              >
              <input
                v-model="login.form.password"
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <button type="submit" class="btn btn-primary d-block m-auto">
              <span v-if="login.loading">
                <span
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                loading...
              </span>
              <!-- {{login.loading}} -->
              <span v-else> login </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
