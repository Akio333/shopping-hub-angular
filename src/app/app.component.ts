import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonDirective } from '@coreui/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'shopping-hub-angular';
}
