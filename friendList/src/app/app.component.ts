import {Component} from '@angular/core';
import {Friend} from './Friend';
import {PostRequest} from './postRequest';
import {OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private url = 'http://localhost:9000/';
  public title = 'friendList';
  public languages = ['C#', 'Css', 'Html', 'Javascript', 'Php', 'Python', 'Type Script'];
  public friendModel = new Friend();
  public allFriends?: Array<Friend>;

  constructor(
    private postRequest: PostRequest) {
  }

  public logAFriend(): void {
    this.postRequest.addFriend(this.url, this.friendModel).subscribe();
    this.getFriends();
  }

  public  deleteFriend(formerFriend: Friend): void{
    this.postRequest.deleteFriend(this.url, formerFriend).subscribe();
    this.getFriends();
  }

  public async getFriends(): Promise<any> {
    console.log('test');
    const response = await fetch(this.url + 'allFriends', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    this.allFriends = await response.json();
  }

  ngOnInit(): any {
    this.getFriends().catch(error => console.log(error));
  }

}

