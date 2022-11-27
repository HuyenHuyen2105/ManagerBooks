<template>
  <div v-if="book" class="page">
    <h4>Hiệu chỉnh Sách</h4>
    <BookForm
      :book="book"
      @submit:book="onUpdateContact"
      @delete:book="onDeleteContact"
    />
    <p>{{ message }}</p>
  </div>
</template>
<script>
import BookForm from "@/components/BookForm.vue";
import router from "@/router";
import { bookService } from "@/services/book.service";
export default {
  components: {
    BookForm,
  },
  props: {
    bookId: { type: Number, required: true },
  },
  data() {
    return {
      book: null,
      message: "",
    };
  },
  methods: {
    async getContact(id) {
      try {
        this.book = await bookService.get(id);
      } catch (error) {
        console.log(error);
        this.$router.push({
          name: "notfound",
          params: {
            pathMatch: this.$route.path.split("/").slice(1),
          },
          query: this.$route.query,
          hash: this.$route.hash,
        });
      }
    },
    async onUpdateContact(book) {
      try {
        await bookService.update(book.id, book);
        this.message = "Liên hệ được cập nhật thành công.";
        router.push({ name: "managebook" });
      } catch (error) {
        console.log(error);
      }
    },
    async onDeleteContact(id) {
      if (confirm("Bạn muốn xóa liên hệ này?")) {
        try {
          await bookService.delete(id);
          this.$router.push({ name: "managebook" });
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
  created() {
    this.getContact(this.bookId);
    this.message = "";
  },
};
</script>
