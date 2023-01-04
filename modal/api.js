const firebaseConfig = {
    apiKey: "AIzaSyBBQ1lFZ-PLx4_zAJAiPEIAqJ6hnkvbMms",
    authDomain: "tiktok-31159.firebaseapp.com",
    projectId: "tiktok-31159",
    storageBucket: "tiktok-31159.appspot.com",
    messagingSenderId: "912431147607",
    appId: "1:912431147607:web:7ed67c41d93cb4a8e75112"
};
firebase.initializeApp(firebaseConfig);
var image = '';
var fbBucketName = 'images';

// get elements
var uploader = document.getElementById('uploader');
var fileButton = document.getElementById('fileButton');

// listen for file selection
fileButton.addEventListener('change', function (e) {

    // what happened
    console.log('file upload event', e);

    // get file
    var file = e.target.files[0];

    // create a storage ref
    var storageRef = firebase.storage().ref(`${fbBucketName}/${file.name}`);

    // upload file
    var uploadTask = storageRef.put(file);



    // update progress bar
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        function (snapshot) {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploader.value = progress;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
            }
        }, function (error) {


            switch (error.code) {
                case 'storage/unauthorized':

                    break;

                case 'storage/canceled':

                    break;

                case 'storage/unknown':

                    break;
            }
        }, function () {

            var downloadURL = uploadTask.snapshot.downloadURL;
            image = downloadURL;
            console.log('downloadURL ===>', image);
            let imgElement = document.createElement("img");
            imgElement.src = downloadURL
            console.log('pic ==', image)
        });

});

function getImage(){
    return image;
}