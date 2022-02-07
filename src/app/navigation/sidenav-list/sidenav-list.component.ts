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
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css'],
})
export class SidenavListComponent implements OnInit, OnDestroy {
  @Output() closeSidenav = new EventEmitter<void>();

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

  onCloseSidenav() {
    this.closeSidenav.emit();
  }
}
