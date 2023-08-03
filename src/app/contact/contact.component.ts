// import { Component, ElementRef, ViewChild } from '@angular/core';

// @Component({
//   selector: 'app-contact',
//   templateUrl: './contact.component.html',
//   styleUrls: ['./contact.component.scss']
// })
// export class ContactComponent {
//   @ViewChild('myForm') myForm!: ElementRef;
//   @ViewChild('nameField') nameField!: ElementRef;
//   @ViewChild('emailField') emailField!: ElementRef;
//   @ViewChild('messageField') messageField!: ElementRef;
//   @ViewChild('sendButton') sendButton!: ElementRef;
  


// showGreen() {
//  document.getElementById('mouseTarget')?.classList.remove('d-none');
//   }
  
// removeGreen(){
//   document.getElementById('mouseTarget')?.classList.add('d-none');
//    }

// async sendMail(){
//   console.log('Sending Mail', this.myForm);
 
//   let nameField = this.nameField.nativeElement;
//   let emailField = this.emailField.nativeElement;
//   let messageField = this.messageField.nativeElement;
//   let sendButton =  this.sendButton.nativeElement
//   nameField.disabled = true;
//   emailField.disabled = true;
//   messageField.disabled = true;
//   sendButton.disabled = true;
//   //animation anzeigen
//   let fd = new FormData();
//   fd.append('name', nameField.value);
//   fd.append('email', emailField.value);
//   fd.append('message', messageField.value);

//   await fetch('https://steffen-schanze.de/send_mail/send_mail.php',
//   {
//     method: 'POST',
//     body: fd
//   });
//   alert('Die Nachricht wurde erfolgreich gesendet');
//   nameField.disabled = false;
//   emailField.disabled = false;
//   messageField.disabled = false;
//   sendButton.disabled = false;
//  }  

// }

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

  focusedField: HTMLInputElement | HTMLTextAreaElement | null = null;

  onInputFieldChange(inputElement: HTMLInputElement | HTMLTextAreaElement) {
    if (inputElement.value.trim() === '') {
      inputElement.classList.add('empty');
    } else {
      inputElement.classList.remove('empty');
    }
  }

  onFocus(inputElement: HTMLInputElement | HTMLTextAreaElement) {
    this.focusedField = inputElement;
  }

  onBlur() {

    this.focusedField = null;
  }

  checkInputName(){
    let nameField = this.nameField.nativeElement;
    if (nameField.value !== '') {
      nameField.classList.add('green');
      nameField.classList.remove('red');
      document.getElementById('name-attention')?.classList.add('d-none');
      document.getElementById('name-required')?.classList.add('transperent');
    } else {
      nameField.classList.add('red');
      document.getElementById('name-attention')?.classList.remove('d-none');
      document.getElementById('name-required')?.classList.remove('transperent');
    }
  }

  setNameAttention(){
    let nameField = this.nameField.nativeElement;
    if (nameField.value == '') {
      nameField.classList.add('red');
      document.getElementById('name-attention')?.classList.remove('d-none');
      document.getElementById('name-required')?.classList.remove('transperent');
    } else {
      nameField.classList.add('green');
      document.getElementById('name-attention')?.classList.add('d-none');
      document.getElementById('name-required')?.classList.add('transperent');
    }
  }

  checkInputEmail(){
    let emailField = this.emailField.nativeElement;
    if (emailField.value !== '') {
      emailField.classList.add('green');
      emailField.classList.remove('red');
      document.getElementById('email-attention')?.classList.add('d-none');
      document.getElementById('email-required')?.classList.add('transperent');
    } else {
      emailField.classList.add('red');
      document.getElementById('email-attention')?.classList.remove('d-none');
      document.getElementById('email-required')?.classList.remove('transperent');
    }
  }

  setEmailAttention(){
    let emailField = this.emailField.nativeElement;
    if (emailField.value == '') {
      emailField.classList.add('red');
      document.getElementById('email-attention')?.classList.remove('d-none');
      document.getElementById('email-required')?.classList.remove('transperent');
    } else {
      emailField.classList.add('green');
      document.getElementById('email-attention')?.classList.add('d-none');
      document.getElementById('email-required')?.classList.add('transperent');
  }
}

  checkInputMessage(){
    let messageField = this.messageField.nativeElement;
    if (messageField.value !== '') {
      messageField.classList.add('green');
      messageField.classList.remove('red');
      document.getElementById('message-attention')?.classList.add('d-none');
      document.getElementById('message-required')?.classList.add('transperent');
    } else {
      messageField.classList.add('red');
      document.getElementById('message-attention')?.classList.remove('d-none');
      document.getElementById('message-required')?.classList.remove('transperent');
    }
  }

  setMessageAttention(){
    let messageField = this.messageField.nativeElement;
    if (messageField.value == '') {
      messageField.classList.add('red');
      document.getElementById('message-attention')?.classList.remove('d-none');
      document.getElementById('message-required')?.classList.remove('transperent');
    } else {
      messageField.classList.add('green');
      document.getElementById('message-attention')?.classList.add('d-none');
      document.getElementById('message-required')?.classList.add('transperent');
  }
}

  async sendMail() {
  
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton =  this.sendButton.nativeElement;
  
    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;
  
    // Animation anzeigen
  
    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email', emailField.value);
    fd.append('message', messageField.value);
  
    await fetch('https://steffen-schanze.de/send_mail/send_mail.php', {
      method: 'POST',
      body: fd
    });

    this.showSucessText();
  
    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;

    nameField.value = '';
    emailField.value = '';
    messageField.value = '';
  }

  showSucessText(){
    document.getElementById('success')?.classList.remove('d-none-i');
  }

  closeSuccessText(){
    document.getElementById('success')?.classList.add('d-none-i');
  }

  showGreen() {
    document.getElementById('mouseTarget')?.classList.remove('d-none');
  }
  
  removeGreen() {
    document.getElementById('mouseTarget')?.classList.add('d-none');
  }

  scrollToTop(): void {
      window.scrollTo(0, 0);
  }
}



