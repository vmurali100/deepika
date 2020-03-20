import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  users;
  isEdit = false;
  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.getAllUsers();
  }

  deleteUser(user) {
    this.commonService.deleteUser(user).subscribe(res => {
      this.getAllUsers();
    });
  }

  getAllUsers() {
    this.commonService.getUsers().subscribe(res => {
      this.users = res;
    });
  }

  addUser(userForm) {
    console.log(userForm.value);
    this.commonService.createUser(userForm.value).subscribe(res => {
      this.getAllUsers();
      userForm.reset();
    });
  }

  editUser(userForm, user) {
    this.isEdit = true;
    userForm.setValue(user);
  }

  updateUser(userForm: NgForm) {
    console.log(userForm.value);
    this.commonService.updateUser(userForm.value).subscribe(res => {
      this.getAllUsers();
      userForm.reset();
      this.isEdit = false;
    });
  }
}
