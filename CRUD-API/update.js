function editUser(i) {
  index = i;
  var obj = allUsers[i];
  //   for (a in obj) {
  //     obj[a] = document.getElementById(a).value;
  //   }
  document.getElementById("fname").value = allUsers[i].fname;
  document.getElementById("lname").value = allUsers[i].lname;
}

function updateUser() {
  var newObj = {
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
    id: allUsers[index].id
  };
  var info = new XMLHttpRequest();
  info.onreadystatechange = function() {
    if (info.readyState == 4 && info.status == 201) {
      console.log(info.response);
    }
  };
  info.open("PUT", "http://localhost:3000/users/" + newObj.id);
  info.setRequestHeader("Content-type", "application/json");
  info.send(JSON.stringify(newObj));
}
