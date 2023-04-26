import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  // viewLeakfiles: any;

  constructor(private http: HttpClient) { }
  distributorlogin(uname: any, pswd: any) {
    return this.http.get('//localhost:1234/Admin/adminlogin?username=' + uname + '&password=' + pswd)
  }
  changepwd(id: any, data: any) {
    return this.http.put('http://localhost:1234/admin/updatepassword/${_id/' + id, data)
  }
  viewUsers() {
    return this.http.get('http://localhost:1234/admin/viewusers')
  }

  sendFiles(data: any) {
    return this.http.post('http://localhost:1234/admin/sendfiles', data)
  }
  viewFiles() {
    return this.http.get('http://localhost:1234/admin/viewfiles')
  }
  deleteFile(id: any) {
    return this.http.delete('http://localhost:1234/admin/' + id)
  }
  viewLeakfiles(){
    return this.http.get('http://localhost:1234/admin/viewleakfiles')
  }
}
