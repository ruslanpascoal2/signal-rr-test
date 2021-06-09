import { Component, OnInit } from '@angular/core';
import { SignalrService } from './signalr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';

  constructor(private signalr: SignalrService){}

  ngOnInit(){
    const connection = this.signalr.buildConnection();
    console.log(connection);
    this.signalr.startConnection(connection);
  }

}
