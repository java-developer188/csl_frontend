import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) return null;
    if (!args) return value;

    if(isNaN(args)){
      console.log("string");
      args = args.toLowerCase();
      console.log(args);

      return value.filter((item: any) => {
      return JSON.stringify(item).toLowerCase().includes(args);
    })
    }

    if(!isNaN(args)){
      console.log("number");
      return value.filter((item: any) => {
      return JSON.stringify(item).includes(args);
      })
    }
    // if(args.isdigit()){
    //   return value.filter((item: any) => {
    //     return JSON.stringify(item).includes(args);
    //   })
    // }
    args = args.toLowerCase();

    return value.filter((item: any) => {
      return JSON.stringify(item).toLowerCase().includes(args);
    })
  }

}
