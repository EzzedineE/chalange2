import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})


export class UserComponent implements OnInit {
  resete: any;
  Users: any[] = [];
  tab:any[]=[]
  aff:boolean=false;
  submeted:boolean=false;

  login = new FormGroup({  
    nom: new FormControl('', [Validators.required]),
    prenom: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(4), Validators.required]),
  });
  
  

  add() {
     this.submeted=true
     if(this.login.valid){
      this.tab.push(this.login.value)
    console.log(this.tab);
    }
    else{alert("enter invalide")}
    
    }

  reset() {
    if (this.tab.length!=0) {
       this.aff=true
    }
   
      this.resete = {
        'color': 'black',
        'background-color': 'white'
      };

      
      // this.login.value.non=""
      // this.login.value.prenom=""
      // this.login.value.email=""
      // this.login.value.password=""
  this.login.reset()
}

supprimer(i:number){
  this.tab.splice(i,1)
}
// *******************************************************************************************
  constructor() {}
  ngOnInit(): void { }
}




