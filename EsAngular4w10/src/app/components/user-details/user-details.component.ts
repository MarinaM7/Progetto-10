import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { ActivatedRoute } from '@angular/router';
import { getUsers } from 'src/app/users.service';
import { UserSerivice } from 'src/app/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  u: User | undefined;
  constructor( private ar: ActivatedRoute) {
  }

  ngOnInit(): void {
    let x = this.ar.snapshot.params["id"];
    getUsers().then((users: User[]) => {
      this.u = users.find((element) => {
        if(x == element.id) {

          return true;
        } else {
           return false;
        }
      })
    })
  }

}
