import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(millis: number): unknown {
    let seconds = millis / 1000

    const minutes = Math.floor(seconds / 60); // get whole minutes
    const remainingSeconds = seconds % 60; // get remaining seconds

    return `${minutes}:${remainingSeconds}:00`
  }

}
