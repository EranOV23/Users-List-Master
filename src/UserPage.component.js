let $ = require("jquery"),
    UserDetailsComponent = require("./UserDetails.component"),
    userPostsComponent = require("./UserPostscomponent"),
    userService = require("./UserService"),
    UserPostsService = require("./UserPostsService");


class UserPageComponent {
    constructor(userId){
        this.userId = userId;
        this.user = "";
    }

    getUser() {
        userService
            .getUser(this.userId)
            .then( this.appendUserDetails.bind(this) )
    }

    appendUserDetails(user){
        this.user = user;
        let userComponent = new UserDetailsComponent(user);
        this.element.find(".details").append( userComponent.render() );
    }

    getUsersPosts(){
        UserPostsService
            .getUserPosts(this.userId)
            .then( this.appendUserPosts.bind(this) );
    }

    appendUserPosts(posts){
        let PostsComponent = new userPostsComponent(posts, this.user);
        this.element.find(".posts").append( PostsComponent.render() );
    }

    render(){
        this.element = $(
            `<main>
                <div class="details"></div>
                <div class="posts"></div>
            </main>`);
        this.getUser();
        this.getUsersPosts();
        return this.element;
    }
}

module.exports = UserPageComponent;