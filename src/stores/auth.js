import { defineStore } from "pinia";

export const useProduct = defineStore("product", {
  state: () => ({
    mahasiswa: [
      {
        nama: "anton",
        email: "robian@gmail.com",
      },
      {
        nama: "robian",
        email: "anton@gmail.com",
      },
    ],
  }),
  getters: {
    productCount(state) {
      return state.mahasiswa[0].nama.toUpperCase();
    },
    doubleCount(state) {
      return state.mahasiswa[0].email.toUpperCase();
    },
  },
});
