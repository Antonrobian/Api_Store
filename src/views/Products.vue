<script setup>
import { onMounted, watchEffect, reactive } from "vue";
import { instance } from "../plugin";

const dataProduct = reactive({
  product: [],
  category: [],
  totalProduct: null,
  limitData: [5, 10, 25, 50, 100],
  formLimit: 5,
  loading: false,
  formSearching: "",
});
const getProduct = async () => {
  // set loading true
  dataProduct.loading = false;
  await instance
    .get(`/buyer/product?page=3&per_page=10`)
    .then(({ data }) => {
      dataProduct.product = data;
    })
    .catch((error) => {
      console.log(error);
    });
};
onMounted(() => {
  getProduct();
});
</script>
<template>
  <div
    v-if="dataProduct.loading"
    class="spin d-flex justify-content-center align-items-center"
  >
    <div class="spinner-border text-white" style="z-index: 999" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div class="container">
    <div class="d-flex gap-3">
      <div class="col-md-1 mt-2">
        <select
          class="form-select"
          v-model="dataProduct.formLimit"
          aria-label="Default select example"
        >
          <option
            v-for="(item, index) in dataProduct.limitData"
            :key="index"
            :value="item"
          >
            {{ item }}
          </option>
        </select>
      </div>
      <div class="col-md-2 mt-2">
        <select class="form-select" aria-label="Default select example">
          <option selected>-- Filter by Categories --</option>
          <option
            v-for="(item, index) in dataProduct.category"
            :key="index"
            :value="item"
          >
            {{ item }}
          </option>
        </select>
      </div>
      <div class="ms-auto col-md-3 mt-2">
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search.."
            aria-label="Search"
            @input="delaySearch"
          />
        </form>
      </div>
    </div>
    <div class="fw-bold my-3">
      Total Product : {{ dataProduct.totalProduct }}
    </div>
    <div>
      <div class=""></div>
      <div class="">
        <div
          class="d-flex flex-wrap gap-4 justify-content-center align-items-start"
        >
          <div
            v-for="item in dataProduct.product"
            :key="item.id"
            class="card col-custom"
          >
            <img
              :src="item.image_url"
              class="thumbnail card-img-top"
              alt="..."
            />
            <div
              class="d-flex py-2 px-2 gap-2 bg-light justify-content-start align-items-center"
            >
              <h5 class="price m-0 fw-bold">{{ item.name }}</h5>
              <!-- <del class="discount m-0 text-secondary fw-bold">
                *{{ item.discountPercentage }}
              </del> -->
              <span
                class="brand bg-primary ms-auto text-uppercase text-white rounded-4"
                >${{ item.base_price }}</span
              >
            </div>
            <div class="card-body border-top">
              <h5 class="card-title">{{ item.title }}</h5>
              <p
                class="card-text text-secondary"
                v-for="item in item.Categories"
                :key="item.id"
              >
                {{ item.name }}
              </p>
              <div class="d-flex align-items-center justify-content-between">
                <div class="rounded-4 rating bg-warning text-white fw-bold">
                  <i class="bx bxs-star text-white me-1"></i>
                  {{ item.rating }}
                </div>
                <p class="m-0">Sold 120</p>
                <div class="cart cursor-pointer">
                  <i class="bx bx-cart m-auto text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scope>
.price {
  font-size: 1.2rem;
}
.discount {
  font-size: 1rem;
}
.card-text {
  width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.card-title {
  width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
.col-custom {
  flex-basis: 23%;
}
.thumbnail {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.rating {
  width: max-content;
  padding: 0.2rem 0.75rem;
  font-size: 0.8rem;
}
.brand {
  width: max-content;
  padding: 0.2rem 0.9rem;
  font-size: 0.75rem;
  font-weight: 600;
  /* scale: 0.9; */
}
.cart {
  scale: 1.1;
  display: flex;
  text-align: center;
  background-color: #f97316;
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 50%;
  cursor: pointer;
}
</style>
