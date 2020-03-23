import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "user"
})
export class UserPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    const newArray = value.map(obj => {
      obj.fname = obj.fname.slice(0, 3).toUpperCase();
      return obj;
    });
    return newArray;
  }
}
