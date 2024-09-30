import { Component, signal } from "@angular/core";
import { MainLayoutComponent } from "./components/shared/main-layout/main-layout.component";
import { AuthService } from "./services/auth.service";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [MainLayoutComponent, RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "school-admin";
  
   userLoggedIn = signal(false);
  constructor(private authService: AuthService) {

    this.userLoggedIn = signal(this.authService.isAuthenticatedUser())
  }
}
