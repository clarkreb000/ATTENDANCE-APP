var database, refUsers, refClubs;
var user;

function initializeFirebase(){
    var firebaseConfig = {
        apiKey: "AIzaSyAXNvwa4gno5IPCY4w0WiG14kssmzodzQ0",
        authDomain: "attendance-app-4f705.firebaseapp.com",
        databaseURL: "https://attendance-app-4f705.firebaseio.com",
        projectId: "attendance-app-4f705",
        storageBucket: "attendance-app-4f705.appspot.com",
        messagingSenderId: "426521114058",
        appId: "1:426521114058:web:ab69f21cc54864b7964b33",
        measurementId: "G-XPEYCKM4EC"
    };
    firebase.initializeApp(firebaseConfig);
    database = firebase.database();
    refUsers = database.ref('users');
    refClubs = database.ref('clubs');
}

function writeUserData(username, name, teacher, password){
    if(username == "" || name == "" || password == ""){
        alert("put something in you big fat white nasty smellin b")
    }
    else {
        alert("nice")
        var data = {
            name: name,
            password: password,
            username: username,
            role: teacher == true ? "teacher" : "student",
            clockInHour: new Date().getHours(),
            clockInMinute: new Date().getMinutes(),
            clockInSecond: new Date().getSeconds(),
            totalTime: 0
        };
        refUsers.push(data);
        user = data;
    }
    alert('moving on');
}

function listOfClubs() {
    refClubs.once('value', function (snapshot){
        snapshot.forEach(function(childSnapshot){
            var club = document.createElement("INPUT").setAttribute("type", "checkbox");
            club.innerText = childSnapshot.child("name").val();
        })
    });
    addNewClub();
}

function addClub(club){

}

function addNewClub(){
    if(document.getElementById("My club isn't listed! I need to add another").value == "My club isn't listed! I need to add another"){
        var club = document.createElement("INPUT");
        club.setAttribute("type", "submit");
        club.innerText = "Club Name"
        var teacher = document.createElement("INPUT");
        teacher.setAttribute("type", "submit");
        teacher.innerText = "teacher's name (or you, if you are a teacher!)"

        var button = document.createElement("INPUT");
        button.setAttribute("type", "button")
        if(button.value == 1){
            var data = {
                name: club,
                proctor: teacher
            };

            refClubs.push(data);
        }
    }
}