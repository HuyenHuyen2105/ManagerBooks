<template>
  <div>
    <div class="p-1">
      <strong>Tên:</strong>
      {{ book.name }}
    </div>
    <div class="p-1">
      <strong>Hình ảnh:</strong>
      <!-- <div class="images" v-viewer.static="{ inline: true }">
        <img v-for="src in images" :src="src" :key="src" />
      </div> -->
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
      <i v-if="book.favorite" class="fas fa-check" />
      <i v-else class="fas fa-times" />
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
