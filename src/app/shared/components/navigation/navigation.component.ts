import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  authorized = true;

  constructor() {}

  ngOnInit(): void {}

  onAnchorClick() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }
}
