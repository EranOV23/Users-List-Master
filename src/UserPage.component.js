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
        this.element.append( userComponent.render() );
        return this.getUsersPosts(user);
    }

    getUsersPosts(user){
        userPostsService
            .getUserPosts(user.id)
            .then( this.appendUserPosts.bind(this) );
    }

    appendUserPosts(posts){
        let PostsComponent = new UserPostsComponent(posts, this.user);
        this.element.append( PostsComponent.render() );
    }

    render(){
        this.element = $(`<main></main>`);
        this.getUser();
        return this.element;
    }
}
