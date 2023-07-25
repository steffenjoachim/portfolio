import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

showGreen() {
 document.getElementById('mouseTarget')?.classList.remove('d-none');
  }
  
removeGreen(){
  document.getElementById('mouseTarget')?.classList.add('d-none');
   }

}


