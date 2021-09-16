import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private URL = 'http://localhost:3000/api' 

  constructor( private http: HttpClient) { }

  uploadfiles(formData){
    return this.http.post(this.URL + '/upload',formData)
  }

  uploadfilesAsamblea(asamblea){
    return this.http.post(this.URL + '/agregarAsamblea', asamblea)
  }
}
 