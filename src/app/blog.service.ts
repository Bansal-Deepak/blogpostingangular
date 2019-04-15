import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  public allBlogs=[
    {
      "blogId":"1",
      "lastModified":"today",
      "created":"today",
      "tags":[],
      "author":"admin",
      "category":"comedy",
      "isPublished":true,
      "views":0,
      "bodyHtml":"this is blog body",
      "description":"this is blog 1 description",
      "title":"this is blog 1"
    },
    {
      "blogId":"2",
      "lastModified":"today",
      "created":"today",
      "tags":[],
      "author":"admin",
      "category":"comedy",
      "isPublished":true,
      "views":0,
      "bodyHtml":"this is blog body",
      "description":"this is blog 2 description",
      "title":"this is blog 2"
    },
    {
      "blogId":"3",
      "lastModified":"today",
      "created":"today",
      "tags":[],
      "author":"admin",
      "category":"comedy",
      "isPublished":true,
      "views":0,
      "bodyHtml":"this is blog body",
      "description":"this is blog 3 description",
      "title":"this is blog 3"
    }
  ]


  constructor() { 
    console.log("service constructor is called");
  }
  ngOnInit()
  {
    console.log("service is initiated");
  }
  ngOnDestroy()
  {
    console.log("service is destroyed");
  }
  public getAllBlogs=():any=>{
return(this.allBlogs);
  }
  public getSingleBlogInformation=(currentId):any=>{
    let currentBlog;
    for(let blog of this.allBlogs){
if(currentId==blog.blogId){
  currentBlog=blog;
}
    }
    console.log(currentBlog);
    return(currentBlog);
  }

}
