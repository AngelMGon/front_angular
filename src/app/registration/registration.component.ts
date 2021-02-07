import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService} from '../login.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.requiredTrue],
      name: ['', Validators.requiredTrue],
      address: ['', Validators.requiredTrue]
    });
  }

  public registration(){
    var email = this.form.controls.email.value;
    var name = this.form.controls.name.value;
    var address = this.form.controls.address.value;
    
    this.loginService.saveUser(name, email, address).subscribe((data: any)=>{
      console.log(data);
      if(data){
        this.router.navigateByUrl('products');
      }else{
        window.alert("Error al registrar usuario");
      }
    })  
  }

}
