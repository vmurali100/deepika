import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  constructor(private commonService: CommonService) {}
  contacts: any = [];
  ngOnInit() {
    this.commonService.getContacts().subscribe(res => {
      this.contacts = res;
      this.commonService.saveContacts(this.contacts); //Saving the Data in common service
    });
  }
}
