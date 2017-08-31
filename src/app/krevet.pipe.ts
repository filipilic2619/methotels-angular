import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'krevet'
})
export class KrevetPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value.length == 0 || args == null || args[0] == null || args[0].length == 0)
      return value;
    let resultArray = [];
    for(let item of value) {
      if(parseInt(item['krevet']) == parseInt(args[0]))
        resultArray.push(item);
    }
    return resultArray;
  }

}