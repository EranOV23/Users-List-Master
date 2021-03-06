let $ = require("jquery");


class UserPostsService{

    constructor() {
        this.url = "https://jsonplaceholder.typicode.com/posts?userId=";
    }

    getUserPosts(userId){
        return $.get(this.url + userId);
    }

}

module.exports = new UserPostsService();