var index;
function editUser(i) {
  console.log(data[i]);
  index = i;
  document.getElementById("id").value = data[i].id;
  document.getElementById("email").value = data[i].email;
  document.getElementById("username").value = data[i].username;
  document.getElementById("password").value = data[i].password;
}

function updateuser() {
  var newObj = data[index];

  newObj = {
    id: document.getElementById("id").value,
    email: document.getElementById("email").value,
    username: document.getElementById("username").value,
    password: document.getElementById("password").value
  };
  data[index] = newObj;
  displayData(data);
  clearForm(newObj);
}

function clearForm(obj) {
  for (a in obj) {
    document.getElementById(a).value = "";
  }
}
