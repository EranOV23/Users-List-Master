let $ = require("jquery");

class UserPostsComponent {
    constructor(posts, user){
        this.posts = posts;
        this.user = user;
    }

    // there is an option the separte to two function - every function do one thing
    render(){
        let posts = this.posts
            .map( posts => 
                `<li data-post-id="${posts.id}">
                    <h3>${posts.id} - ${posts.title}</h3>
                    <p>${posts.body}</hp>
                </li>`)

       return $(`<section>
        <hr>
        <ul>${posts.join("")}</ul>
        </section>`);
    }
}

module.exports = UserPostsComponent;


