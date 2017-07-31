import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
 

 constructor(private dataService:DataService) {
 }

  someProperty:string = '';
  userList: any[] = []; 
  

  ngOnInit() {
    this.someProperty = this.dataService.myData();

	   this.dataService.getUser().subscribe(
       response => this.userList = response
     )
    

  }

}


