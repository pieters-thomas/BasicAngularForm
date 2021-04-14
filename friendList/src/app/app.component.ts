import {Component} from '@angular/core';
import {Friend} from './Friend';
import {AddFriendService} from './add-friend.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'friendList';
  public languages = ['html', 'css', 'js', 'php', 'python'];
  friendModel = new Friend();

  constructor(private addFriendService: AddFriendService) {
  }

  public logAFriend(): void {
    console.log(this.friendModel);
    const observable = this.addFriendService.addFriend(this.friendModel);
    observable.subscribe(data => 'it worked', error => 'it didn\'t work');
  }


}

