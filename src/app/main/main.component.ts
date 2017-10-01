import { Component, OnInit } from '@angular/core';
import {DatafeedsService} from '../datafeeds.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers:[DatafeedsService],
})
export class MainComponent implements OnInit {
  menusOfToday:any[];
  constructor(private datafeedsService: DatafeedsService) { }

  ngOnInit() {
    this.getMenusOfToday();
  }
  getMenusOfToday(){
    this.datafeedsService.getMenus().map(data=>data.data).subscribe(data=>{
      this.menusOfToday = data;
    });
  }

}
