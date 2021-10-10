import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PasswordValidator } from '../password-validateur';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',

  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  resete: any;
  Users: any[] = [];
  tab: any[] = [];
  aff: boolean = false;
  submeted: boolean = false;
  login = new FormGroup(
    {
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ]),
      password: new FormControl('', [
        Validators.minLength(4),
        Validators.required,
      ]),
      password2: new FormControl('', [
        Validators.minLength(4),
        Validators.required,
      ]),
    },
    { validators: [PasswordValidator] }
  );

  add() {
    this.submeted = true;
    if (this.login.valid) {
      this.tab.push(this.login.value);
    } else {
      alert('enter invalide');
    }
  }

  reset() {
    if (this.tab.length != 0) {
      this.aff = true;
    }
    this.resete = {
      color: 'black',
      'background-color': 'white',
    };
    this.login.reset();
  }

  supprimer(i: number) {
    confirm;
    this.tab.splice(i, 1);
  }

  isSupp(i: number) {
    if (this.tab[i].password.length < 10) {
      return true;
    }
    return false;
  }

  constructor() {}
  ngOnInit(): void {}
}
