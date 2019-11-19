import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  private users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() 
  {
    this.userService.getUsers().subscribe(usersPage => 
      {
        console.log('users', usersPage);
        this.users = usersPage.content;
      });
  }

}
