<template>
  <div v-if="book" class="page">
    <h4>Thêm Liên hệ</h4>
    <BookForm
      :book="book"
      @submit:book="onAddBook"
      @delete:book="onDeleteContact"
    />
    <p>{{ message }}</p>
  </div>
</template>
<script>
import BookForm from "@/components/BookForm.vue";
import { bookService } from "@/services/book.service";
export default {
  components: {
    BookForm,
  },

  data() {
    return {
      book: null,
      message: "",
    };
  },
  methods: {
    async onAddBook(book) {
      try {
        await bookService.create(book);
        this.message = "Liên hệ được cập nhật thành công.";
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.book = {
      name: "",
      img:"",
      author: "",
      suppiler: "",
      publishing: "",
      price: "",
      favorite: "",
    };
    this.message = "";
  },
};
</script>
