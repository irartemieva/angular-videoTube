import { Pipe, PipeTransform } from '@angular/core';

import { Item } from 'src/app/youtube/models/search-item.model';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(results: Item[]) {
    //let arr: Item[] = results;

    results = results.sort((a, b) => {
      let first = new Date(a.snippet.publishedAt).getTime();
      let second = new Date(b.snippet.publishedAt).getTime();
      return first - second;
    })

    return results;
  }

}
