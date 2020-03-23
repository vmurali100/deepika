import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CommonService } from "../common.service";

@Component({
  selector: "app-contact-details",
  templateUrl: "./contact-details.component.html",
  styleUrls: ["./contact-details.component.css"]
})
export class ContactDetailsComponent implements OnInit {
  selectedContact: any;
  selectedName: any;
  constructor(
    private route: ActivatedRoute,
    private commonService: CommonService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(res => {
      this.selectedName = res["params"].user;
      let allContacts = this.commonService.getSavedContacts(); //getting saved Data from Serivce
      this.selectedContact = allContacts.find(contact => {
        return contact.fname == this.selectedName;
      });
    });
  }
}
