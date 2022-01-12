import { Component, OnInit } from '@angular/core';
import { Register } from '../register';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  userRegister=new Register("","","","","","","","","","","");
  constructor() { }

  ngOnInit(): void {
  }

}
