import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any;
  adminservice: any;

  constructor(private adminapi:AdminService){

  }
  ngOnInit(): void {
    this.adminservice.profile().subscribe((res:any)=>{
      this.profile =res
      
    })
  }

}
