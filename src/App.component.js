let $ = require("jquery"),
    UserPageComponent = require("./UserPage.component"),
    UsersListComponent = require("./UsersList.component"),
    userService = require("./UserService");

class AppComponent {

    getUsersList() {
        userService
            .getAllUsers()
            .then( this.appendUsersList.bind(this) );
    }

    appendUsersList(list){
        let usersList = new UsersListComponent(list);
        usersList.onUserSelected( this.appendUserPage.bind(this) );
        this.element.append( usersList.render() );
    }

    appendUserPage(id){
        if(this.userPageElement)
            this.userPageElement.remove();

        let userPage = new UserPageComponent(id);
        this.userPageElement = userPage.render();
        this.element.append( this.userPageElement );

    }

    render(){
        this.element = $(`<div></div>`);
        this.getUsersList();
        return this.element;
    }

}

function createApp(){
    let app = new AppComponent();
    $(document.body).append( app.render() );
}

module.exports = createApp;