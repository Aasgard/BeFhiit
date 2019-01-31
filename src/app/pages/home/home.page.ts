import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('workoutSlides')
  private workoutSlides: IonSlides;

  constructor() { }

  ngOnInit() {
    this.workoutSlides.slideTo(2, 3000);
  }

}
