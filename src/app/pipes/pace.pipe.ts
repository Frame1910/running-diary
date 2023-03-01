import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pace'
})
export class PacePipe implements PipeTransform {

  transform(seconds: number): string {
    const minutes = Math.floor(seconds / 60); // get whole minutes
    const remainingSeconds = seconds % 60; // get remaining seconds

    return `${minutes}:${remainingSeconds}/km`
  }

}
