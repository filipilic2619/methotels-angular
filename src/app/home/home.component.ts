import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { PosterComponent } from '../poster/poster.component';
import { FirstComponent } from '../first/first.component';
import { SecondComponent } from '../second/second.component';
import { ThirdComponent } from '../third/third.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
