import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent {
anukriti:string = 'anukrti';
constructor() {

}
xyz():String {
  return "hello world";
}

}
