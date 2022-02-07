import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() toggleSidenav = new EventEmitter<void>();

  authStatus = false;

  authSub = new Subscription();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authSub = this.authService.authChange.subscribe((authStatus) => {
      this.authStatus = authStatus;
    });
  }

  ngOnDestroy(): void {
    this.authSub.unsubscribe();
  }

  onToggleSidenav() {
    this.toggleSidenav.emit();
  }

  onLogout() {
    this.authService.logout();
  }
}
