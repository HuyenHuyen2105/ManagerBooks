import axios from "axios";

const url =
    import.meta.env.VITE_APP_API_URL;
class UserService {
    constructor() {
        this.baseUrl = `${url}/api/user`;
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

    async login(login) {
        return (await this.api.post(this.baseUrl, login)).data;
    }

    async getUserName() {}

}
export const userService = new UserService();