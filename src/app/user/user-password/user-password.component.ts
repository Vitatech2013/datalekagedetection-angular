import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';


@Component({
  selector: 'app-user-password',
  templateUrl: './user-password.component.html',
  styleUrls: ['./user-password.component.css']
})
export class UserPasswordComponent implements OnInit{
  
  admin:any
  Pswd!:FormGroup;
    constructor(private adminservice:AdminService,private fb:FormBuilder,private router:Router){}
  
    
    ngOnInit(): void {
     this.admin = JSON.parse(localStorage.getItem('admin')!)
     this.Pswd =this.fb.group({
      userName:[this.admin.username,[Validators.required]],
      Pswd:['',[Validators.required]],
      npwd:['',[Validators.required]]
     });
    }
    
    get pwd(){
      return this.Pswd.get('pswd')
    }
    get npwd(){
     return this.Pswd.get('npswd')
   }
  submit(){
   let data={
    password:this.Pswd.value.npwd
   }
   if(this.Pswd.value.pwd == this.admin.password){
     this.adminservice.changepwd(this.admin._id,data).subscribe((res:any)=>{
      localStorage.removeItem('admin')
      this.router.navigate(['/user-dashboard/user-login'])
      alert('password changed suceesfully')
     })
   }else{
    alert('old password is not match')
   }
  }

}
