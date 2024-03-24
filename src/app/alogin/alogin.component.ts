import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterLink,Router } from '@angular/router';

@Component({
  selector: 'app-alogin',
  templateUrl: './alogin.component.html',
  styleUrl: './alogin.component.css'
})
export class AloginComponent {
  onClick() {
    console.log("u.form.value");
  }
  constructor(private router: Router) {}

id:any;
p:any;
onSubmit(uform:any) {
  if((this.id == "admin")&&(this.p =="admin@123")){
    this.router.navigate(['ad']);
  }
  else{
    alert("You are not a admin");
  }

}

}
