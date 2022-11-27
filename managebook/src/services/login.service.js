import axios from "axios";

const url = import.meta.env.VITE_APP_API_URL;
class UserService {
  constructor() {
    this.baseUrl = `${url}/api/login`;
    this.api = axios.create({
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }
  async getMany() {
    return (await this.api.get(this.baseUrl)).data;
  }
  // async handleResponse(response) {
  //   return await response.text().then((text) => {
  //     const data = text && JSON.parse(text);
  //     if (!response.ok) {
  //       if (response.status === 401) {
  //         // tự động logout nếu response 401 được trả về từ api
  //         location.reload(true);
  //       }

  //       const error = (data && data.message) || response.statusText;
  //       return Promise.reject(error);
  //     }

  //     return data;
  //   });
  // }
  // async getLogin(username, password) {
  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ username, password }),
  //   };
  //   return fetch(`${this.baseUrl}/`, requestOptions)
  //     .then(handleResponse)
  //     .then((user) => {
  //       // login thành công nếu có một token jwt trong response
  //       if (user.token) {
  //         // lưu dữ liệu user và token jwt vào local storage để giữ user được log in trong page
  //         localStorage.setItem("user", JSON.stringify(user));
  //       }

  //       return user;
  //     });
  // }
}
export const userService = new UserService();
