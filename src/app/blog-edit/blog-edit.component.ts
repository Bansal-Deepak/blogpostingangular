import { Component, OnInit } from '@angular/core';
import {BlogHttpService} from '../blog-http.service';
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
  public possibleCategories = ["Comedy", "Drama", "Action", "Technology"];
  public currentBlog;

  constructor(public blogHttpService:BlogHttpService,private _route:ActivatedRoute,private router:Router) { }



  ngOnInit() {
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
 /* public blogTitle:string;
  public blogDescription:string;
  public blogBodyHtml:string;
  public blogCategory:string;
  public possibleCategories=["Comedy","Drama","Action","Technology"];not needed bcoz of two way binding*/
public editBlog=()=>
{
  /*let blogdata={
    blogTitle:this.blogTitle,
    blogDescription:this.blogDescription,
    blogBodyHtml:this.blogBodyHtml,
    blogCategory:this.blogCategory

  }this is not needed bcoz two way binding*/
  this.blogHttpService.editBlog(this.currentBlog,this.currentBlog.blogId).subscribe(
    data=>{
      console.log("blog edited");
      console.log(data);
      alert("blog edited successfully");
      setTimeout(() => {
        this.router.navigate(['/blog',this.currentBlog.blogId]);
      }, 1000)

    },
    error=>{
console.log("error occured"+error.errorMessage);
alert("some error occurred");
}
  );
}
}


  
