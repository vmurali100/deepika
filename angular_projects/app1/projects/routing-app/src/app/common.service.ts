import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  url =
    "http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true";
  contacts = [];
  constructor(private _http: HttpClient) {}

  getContacts() {
    return this._http.get(this.url);
  }
  saveContacts(data) {
    this.contacts = data;
  }

  getSavedContacts() {
    return this.contacts;
  }
}
