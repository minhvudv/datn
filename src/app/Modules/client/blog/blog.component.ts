import { Component } from '@angular/core';
import { ClientGetDataService } from 'src/app/service/client.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  constructor(private blog:ClientGetDataService){}
  tintuc: any[]=[];
  

  ngOnInit(){
    this.blog.getblog().subscribe(res=>{
      
      this.tintuc =res;
      console.log(this.tintuc)
    })    
  }
}
