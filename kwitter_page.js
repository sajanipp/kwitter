//YOUR FIREBASE LINKS
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
room_name=localStorage.getItem("room_name");
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:username,
            message:msg,like:0
      });
      document.getElementById("msg").value="";
}























function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name=message_data['name'];
msg=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+ name +"<img class='user_tick' src='tick.png'></h4>"//End code
message_with_tag="<h4 class='message_h4'>"+ msg +"</h4>";
like_button="<button class='btn btn-warning' id="+ firebase_message_id +" value="+ like +" onclick='update_like(this.id)' >";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+ like +"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
      } });  }); }

getData();

function update_like(message_id){
      button_id=message_id;
      likes = document.getElementById(button_id).value;
      update_likes=Number(likes) + 1;
      firebase.database().ref(room_name).child(message_id).update({
            like:update_likes
      });
      
      
}
function logout() {
      localStorage.removeItem("User_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
    
    }