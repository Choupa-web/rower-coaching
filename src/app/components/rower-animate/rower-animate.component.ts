import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rower-animate',
  templateUrl: './rower-animate.component.html',
  styleUrl: './rower-animate.component.scss'
})
export class RowerAnimateComponent {
  @Input() animateDuration: number = 0;

}
