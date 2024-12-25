import { Component } from '@angular/core';
import { Project } from '../interfaces/project';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  currentProject: Project[] = [
    {
      name: 'Learnified',
      skills: 'Vue.js | JavaScript | Nodes.js',
      description:
        "A combination of a learning app and a quiz app. Learn the subject, test yourself, and then earn points in the Brain Champs Hall of Fame! If you want, you can add more cards, delete cards you no longer need, or edit them.",
      serverUrl: 'https://learnified.netlify.app',
      gitUrl: 'https://github.com/coding-bootcamps-eu/final-project-2024-08-learn-app/',
      imgUrl: '/assets/img/learnified.png',
      order: 'odd',
    },
  ];

  projects: Project[] = [
    {
      name: 'DA-Bubble',
      skills: 'Angular | TypeScript | Firebase',
      description:
        "An amazing Chat-App with many features, built with Angular. You can post chats, create channels, like chats, and respond to other chats, and much more. It's best to try it out for yourself. The project is not yet fully finished. It is not responsive yet.",
      serverUrl: 'https://steffen-schanze.de/da-bubble/',
      gitUrl: 'https://github.com/steffenjoachim/da-bubble',
      imgUrl: '/assets/img/da-bubble.png',
      order: 'odd',
    },
    {
      name: 'Join',
      skills: 'JavaScript | HTML | CSS',
      description:
        'Task manager inspired by Kanban System, create and organize tasks using drag and drop functions, assign users and categories.',
      serverUrl: 'https://steffen-schanze.de/Join',
      gitUrl: 'https://github.com/steffenjoachim/KANBAN-Board',
      imgUrl: '/assets/img/join.png',
      order: 'even',
    },
    {
      name: 'El Pollo Loco',
      skills: 'JavaScript | HTML | CSS',
      description:
        'A simple Jump-and-Run game based on object-oriented approach. Help Pepe in the desert to fight chickens and collect bottels to finally concer the end-boss.',
      serverUrl: 'https://steffen-schanze.de/El-Pollo-loco',
      gitUrl: 'https://github.com/steffenjoachim/El-Pollo-loco',
      imgUrl: '/assets/img/El_Pollo_Loco.png',
      order: 'odd',
    },
  ];
}
