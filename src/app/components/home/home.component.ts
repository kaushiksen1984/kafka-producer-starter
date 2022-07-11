import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service'
import { User } from 'src/app/model/user.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: User[] = [];

  constructor(private service: ApiService) { }

  ngOnInit() {
    const userObservable = this.service.getUsers();
    userObservable.subscribe(userData => {
      this.users = userData;
      console.log(userData);
    })
  }

}
