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
    { "name": "Join", "skills": "JavaScript | HTML | CSS", "description": "Task manager inspired by Kanban System, create and organize tasks using drag and drop functions, assign users and categories.", "serverUrl": "https://steffen-schanze.de/Join", "gitUrl": "https://github.com/steffenjoachim/KANBAN-Board", "imgUrl": "/assets/img/join.png", "order": "odd" },
    { "name": "El Pollo Loco", "skills": "JavaScript | HTML | CSS", "description": "A simple Jump-and-Run game based on object-oriented approach. Help Pepe in the desert to fight chickens and collect bottels to finally concer the end-boss.", "serverUrl": "https://steffen-schanze.de/El-Pollo-loco", "gitUrl": "https://github.com/steffenjoachim/El-Pollo-loco", "imgUrl": "/assets/img/El_Pollo_Loco.png", "order": "even" },
    { "name": "My simple CRM", "skills": "Angular | TypeScript | Firebase", "description": "Very simple CRM app to demonstrate the four basic CRUD functions based on an Angular/Firebase project.", "serverUrl": "https://steffen-schanze.de/my-simple-crm", "gitUrl": "https://github.com/steffenjoachim/my-simple-crm", "imgUrl": "/assets/img/my-simple-crm.png", "order": "odd" },
  ];

}

