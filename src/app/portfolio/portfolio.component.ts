import { Component } from '@angular/core';
import { Project } from '../interfaces/project';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  projects: Project []
= [
    { "name": "Join", "skills": "JavaScript | HTML | CSS", "description": "Task manager inspired by Kanban System, create and organize tasks using drag and drop functions, assign users and categories.", "serverUrl": "https://steffen-schanze.developerakademie.net/KANBAN-Board", "gitUrl": "https://github.com/steffenjoachim/KANBAN-Board", "imgUrl": "/assets/img/join.png", "order": "odd" },
    { "name": "El Pollo Loco", "skills": "JavaScript | HTML | CSS", "description": "Jump an run game", "serverUrl": "https://steffen-schanze.developerakademie.net/El-Pollo-loco", "gitUrl": "https://github.com/steffenjoachim/El-Pollo-loco", "imgUrl": "/assets/img/El_Pollo_Loco.png", "order": "even" }
  ];

}

