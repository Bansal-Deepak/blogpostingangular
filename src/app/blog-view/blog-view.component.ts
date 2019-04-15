import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {BlogService} from '../blog.service';
import {BlogHttpService} from '../blog-http.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers:[Location]
})
export class BlogViewComponent implements OnInit {
  public currentBlog;

 
  /*constructor(public blogService:BlogService,private _route :ActivatedRoute,private router:Router) 
  {
    console.log("Blogview constructor is called");
   }

  ngOnInit() {
    console.log("Blogview ngOnInit is called");
    let myBlogId=this._route.snapshot.paramMap.get('blogId');
   this.currentBlog= this.blogService.getSingleBlogInformation(myBlogId);

  }*/
  constructor(public blogHttpService:BlogHttpService,private _route :ActivatedRoute,private router:Router,public location:Location) 
  {
    console.log("Blogview constructor is called");
   }

  ngOnInit() {
    console.log("Blogview ngOnInit is called");
    let myBlogId=this._route.snapshot.paramMap.get('blogId');
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
    data=>{
      console.log(data);
      this.currentBlog=data["data"];
    },
       error=>{
console.log("some error occurred");
console.log(error.errorMessage);
      
    }
  );

  }
  ngOnDestroy(){
    console.log("Blogview ngOnDestroy is called");
  }
  public deleteThisBlog=()=>{
this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(
  data=>{
    console.log("blog deleted");
    console.log(data);
    alert("blog deleted successfully");
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 1000)

  },
  error=>{
console.log("error occured"+error.errorMessage);
alert("some error occurred");
}
);

  }
  
  public goBackToPreviousPage=()=>{
this.location.back();
  }

  
}
