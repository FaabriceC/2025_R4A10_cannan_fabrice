import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-customer',
  standalone: true, 
  imports: [ButtonComponent],
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent {
  feeds = [
    { 
        name: 'Edward Newgate', 
        role: 'Founder Circle', 
        image: 'assets/lego_1.jpg', 
        message: 'Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely.' 
    },
    { 
        name: 'Elon Musk', 
        role: 'CEO of Tesla & SpaceX', 
        image: 'assets/lego_2.jpg', 
        message: 'This platform is a game-changer! It enhances productivity and streamlines workflows like never before.' 
    },
    { 
        name: 'Sundar Pichai', 
        role: 'CEO of Google', 
        image: 'assets/lego_3.jpg', 
        message: 'A fantastic service that has revolutionized how we handle our data and customer interactions.' 
    },
];


index = 0;

previous() {
  this.changeCustomer(-1);
}

next() {
  this.changeCustomer(1);
}

changeCustomer(direction: number) {
  const newIndex = (this.index + direction + this.feeds.length) % this.feeds.length;
  this.index = newIndex;
}

get customer() {
  return this.feeds[this.index];
}
}