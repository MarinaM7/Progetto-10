import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { getUsers } from 'src/app/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
users!: User[]
  constructor() {

}

  ngOnInit(): void {
    getUsers().then(users => {
      console.log(users)
      this.users = users;
      console.log(this.users);
  })
  }
}


