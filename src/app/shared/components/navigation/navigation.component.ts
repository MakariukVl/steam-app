import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Input() authorized?: boolean;

  constructor() {}

  ngOnInit(): void {
    this.authorized = this.authorized || false;
  }

  onAnchorClick() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }
}
