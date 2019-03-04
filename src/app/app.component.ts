import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('mainForm') mainForm: NgForm;

  subscriptions = ['Basic', 'Advanced', 'Pro'];
  defaultSubscription = 'Advanced';
  submitted = false;
  user = {
    email: '',
    subscription: '',
    password: ''
  };

  onSubmit() {
    this.submitted = true;
    this.user.email = this.mainForm.value.userData.email;
    this.user.subscription = this.mainForm.value.userData.subscription;
    this.user.password = this.mainForm.value.userData.password;
    this.mainForm.reset();
  }

}
