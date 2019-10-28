function deleteUser(i) {
  console.log(allUsers[i]);

  var info = new XMLHttpRequest();
  info.onreadystatechange = function() {
    if (info.readyState == 4 && info.status == 201) {
      console.log(info.response);
    }
  };
  info.open("DELETE", "http://localhost:3000/users/" + allUsers[i].id);
  info.send();
}
