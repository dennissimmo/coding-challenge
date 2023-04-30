import AbstractView from "./AbstractView";

export default class extends AbstractView {

    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHTML() {
        return `
            <h1>Welcome back, Denys</h1>
            <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi inventore omnis labore sed sapiente facilis quia ad deleniti exercitationem vitae?
            </p>
            <p>
                <a href="/posts" data-link>View recent posts</a>
            </p>
        `
    }
}