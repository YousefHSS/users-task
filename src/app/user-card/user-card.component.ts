import { Component, Input } from '@angular/core';
import { IUser } from '../iuser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [ FontAwesomeModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  faStar = faStar;
  @Input() user!: IUser;

  constructor() { }
}
