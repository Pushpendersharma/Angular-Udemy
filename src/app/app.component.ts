import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  username="";
  get isUserNameEmpty(): boolean{
    return this.username==="";
  }
  onResetUserName(): void{
    this.username="";
  }
  
}
