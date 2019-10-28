function addUser() {
  var user = {
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
    gender:
    subjects:
  };
  user.id = null;
  console.log(user);

  var info = new XMLHttpRequest();
  info.onreadystatechange = function() {
    if (info.readyState == 4 && info.status == 201) {
      console.log(info.response);
    }
  };
  info.open("POST", "http://localhost:3000/users");
  info.setRequestHeader("Content-type", "application/json");
  info.send(JSON.stringify(user));
}
