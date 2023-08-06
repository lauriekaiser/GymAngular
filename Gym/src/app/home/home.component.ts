import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

interface Member {
  id: number;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
 
name: string = '';
members: Member[] = [];
 
allowedNames = ['Laurie', 'Amy'];
showAlert: boolean = false;

  addName() {
   if (this.allowedNames.includes(this.name)) {
    this.members.push({ id: this.members.length + 1, name: this.name });
    this.name = '';
    this.showAlert = false;
   } else {
    this.showAlert = true;
   }
}
}

