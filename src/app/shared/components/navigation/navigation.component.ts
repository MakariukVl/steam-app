import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Input() authorized?: boolean;
  @Output() onlogout = new EventEmitter();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authorized = this.authorized || false;
  }

  onAnchorClick() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  onLogOut() {
    this.authService.logout();
    this.onlogout.emit();
  }
}
