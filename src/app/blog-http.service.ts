import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do'; 


@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {
  public allBlogs;

 public baseUrl='https://blogapp.edwisor.com/api/v1/blogs/';
 private authToken='YzliMGJjZjg5YmEzYTYzNzljY2ZiZWU4NjQ1NDM4YzZiNzdiMTZiZmQyMDQwZDJkYjNkYWZmMzE2ZWQ5MTRlZDRjMWFmZDBhMjc2ZGQ2MjMyZjE4MjkzODZjMzE4ZWVkNGJkMzU1OWUyMzZmOGUzNDIwNTU4Nzk3Y2FlMWNhYzM1OA==';


  constructor(private _http:HttpClient) { 
    console.log("service http constructor is called");
  }
  ngOnInit()
  {
    console.log("service http is initiated");
  }
  ngOnDestroy()
  {
    console.log("service http is destroyed");
  }
  public getAllBlogs=():any=>{
  // let myResponse= this._http.get(this.baseUrl+'all?authToken='+this.authToken);
   let myResponse= this._http.get(`${this.baseUrl}all?authToken=${this.authToken}`);
   console.log(myResponse);
   return(myResponse);

  }
  public getSingleBlogInformation=(currentId):any=>{
    let currentBlog=this._http.get(this.baseUrl+'view/'+currentId+'?authToken='+this.authToken);
    
    console.log(currentBlog);
    return(currentBlog);
  }
  public createBlog=(blogData):any=>{
//let myResponse=this._http.post(`${this.baseUrl}create?authToken=${this.authToken}`,blogData);
let myResponse=this._http.post(this.baseUrl+'create?authToken='+this.authToken,blogData);
return(myResponse);
  }
  public deleteBlog=(blogId):any=>{
    let blogData={};
    let myResponse=this._http.post(`${this.baseUrl}${blogId}/delete?authToken=${this.authToken}`,blogData);
    return(myResponse);
      }
      public editBlog=(blogData,blogId):any=>{
        let myResponse=this._http.put(`${this.baseUrl}${blogId}/edit?authToken=${this.authToken}`,blogData);
        return(myResponse);
          }


}
