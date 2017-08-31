import { Component, OnInit } from '@angular/core';
import {PovrsinaPipe} from "../povrsina.pipe";
import {KrevetPipe} from "../krevet.pipe";
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-roomsmain',
  templateUrl: './roomsmain.component.html',
  styleUrls: ['./roomsmain.component.css'],
  pipes: [PovrsinaPipe, KrevetPipe]
})
export class RoomsmainComponent implements OnInit {

  constructor() { }

  sobe:any[] = [];
  povrsina:string = '';
  krevet:number = 1;

  ngOnInit() {
    this.getSobe().subscribe(
      (response) => this.sobe = response['sobe']
    );
  }

  getSobe() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.get('http://localhost/sobe.php', {
      headers: headers
    }).map(
      (response: Response) => response.json()
    );
  }

}
