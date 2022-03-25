function AddUser(){
  un=document.getElementById("username").value;
  localStorage.setItem("User_name",un);
  window.location="kwitter_room.html";
}