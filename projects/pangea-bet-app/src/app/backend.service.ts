import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private writeSocket$: WebSocketSubject<any> | undefined;
  private readSocket$: WebSocketSubject<any> | undefined;

  constructor() {}

  connect(ip: string): any {
    console.log("Connecting to " + ip);
    if (!this.readSocket$ || this.readSocket$.closed) {
      console.log("Setting Up Read connection");
      this.readSocket$ = webSocket({
        url: 'ws://' + ip + ':9000',
        deserializer: (msg) => msg
      });
      this.readSocket$.subscribe(
        data => console.log('message received: ' + data), 
        // Called whenever there is a message from the server    
        err => console.log(err), 
        // Called if WebSocket API signals some kind of error    
        () => console.log('complete') 
      );
      // this.readSocket$.asObservable().subscribe(data => console.log(data));
    }

    if (!this.writeSocket$ || this.writeSocket$.closed) {
      console.log("Setting Up Write connection");
      this.writeSocket$ = webSocket('ws://' + ip + ':9001');
      this.writeSocket$.next({message: 'Writing the message to the server'});
    }
  }
}
