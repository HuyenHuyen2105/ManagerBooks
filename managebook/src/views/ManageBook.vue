<template>
  <div class="page row">
    <div class="col-md-10">
      <InputSearch v-model="searchText" />
    </div>
    <div class="mt-3 col-md-6">
      <h4>
        Sách
        <i class="fas fa-address-book" />
      </h4>
      <BookList
        v-if="filteredContactsCount > 0"
        :books="filteredContacts"
        v-model:activeIndex="activeIndex"
      />
      <p v-else>Không có quyển sách nào</p>
      <div class="mt-3 row justify-content-around align-items-center">
        <button class="btn btn-sm btn-primary" @click="refreshList()">
          <ion-icon name="refresh-outline"></ion-icon> Làm mới
        </button>
        <button class="btn btn-sm btn-success" @click="goToAddContact">
          <ion-icon name="add-outline"></ion-icon> Thêm mới
        </button>
        <button class="btn btn-sm btn-danger" @click="onDeleteContacts">
          <ion-icon name="trash-outline"></ion-icon> Xóa tất cả
        </button>
      </div>
    </div>
    <div class="mt-3 col-md-6">
      <div v-if="activeContact">
        <h4>
          Chi tiết Sách
          <i class="fas fa-address-card" />
        </h4>
        <BookCard :book="activeContact" />
        <router-link
          :to="{
            name: 'book.edit',
            params: { id: activeContact.id },
          }"
        >
          <span class="mt-2 badge badge-warning">
            <i class="fas fa-edit" /> Hiệu chỉnh</span
          >
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import BookCard from "@/components/BookCard.vue";
import InputSearch from "@/components/InputSearch.vue";
import BookList from "@/components/BookList.vue";
import { bookService } from "@/services/book.service";
export default {
  components: {
    BookCard,
    InputSearch,
    BookList,
  },
  // The full code will be presented below
  data() {
    return {
      books: [],
      activeIndex: -1,
      searchText: "",
    };
  },
  watch: {
    // Monitor changes on searchText.
    // Release the currently selected contact.
    searchText() {
      this.activeIndex = -1;
    },
  },
  computed: {
    // Map contacts to strings for searching.
    contactsAsStrings() {
      return this.books.map((book) => {
        const { name, author, supplier, publishing, price, favorite } = book;
        return [name, author, supplier, publishing, price, favorite].join("");
      });
    },
    // Return contacts filtered by the search box.
    filteredContacts() {
      if (!this.searchText) return this.books;
      return this.books.filter((book, index) =>
        this.contactsAsStrings[index].includes(this.searchText)
      );
    },
    activeContact() {
      if (this.activeIndex < 0) return null;
      return this.filteredContacts[this.activeIndex];
    },
    filteredContactsCount() {
      return this.filteredContacts.length;
    },
  },
  methods: {
    async retrieveContacts() {
      try {
        const booksList = await bookService.getMany();
        this.books = booksList.sort((current, next) =>
          current.name.localeCompare(next.name)
        );
      } catch (error) {
        console.log(error);
      }
    },
    refreshList() {
      this.retrieveContacts();
      this.activeIndex = -1;
    },
    async onDeleteContacts() {
      if (confirm("Bạn muốn xóa tất cả Liên hệ?")) {
        try {
          await bookService.deleteMany();
          this.refreshList();
        } catch (error) {
          console.log(error);
        }
      }
    },
    goToAddContact() {
      this.$router.push({ name: "book.add" });
    },
  },
  mounted() {
    this.refreshList();
  },
};
</script>
<style scoped>
.page {
  text-align: left;
  max-width: 750px;
}
</style>
