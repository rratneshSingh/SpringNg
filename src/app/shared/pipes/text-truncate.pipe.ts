import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTruncate'
})
export class TextTruncatePipe implements PipeTransform {

  transform(value: string, truncateLength = 20, dotLength = 10 ): unknown {
    let dotString = '';
    for( let i = 0 ; i < dotLength ; i++ ){
      dotString += '.';
    }
    return value.substr(0, truncateLength) + dotString;
  }
}
