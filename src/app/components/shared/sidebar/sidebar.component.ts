import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal, ViewChild } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule, MatNavList } from '@angular/material/list';
import { Router, RouterModule } from '@angular/router';
import { MainLayoutComponent } from '../main-layout/main-layout.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatListModule, MatIconModule, RouterModule, MatExpansionModule, MainLayoutComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  menuItems = [
    { label: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    {
      label: 'Students',
      icon: 'people',
      route: '/students',
    },
    {
      label: 'Settings',
      icon: 'settings',
      route: '/settings',
      children: [
        { label: 'Profile', route: '/settings/profile', icon: 'people' },
        { label: 'Account', route: '/settings/account', icon: 'people' }
      ]
    }
  ];
  openMenu: { [key: string]: boolean } = {};

  @Input() expanded = false;
  @Output() toggleSidebar = new EventEmitter<any>();

  constructor(private router: Router) {}
  toggleMenu(label: string, event: boolean) {
    this.openMenu[label] = !this.openMenu[label];
    if (event) {
      this.toggleSidebar.emit('sidebar')
    }
  }

  navigate(route: string) {
    console.log(route);
    
    this.router.navigate([route]);
  }

}
