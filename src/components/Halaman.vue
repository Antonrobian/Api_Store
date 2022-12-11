<template>
  <nav></nav>
  <form>
    <div class="col-md-5 m-auto border p-3">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Nama Product</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="Nama Product"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Harga Product</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="Harga Product"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label"
          >Pilih Kategori</label
        >
        <select class="form-select" aria-label="Default select example">
          <option selected>Pilih Kategori</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"
          >Deskripsi</label
        >
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Tambahkan Deskripsi"
        ></textarea>
      </div>
      <label>Foto Produk</label>
      <div class="img">
        <img
          class="border border-dark p-2"
          src="../assets/fi_plus.png"
          alt=""
        />
      </div>
      <div class="d-flex gap-3">
        <button type="submit" class="col-md-6 mt-3 btn btn-light">
          Preview
        </button>
        <button type="submit" class="col-md-6 mt-3 btn btn-primary">
          Terbitkan
        </button>
      </div>
    </div>
  </form>
</template>
