import { createWebHistory, createRouter } from "vue-router";
import ManageBook from "@/views/ManageBook.vue";
// import { component } from "v-viewer";
const routes = [
  {
    path: "/",
    name: "managebook",
    component: ManageBook,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/NotFound.vue"),
  },
  {
    path: "/books/:id",
    name: "book.edit",
    component: () => import("@/views/BookEdit.vue"),
    props: (route) => ({ bookId: parseInt(route.params.id) }),
  },
  {
    path: "/books/add",
    name: "book.add",
    component: () => import("@/views/BookAdd.vue"),
    props: (route) => ({ book: route.param }),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/SignUp.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
