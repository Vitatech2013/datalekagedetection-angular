import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  userForm!: FormGroup;


  constructor (private fb: FormBuilder, private api:UserService,private router: Router){ }

  
  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstname: ['',[Validators.required]],
      lastname: ['',[Validators.required]],
      username: ['',[Validators.required]],
      password: ['', [Validators.required]],
      mobileno: ['',[Validators.required]],
      emailid: ['',[Validators.required]],
      file:['',[Validators.required]]
    })

  }
  signup(){
    this.api.SignUpUser(this.userForm.value).subscribe((res)=>{
      console.log(res,'signup')
      this.router.navigate(['/user-login'])

    })
  }
}
