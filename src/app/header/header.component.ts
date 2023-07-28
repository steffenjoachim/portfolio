import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  activeLink = ''; 

  onLinkClick(link: string) {
    this.activeLink = link;
  }

  openMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu?.classList.remove('d-none');
  }

  closeMenu(){
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu?.classList.add('d-none');
  }
  
}

