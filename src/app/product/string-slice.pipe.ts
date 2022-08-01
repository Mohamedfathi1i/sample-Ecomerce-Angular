import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringSlice'
})
export class StringSlicePipe implements PipeTransform {

  transform(value: string, arg:number): string {
    return value.slice(0,arg)
  }

}
