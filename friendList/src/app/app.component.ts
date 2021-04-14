import { Component } from '@angular/core';
import { Friend } from './Friend';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'friendList';
  public languages = ['html', 'css', 'js', 'php', 'python'];
  friendModel = new Friend();

  AddFriend(): void
  {
    this.friendModel.favLang = 'php';
  }
}

