<template>
  <div class="card">
    <div class="p-1">
      <strong>Tên:</strong>
      {{ book.name }}
    </div>
    <div class="p-1">
      <strong>Hình ảnh:</strong>
      <!-- <div class="images" v-viewer.static="{ inline: true }">
        <img v-for="src in images" :src="src" :key="src" />
      </div> -->
      <img :src="('http://localhost:3003/' + book.img)" class="img_anh" />
    
    </div>
    <div class="p-1">
      <strong>Tác giả:</strong>
      {{ book.author }}
    </div>
    <div class="p-1">
      <strong>Nhà cung cấp:</strong>
      {{ book.supplier }}
    </div>
    <div class="p-1">
      <strong>Nhà xuất bản:</strong>
      {{ book.publishing }}
    </div>
    <div class="p-1">
      <strong>Giá:</strong>
      {{ book.price }}
    </div>
    <div class="p-1">
      <strong>Sách yêu thích:&nbsp;</strong>
      <ion-icon v-if="book.favorite" name="checkbox-outline"></ion-icon>
      <ion-icon v-else name="close-outline"></ion-icon>
    </div>
  </div>
</template>
<script>
// import "viewerjs/dist/viewer.css";
// import Viewer from "v-viewer";
// import Vue from "vue";
// Vue.use(Viewer);
export default {
  props: {
    book: { type: Object, required: true },
  },
  // data() {
  //   return {
  //     images: ["this.props.book.img"],
  //   };
  // },
};
</script>
<style>
.img_anh{
  width: 200px;
  border-radius: 10px;
  transition: all 0.25s linear;
}
.img_anh:hover{
  transform:scale(2.5);
  z-index: 99;
}
</style>