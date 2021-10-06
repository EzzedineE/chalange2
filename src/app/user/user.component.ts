import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  Users:any[]=[];
  // login:FormGroup
login = new FormGroup({
      nom: new FormControl('',[Validators.required]),
      prenom: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.email]),
      password: new FormControl('',[Validators.minLength(4)]),

    });
  constructor() {
    
   }

  ngOnInit(): void {
   
  
  }
 

 add() {
   console.log(this.login.value)
    this.Users.push(this.login.value);
    console.log(this.Users)
  }
 reset() {
  
}

}
