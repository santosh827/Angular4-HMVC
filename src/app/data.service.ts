import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {

constructor(private http:Http){}

  cars = [
    'Ford','Chevrolet','Buick'
  ];

  myData() {
    return 'This is my data, man!';
  }
   getUser()
   {
    return this.http.get('http://localhost/nApp/api/list.php').map((res: Response) => res.json())
      .catch((error) => {
        console.log('error ' + error);
        throw error;
      });
   }

}
