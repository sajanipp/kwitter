var firebaseConfig = {
  apiKey: "AIzaSyA1I8v8mSYSys4KKJQmtnhi9Cpc4N181-A",
  authDomain: "einsteinbot-cyxu.firebaseapp.com",
  databaseURL: "https://einsteinbot-cyxu-default-rtdb.firebaseio.com",
  projectId: "einsteinbot-cyxu",
  storageBucket: "einsteinbot-cyxu.appspot.com",
  messagingSenderId: "256369926034",
  appId: "1:256369926034:web:392a48d3fd4bbd69566b4b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// ADD YOUR FIREBASE LINKS

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


