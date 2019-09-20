var admin = require('firebase-admin');

var refreshToken; // Get refresh token from OAuth2 flow

admin.initializeApp({
    credential: admin.credential.refreshToken(refreshToken),
    databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
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
// Initialize the default app
var admin = require('firebase-admin');
var app = admin.initializeApp();