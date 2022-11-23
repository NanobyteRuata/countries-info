import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'underlineMatch'
})
export class UnderlineMatchPipe implements PipeTransform {

  transform(value: string, searchValue: string): unknown {
    if(!value) return "";
    if(!searchValue || !value.includes(searchValue)) return value;

    let searchValueArray = value.split(searchValue);
    return searchValueArray[0] + `<u>${searchValue}</u>` + searchValueArray[1];
  }

}
