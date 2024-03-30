import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manus',
  templateUrl: './manus.component.html',
  styleUrls: ['./manus.component.scss'],
})
export class ManusComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  menus: [
    {
      icon: '<i class="bi bi-house"></i>';
      title: 'Home';
      link: 'home';
    }
  ];
}
