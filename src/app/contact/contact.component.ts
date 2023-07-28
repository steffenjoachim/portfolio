import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;
  


showGreen() {
 document.getElementById('mouseTarget')?.classList.remove('d-none');
  }
  
removeGreen(){
  document.getElementById('mouseTarget')?.classList.add('d-none');
   }

async sendMail(){
  console.log('Sending Mail', this.myForm);
 
  let nameField = this.nameField.nativeElement;
  let emailField = this.emailField.nativeElement;
  let messageField = this.messageField.nativeElement;
  let sendButton =  this.sendButton.nativeElement
  nameField.disabled = true;
  emailField.disabled = true;
  messageField.disabled = true;
  sendButton.disabled = true;
  //animation anzeigen
  let fd = new FormData();
  fd.append('name', nameField.value);
  fd.append('email', emailField.value);
  fd.append('message', messageField.value);

  await fetch('https://steffen-schanze.de/send_mail/send_mail.php',
  {
    method: 'POST',
    body: fd
  });
  alert('Die Nachricht wurde erfolgreich gesendet');
  nameField.disabled = false;
  emailField.disabled = false;
  messageField.disabled = false;
  sendButton.disabled = false;
 }  

}


