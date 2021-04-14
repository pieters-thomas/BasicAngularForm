import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Friend} from './Friend';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {

  private url = '';

  constructor(
    private http: HttpClient
  ) {
  }

  public addFriend(newFriend: Friend): Observable<Friend> {
   return this.http.post(this.url, newFriend);
  }
}
