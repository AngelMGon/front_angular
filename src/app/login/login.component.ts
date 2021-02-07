import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService} from '../login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  public loginInvalid: boolean;
  
  constructor(private fb: FormBuilder,private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('user')){
      this.router.navigateByUrl('products');
    }
    this.form = this.fb.group({
      username: ['', Validators.email]
    });
  }

  public login(){
    var email = this.form.controls.username.value;
    
    this.loginService.getUserByEmail(email).subscribe((data: any)=>{
      console.log(data);
      if(data){
        sessionStorage.setItem('user',JSON.stringify(data));
        this.router.navigateByUrl('products');
      }else{
        window.alert("El usuario no existe");
      }
    })  


    
  }

}
