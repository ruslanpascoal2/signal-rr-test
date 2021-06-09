import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {

  constructor() { }

  buildConnection(){
    return new HubConnectionBuilder()
    .configureLogging(LogLevel.Debug)
    .withUrl("https://localhost:5001/quotation/calculate")
    .build()
  }

  startConnection(connection: HubConnection){
    connection
    .start()
    .then(() => console.log("hub conectou"))
    .catch((err) => console.log(err))
  }


}
