<template>
  <div v-if="book" class="page">
    <h4>Thêm Sách</h4>
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
        try{
          await bookService.create(book)
        }catch(err){
          console.log(err)
        }
        this.$router.push({name:'managebook'})
      }
    },
  created() {
    this.book = {
      name:"",
      img:"",
      author:"",
      supplier:"",
      publishing:"",
      price:"",
      favorite:""
    }
    this.message = "";
  },
};
</script>
