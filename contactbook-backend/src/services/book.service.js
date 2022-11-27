const knex = require("../database/knex");
class BookService {
  constructor() {
    this.books = knex("books");
  }

  #getContact(payload) {
    const book = { ...payload };
    const contactProperties = [
      "name",
      "author",
      "supplier",
      "publishing",
      "price",
      "favorite",
    ];
    // Remove non-book properties
    Object.keys(book).forEach(function (key) {
      if (contactProperties.indexOf(key) == -1) {
        delete book[key];
      }
    });
    return book;
  }
  async create(payload) {
    const book = this.#getContact(payload);
    const [id] = await this.books.insert(book);
    return { id, ...book };
  }

  // Define methods for accessing the database
  async all() {
    return await this.books.select("*");
  }
  async findByName(name) {
    return await this.books.where("name", "like", `%${name}%`).select("*");
  }

  async findById(id) {
    return await this.books.where("id", id).select("*").first();
  }

  async update(id, payload) {
    const update = this.#getContact(payload);
    return await this.books.where("id", id).update(update);
  }

  async delete(id) {
    return await this.books.where("id", id).del();
  }

  async allFavorite() {
    return await this.books.where("favorite", 1).select("*");
  }

  async deleteAll() {
    return await this.books.del();
  }
}
module.exports = BookService;
