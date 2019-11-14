var admin = require('firebase-admin');
var serviceAccount = require('./serviceAccountKey.json'); // Get refresh token from OAuth2 flow

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://attendance-app-4f705.firebaseio.com"
});

// Get a database reference to our blog
let db = admin.firestore();
let docRef = db.collection('users');

docRef.doc(document.getElementById("username").value).set({
    password: document.getElementById("password").value,
});