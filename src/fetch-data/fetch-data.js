export default class FetchData {
    constructor() {
        this._urlPreview = "https://reqres.in/api";
        this._urlFullById = "http://localhost:3000";
    }

    async FetchData(url) {
        const result = await fetch(`${url}`);
        

        if(!result.ok) {
            throw new Error(`The link is not proper ${url}, status ${result.status}`)
        }
        const json = await result.json();

        return json;
    }

    getAllPosts() {
        return this.FetchData(`${this._urlPreview}/users?page=1`);
    }

    getPostById(id) {
        return this.FetchData(`${this._urlPreview}/users/${id}`);
    }

    getPostByIdFull(id) {
        return this.FetchData(`${this._urlFullById}/users/${id}`);
    }
}