import { Component, OnInit } from '@angular/core';
import {BlogHttpService} from '../blog-http.service';
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(public blogHttpService:BlogHttpService,private _route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
  }
  public blogTitle:string;
  public blogDescription:string;
  public blogBodyHtml:string;
  public blogCategory:string;
  public possibleCategories=["Comedy","Drama","Action","Technology"];
public createBlog=()=>
{
  let blogdata={
    blogTitle:this.blogTitle,
    blogDescription:this.blogDescription,
    blogBodyHtml:this.blogBodyHtml,
    blogCategory:this.blogCategory

  }
  this.blogHttpService.createBlog(blogdata).subscribe(
    data=>{
      console.log("blog created");
      console.log(data);
      alert("blog posted successfully");
      /*setTimeout(() => {
        this.router.navigate(['/blog',data.data.blogId]);
      }, 1000)*/

    },
    error=>{
console.log("error occured"+error.errorMessage);
alert("some error occurred");
}
  );
}
}
