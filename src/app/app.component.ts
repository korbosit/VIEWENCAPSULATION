import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Comp1Component, Comp2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'VIEWENCAPSULATION';
}
