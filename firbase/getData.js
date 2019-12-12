var admin = require('firebase-admin');
var serviceAccount = require('./serviceAccountKey.json'); // Get refresh token from OAuth2 flow

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://attendance-app-4f705.firebaseio.com"
});

// Get a database reference to our blog
let db = admin.firestore();
let docRef = db.collection('users');

function setData (username, age, dob, name) {
    docRef.doc(name).set({
        username: username,
        age: age,
        doc: dob
    });
}

for(let i = 0; i < 5; i++){
    setData(i, i+i, i^3, "studentf" + i);
}

docRef.get();


var firebaseConfig = {
    apiKey: "AIzaSyAXNvwa4gno5IPCY4w0WiG14kssmzodzQ0",
    authDomain: "attendance-app-4f705.firebaseapp.com",
    databaseURL: "https://attendance-app-4f705.firebaseio.com",
    projectId: "attendance-app-4f705",
    storageBucket: "attendance-app-4f705.appspot.com",
    messagingSenderId: "426521114058",
    appId: "1:426521114058:web:982ba60fa5754c51964b33"
};
