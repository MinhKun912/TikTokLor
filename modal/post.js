class Post {
    idPost;
    title;
    imgPost;
    listCM = [];
    like;
    idUser;

    constructor(idPost, title, imgPost,like,idUser) {
        this.idPost = idPost;
        this.title = title;
        this.imgPost = imgPost;
        this.like=like;
        this.idUser = idUser
    }
}