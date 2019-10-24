var allUsers = [];
function getDataFromServer() {
  var getData = new XMLHttpRequest();
  getData.onreadystatechange = function() {
    if (getData.readyState == 4 && getData.status == 200) {
      console.log(JSON.parse(getData.response));
      allUsers = JSON.parse(getData.response);
      displayData(allUsers);
    }
  };

  getData.open("GET", "http://localhost:3000/users");
  getData.send();
}

getDataFromServer();

function displayData(allUsers) {
  document.getElementById("myTable").innerHTML = "";
  for (i = 0; i < allUsers.length; i++) {
    var myTr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerHTML = allUsers[i].fname;
    myTr.appendChild(td1);

    var td2 = document.createElement("td");
    td2.innerHTML = allUsers[i].lname;
    myTr.appendChild(td2);

    var td3 = document.createElement("td");
    var editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.setAttribute("onclick", "editUser(" + i + ")");
    td3.appendChild(editButton);
    myTr.appendChild(td3);

    var td4 = document.createElement("td");
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.setAttribute("onclick", "deleteUser(" + i + ")");
    td4.appendChild(deleteBtn);
    myTr.appendChild(td4);

    document.getElementById("myTable").appendChild(myTr);
  }
}

function clearForm() {
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
}
