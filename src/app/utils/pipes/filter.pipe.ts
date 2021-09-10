import {Pipe, PipeTransform} from '@angular/core';
@Pipe ({
  name : 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(list: any[], field: string, searchText: string) : any{
    if (!list || !field) {
      return [];
    }

    if (!searchText) {
      return list
    }

    return list.filter((el) => el[field].toLowerCase().indexOf(searchText) != -1)
  }
}
