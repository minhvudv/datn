import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientGetDataService } from 'src/app/service/client.service';
@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.css']
})
export class BlogdetailsComponent {
  id: any;
  blogdetails: any;

  constructor(private dataService:ClientGetDataService, private active: ActivatedRoute){}

  ngOnInit(){
    this.id = this.active.paramMap.subscribe((query: any ) =>{
      this.id =query.get('id');

      this.dataService.getchitietblog(this.id).subscribe((res: any)=>{
        this.blogdetails =res[0];
        console.log(this.blogdetails)
      })

    })
  }
}
