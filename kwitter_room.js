// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyC4bMb7-OAESX9nxu9ZiJPktlv0G9eU6NI",
      authDomain: "kwitter-ab773.firebaseapp.com",
      projectId: "kwitter-ab773",
      storageBucket: "kwitter-ab773.appspot.com",
      messagingSenderId: "99569336734",
      appId: "1:99569336734:web:1ecaf93908d5ac77f0168f",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name",
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {
      firebase
            .database()
            .ref("/")
            .on("value", function (snapshot) {
                  document.getElementById("output").innerHTML = "";
                  snapshot.forEach(function (childSnapshot) {
                        childKey = childSnapshot.key;
                        Room_names = childKey;
                        console.log("Room Name - " + Room_names);
                        row =
                              "<div class='room_name' id=" +
                              Room_names +
                              " onclick='redirectToRoomName(this.id)' >#" +
                              Room_names +
                              "</div><hr>";
                        document.getElementById("output").innerHTML += row;
                  });
            });
}

getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}