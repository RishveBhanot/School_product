import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, signal } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent, MatSidenavModule, RouterOutlet, MatToolbarModule, MatIconModule, MatCardModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  sidenavExpanded = signal<boolean>(false);
  sidenavMode = signal<'side' | 'over'>('side');

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        this.sidenavMode.set(result.matches ? 'over' : 'side');
      });
  }

  toggleSidebar(event?: string) {
    if (event) {
      this.sidenavExpanded.set(event === 'sidebar' ? true : false);
    } else {
      this.sidenavExpanded.update(value => !value)
    }
  }

}
