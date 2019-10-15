function createuser() {
  var newObj = data[index];

  newObj = {
    id: document.getElementById("id").value,
    email: document.getElementById("email").value,
    username: document.getElementById("username").value,
    password: document.getElementById("password").value
  };
  data.push(newObj);
  displayData(data);
  clearForm(newObj);
}
