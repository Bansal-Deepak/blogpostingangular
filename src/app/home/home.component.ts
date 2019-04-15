import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import {BlogHttpService} from '../blog-http.service';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  //providers: [BlogService,BlogHttpService]
})
export class HomeComponent implements OnInit {

  public allBlogs;
/*  constructor(public blogService:BlogService) {
    console.log("Home constructor is called");
   }

  ngOnInit() {
    console.log("Home ngOnInit is called");
    this.allBlogs=this.blogService.getAllBlogs();
    console.log(this.allBlogs);
  }*/
  constructor(public blogHttpService:BlogHttpService) {
    console.log("Home constructor is called");
   }

  ngOnInit() {
    console.log("Home ngOnInit is called");
    this.blogHttpService.getAllBlogs().subscribe(
      data=>{
        console.log(data);
        this.allBlogs=data.data;
      },
         error=>{
console.log("some error occurred");
console.log(error.errorMessage);
        
      }
    );
    console.log(this.allBlogs);
  }
ngOnDestroy(){
  console.log("Home ngOnDestroy is called");
}
}
