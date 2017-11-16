import { Component } from '@angular/core';
import { Event } from './event';

const EVENT: Event[] = [
  { selected: false, adNumber : 110, adName : 'T10135', adPricingNumbers :'9056, 9700, 9837, 7873', adStartDate :'07/05/2005', adEndDate : '17/05/2005' ,country :'usa'},
  {	selected: false, adNumber : 111, adName : 'T10136', adPricingNumbers :'9056, 9700, 9837, 7873', adStartDate :'07/05/2005', adEndDate : '17/05/2005',country :'uk' },
  {	selected: false, adNumber : 112, adName : 'T10137', adPricingNumbers :'9056, 9700, 9837, 7873', adStartDate :'07/05/2005', adEndDate : '17/05/2005' ,country :'usa'},
  {	selected: false, adNumber : 113, adName : 'T10139', adPricingNumbers :'9056, 9700, 9837, 7873', adStartDate :'07/05/2005', adEndDate : '17/05/2005' ,country :'usa'},
  {	selected: false, adNumber : 113, adName : 'T10139', adPricingNumbers :'9056, 9700, 9837, 7873', adStartDate :'07/05/2005', adEndDate : '17/05/2005',country :'uk' },
  {	selected: false, adNumber : 113, adName : 'T10139', adPricingNumbers :'9056, 9700, 9837, 7873', adStartDate :'07/05/2005', adEndDate : '17/05/2005',country :'usa' },
  
];
const NAMES : string[] = ['x','y','a','b','c'];
const FRUITS : string[] = ['apple','banana','kiwi'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'logout';
  events = EVENT;
  selectValue = "";
  radioValue : boolean = false;
  fruits = FRUITS;
  app = NAMES;
}
