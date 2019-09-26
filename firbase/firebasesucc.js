var admin = require('firebase-admin');

var serviceAccount = require('./serviceAccountKey.json'); // Get refresh token from OAuth2 flow

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://attendance-app-4f705.firebaseio.com"
});

// Get a database reference to our blog
var db = admin.database();
var ref = db.ref("server/saving-data/fireblog");

var usersRef = ref.child("users");
usersRef.set({
    alanisawesome: {
        date_of_birth: "June 23, 1912",
        full_name: "Alan Turing"
    },
    gracehop: {
        date_of_birth: "December 9, 1906",
        full_name: "Grace Hopper"
    }
});

var firebaseConfig = {
    apiKey: "AIzaSyAXNvwa4gno5IPCY4w0WiG14kssmzodzQ0",
    authDomain: "attendance-app-4f705.firebaseapp.com",
    databaseURL: "https://attendance-app-4f705.firebaseio.com",
    projectId: "attendance-app-4f705",
    storageBucket: "attendance-app-4f705.appspot.com",
    messagingSenderId: "426521114058",
    appId: "1:426521114058:web:982ba60fa5754c51964b33"
};
