import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  register = {
    name: '',
    email: '',
    password: ''
  }

  image = './assets/images/astronauta.jpg'
  onRegister() {
    console.log(this.register);
  }

}
