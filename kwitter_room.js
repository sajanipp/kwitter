var firebaseConfig = {
  apiKey: "AIzaSyC1JfK2ut3f6jHsC9QU6zDQexF2k5LgOPE",
  authDomain: "mycity-glgo.firebaseapp.com",
  databaseURL: "https://mycity-glgo-default-rtdb.firebaseio.com",
  projectId: "mycity-glgo",
  storageBucket: "mycity-glgo.appspot.com",
  messagingSenderId: "208983517146",
  appId: "1:208983517146:web:c0877b50f4556a803682e3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
username=localStorage.getItem("User_name");
document.getElementById("username").innerHTML="welcome "+username+"!";
function addroom(){
  room_name=document.getElementById("room_name").value;
 firebase.database().ref("/").child(room_name).update({
    purpose : "adding user"
});
localStorage.setItem("room_name",room_name); 
window.location="kwitter_page.html";
}







function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+ Room_names+ "</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function Logout() {
  localStorage.removeItem("User_name");
  localStorage.removeItem("room_name");
  window.location="index.html";

}
function redirecttoroomname(name){
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}
