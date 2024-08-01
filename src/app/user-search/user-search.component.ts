import { Component, EventEmitter, Input, Output  } from '@angular/core';
import { IUser } from '../iuser';


@Component({
  selector: 'app-user-search',
  standalone: true,
  imports: [],
  templateUrl: './user-search.component.html',
  styleUrl: './user-search.component.css'
})
export class UserSearchComponent {
  @Input() Users: IUser[]= [];
  @Output() PostProcessUsers: EventEmitter<IUser[]> = new EventEmitter<IUser[]>();
  Filtered: boolean = false;
  onSearch($val: string) {
    if ($val == "") {
      this.PostProcessUsers.emit(this.Users);
      this.Filtered = false;
      
    }else{
      this.PostProcessUsers.emit(this.Users.filter((user) => user.email.includes($val)));
      this.Filtered = true;
    }

  
  }
  onReset() {
    this.Filtered = false;
    this.PostProcessUsers.emit(this.Users);

    (<HTMLInputElement>document.getElementById("searchBar")).value = "";
  }
}
