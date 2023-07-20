import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

members = [{
  id: 1,
  'name': 'Laurie'
},
{
  id: 2,
  'name': 'Amy'
}]

// drag(event: DragEvent): void {
//   const target = event.target as HTMLElement;
//   event.dataTransfer?.setData("text", target.id);
// }

// allowDrop(event: DragEvent): void {
//   event.preventDefault();
// }

// drop(event: DragEvent): void {
//   event.preventDefault();
//   const data = event.dataTransfer?.getData("text");
  
//   const target = event.target as HTMLElement;
//  const draggedElement = document.getElementById(data);

//   if (target && draggedElement) {
//   target.appendChild(draggedElement);
// }}
}
