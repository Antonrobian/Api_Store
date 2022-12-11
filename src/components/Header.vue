<script setup></script>
<template>
  <nav>
    <div class="text-center">
      <p>Lengkapi info akun</p>
    </div>
    <form class="">
      <div class="img my-1">
        <img class="m-auto d-block" src="../assets/fi_camera.png" alt="" />
      </div>
      <div class="col-md-5 m-auto border p-3">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">nama</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Nama"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">kota</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Pilih Kota</option>
            <option value="1">Probolinggo</option>
            <option value="2">Bondowoso</option>
            <option value="3">Situbondo</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label"
            >Alamat</label
          >
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="contohx jln.Kh.zaini.Mun'im"
          ></textarea>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"
            >No Telepon</label
          >
          <input
            type="number"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="No.Telepon"
          />
        </div>
        <div>
          <button
            type="submit"
            class="col-md-12 btn btn-primary d-block m-auto"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  </nav>
</template>
