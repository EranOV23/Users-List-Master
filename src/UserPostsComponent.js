class UserPostsComponent {
    constructor(posts, user){
        this.posts = posts;
        this.user = user;
    }

    render(){
        let posts = this.posts
            .map( posts => 
                `<li data-post-id="${posts.id}">
                    <h3>${posts.id} - ${posts.title}</h3>
                    <p>${posts.body}</hp>
                </li>`)

       return $(`<section>
        <hr>
        <h2>${this.user.name}׳s posts</h2>
        <ul>${posts.join("")}</ul>
        </section>`);
    }
}


