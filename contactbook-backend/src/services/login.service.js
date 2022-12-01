const knex = require("../database/knex");
class LoginService {
    constructor() {
        this.login = knex("login");
    }

    #getUser(payload) {
        const user = {...payload };
        const loginProperties = ["username", "name", "email", "password"];
        // Remove non-book properties
        Object.keys(user).forEach(function(key) {
            if (loginProperties.indexOf(key) == -1) {
                delete user[key];
            }
        });
        return user;
    }

    // Define methods for accessing the database
    async all() {
            return await this.login.select("*");
        }
        // async findByName(username) {
        //     return await this.login.where("username", username).select("*").first();
        // }
    async create(payload) {
        const login = this.#getUser(payload);
        const [username] = await this.login.insert(login);
        return { username, ...login };
    }
    async findByName(username) {
        return await this.login.where('username', username).select('*').first();
    }


}
module.exports = LoginService;