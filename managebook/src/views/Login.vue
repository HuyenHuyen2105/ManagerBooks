<template>
  <form @submit="checkLogin">
    <div class="login">
      <div class="col-md-4 col-md-offset-4">
        <div class="panel panel-primary">
          <h2 class="panel-heading">
            <span class="glyphicon glyphicon-locl">Đăng nhập</span>
          </h2>
          <div class="panel-body">
            <label>Username</label>
            <input type="text" v-model="username" />
            <label>Mật khẩu</label>
            <input type="password" v-model="password" />
            <div class="panel-footer">
              <button class="btn btn-primary btn-clock">
                <span class="glyphicon glyphicon-log-in">Đăng nhập</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { userService } from "@/services/login.service";
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async checkLogin() {
      const response = await axios.get("username");
      console.log(response);
      // const auth = { username: this.username, password: this.password };
      // let result = await userService.getLogin(this.username, this.password);

      // let result = await axios.get(
      //   `http://localhost:3003/api/login?username=${this.username}&password=${this.password}`
      // );
      // if (result.status == 200) {
      //   let local = [result.data.username, result.data.password];
      //   localStorage.setItem("user-info", JSON.stringify(local));
      //   this.$router.push({ name: "managebook" });
      // }
    },
  },
};
</script>
<style>
input {
  outline: none;
  border: 1px solid #6a5af9;
  border-radius: 6px;
  display: inline-block;
  padding: 5px;
  background-color: transparent;
}
.login {
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  display: inline-block;
  margin-top: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  outline: none;
}
button:hover {
  background-color: #fff !important;
  color: #6a5af9 !important;
  outline: none;
}
</style>
