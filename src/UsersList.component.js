class UsersListComponent {
    constructor(usersList){
        this.usersList = usersList;
    }

    renderUsers(){
       let users = this.usersList
           .map( user => `<li data-user-id="${user.id}">${user.name}</li>` );

       return users.join("");
    }

    onUserClick(e){
        this.onUserCallback(e.target.dataset.userId);
    }

    onUserSelected(callback, callback2){
        this.onUserCallback = callback;
    }

    render(){
        let $html = $(`
<nav>
    <h3>Users</h3>
    <ul>
        ${ this.renderUsers() } 
    </ul>
</nav>
`);

        $html.find("li").on("click", this.onUserClick.bind(this) );

        return $html;
    }
}

