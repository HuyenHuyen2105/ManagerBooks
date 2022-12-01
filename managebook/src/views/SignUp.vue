<template>
  <form @submit.prevent="Register">
    <div class="login">
      <div class="col-md-4 col-md-offset-4">
        <div class="panel panel-primary">
          <h2 class="panel-heading">
            <span class="glyphicon glyphicon-locl">Đăng ký</span>
          </h2>
          <div class="panel-body">
            <label>Tên</label>
            <input type="text" v-model="name" />
            <label>Tài khoản</label>
            <input type="text" v-model="username" />
            <label>Email</label>
            <input type="email" v-model="email" />
            <label>Mật khẩu</label>
            <input type="password" v-model="password" />
            <div class="panel-footer">
              <button class="btn btn-primary btn-clock">
                <span class="glyphicon glyphicon-log-in">Đăng ký</span>
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

export default {
  data() {
    return {
      login:null
    };
  },
  methods: {
    async Register(login) {
        // console.log(this.name)
        try {
          const login  = {...this}
          const name = login.name
          const username = login.username
          const email = login.email
          const password = login.password
          const h = {name,username,email,password};
          await userService.login(h)

        } catch (error) {
          console.log(error)
        }
        this.$router.push({name:'login'})
    },
    created() {
      this.login = {
        // ...this.name,
        // ...this.username,
        // ...this.email,
        // ...this.password,
        name:"",
        username:"",
        email:'',
        password:'',

      }
      
  
  }
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
