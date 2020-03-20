import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
// import { userInfo } from "os";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  constructor(private _http: HttpClient) {}

  getUsers() {
    return this._http.get("http://localhost:3000/users");
  }

  deleteUser(user) {
    return this._http.delete("http://localhost:3000/users/" + user.id);
  }

  createUser(user) {
    return this._http.post("http://localhost:3000/users", user);
  }

  updateUser(user) {
    return this._http.put("http://localhost:3000/users/" + user.id, user);
  }
}
