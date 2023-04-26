import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

   }
   SignUpUser(data: any){
    return this.http.post('http://localhost:1234/user/registration',data)
   }
   UserLogin( e:any, p:any){
    return this.http.get('http://localhost:1234/user/userlogin?username='+ e + '&password='+ p)
   }
   updateUser(id:any,data:any){
    return this.http.put('http://localhost:1234/user/updateprofile/'+id,data)
  }
   viewProfile(username:any){
    return this.http.get('http://localhost:1234/user/viewprofile?username='+username)
  }
}
