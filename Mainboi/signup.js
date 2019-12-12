function validate(){
    alert ("START");
    var username1 = document.getElementById("username").value;
    var name1 = document.getElementById("name").value;
    var password1 = document.getElementById("password").value;

    // Get a database reference to our blog
    const firebase = require("firebase");
    require("firebase/firestore");


    // Initialize Cloud Firestore through Firebase
    firebase.initializeApp({
        apiKey: 'AIzaSyAXNvwa4gno5IPCY4w0WiG14kssmzodzQ0',
        authDomain: 'attendance-app-4f705.firebaseapp.com',
        projectId: 'attendance-app-4f705'
    });

    var db = firebase.firestore();

    let docRef = db.collection('users');
    docRef.doc(username1).value.add({
        name: name1,
        password: password1,
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    }).catch(function(error) {
        console.error("Error adding document: ", error);
    });
    alert ("FINISH");
    window.location = "index.html"; // Redirecting to other page.
    return false;
}