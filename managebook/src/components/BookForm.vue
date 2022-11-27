<template>
  <Form @submit="submitContact" :validation-schema="contactFormSchema">
    <div class="form-group">
      <label for="name">Tên</label>
      <Field
        name="name"
        type="text"
        class="form-control"
        v-model="bookLocal.name"
      />
      <ErrorMessage name="name" class="error-feedback" />
    </div>
    <div class="form-group">
      <label for="name">Hình ảnh</label>
      <Field
        name="img"
        type="file"
        class="form-control"
        v-model="bookLocal.img"
      />
      <ErrorMessage name="img" class="error-feedback" />
    </div>
    <div class="form-group">
      <label for="author">Tác giả</label>
      <Field
        name="author"
        type="text"
        class="form-control"
        v-model="bookLocal.author"
      />
      <ErrorMessage name="author" class="error-feedback" />
    </div>
    <div class="form-group">
      <label for="supplier">Nhà cung cấp</label>
      <Field
        name="supplier"
        type="text"
        class="form-control"
        v-model="bookLocal.supplier"
      />
      <ErrorMessage name="supplier" class="error-feedback" />
    </div>
    <div class="form-group">
      <label for="publishing">Nhà sản xuất</label>
      <Field
        name="publishing"
        type="text"
        class="form-control"
        v-model="bookLocal.publishing"
      />
      <ErrorMessage name="publishing" class="error-feedback" />
    </div>
    <div class="form-group">
      <label for="price">Giá</label>
      <Field
        name="price"
        type="text"
        class="form-control"
        v-model="bookLocal.price"
      />
      <ErrorMessage name="price" class="error-feedback" />
    </div>
    <div class="form-group form-check">
      <input
        name="favorite"
        type="checkbox"
        class="form-check-input"
        v-model="bookLocal.favorite"
      />
      <label for="favorite" class="form-check-label">
        <strong>Liên hệ yêu thích</strong>
      </label>
    </div>
    <div class="form-group">
      <button class="btn btn-primary">Lưu</button>
      <button
        v-if="bookLocal.id"
        type="button"
        class="ml-2 btn btn-danger"
        @click="deleteContact"
      >
        Xóa
      </button>
    </div>
  </Form>
</template>
<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  emits: ["submit:book", "delete:book", "add:book"],
  props: {
    book: { type: Object, required: true },
  },
  data() {
    const contactFormSchema = yup.object().shape({
      name: yup
        .string()
        .required("Tên phải có giá trị.")
        .min(2, "Tên phải ít nhất 2 ký tự.")
        .max(50, "Tên có nhiều nhất 50 ký tự."),
      author: yup.string().required("Tác giả không được bỏ trống"),
      supplier: yup.string().required("Nhà cung cấp không được bỏ trống"),
      publishing: yup.string().required("Nhà sản xuất không được bỏ trống"),
      price: yup.string().required("Giá không được bỏ trống"),
    });
    return {
      // Props are supposed to be immutable, therefore create
      // a local variable bookLocal and bind it to the form
      bookLocal: { ...this.book, favorite: !!this.book.favorite },
      contactFormSchema,
    };
  },
  methods: {
    submitContact() {
      this.$emit("submit:book", this.bookLocal);
    },
    deleteContact() {
      this.$emit("delete:book", this.bookLocal.id);
    },
  },
};
</script>
<style scoped>
@import "@/assets/form.css";
</style>
