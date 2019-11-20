import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @ViewChild("form", {static: false}) form: NgForm;

  private user: User = new User("Imię", "Nazwisko", "Pesel", "");

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  onSubmit()
  {
    if(this.form.valid)
    {
      console.log('this.user', this.user);
      this.userService.addUser(this.user).subscribe(value =>{
        this.router.navigate(['/admin/users']);
      });
    }
  }

}
