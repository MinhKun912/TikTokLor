class User {
    id;
    name;
    username;
    email;
    password;

    avatarImg;

    constructor(id, name, username, email, password,avatarImg) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.avatarImg=avatarImg;
    }
    setId(id){
        this.id = id;
    }
    getId(){
        return this.id;
    }
}
