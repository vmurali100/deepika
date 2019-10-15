var data = [];

function getData() {
  var getInfo = new XMLHttpRequest();
  getInfo.onreadystatechange = function() {
    if (getInfo.readyState == 4 && getInfo.status == 200) {
      data = JSON.parse(getInfo.response);
      displayData(data);
    }
  };
  getInfo.open(
    "GET",
    "http://www.filltext.com/?rows=5&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true"
  );
  getInfo.send();
}

getData();

function displayData(data) {
  document.getElementById("myTable").innerHTML = "";
  for (i = 0; i < data.length; i++) {
    var myTr = document.createElement("tr");
    for (a in data[i]) {
      var td = document.createElement("td");
      td.innerHTML = data[i][a];
      myTr.appendChild(td);
    }

    var editTd = document.createElement("td");
    var editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.setAttribute("class", "btn btn-warning");
    editBtn.setAttribute("onclick", "editUser(" + i + ")");
    editTd.appendChild(editBtn);
    myTr.appendChild(editTd);

    var deleteTd = document.createElement("td");
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.setAttribute("class", "btn btn-danger");
    deleteBtn.setAttribute("onclick", "deleteUser(" + i + ")");

    deleteTd.appendChild(deleteBtn);
    myTr.appendChild(deleteTd);

    document.getElementById("myTable").appendChild(myTr);
  }
}
