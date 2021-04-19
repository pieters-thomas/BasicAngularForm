import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Friend} from './Friend';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostRequest {
  constructor(
    private http: HttpClient
  ) {
  }

  public addFriend( url: string, friend: Friend): Observable<Friend> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(url + 'addFriend', JSON.stringify(friend), {headers});
  }
  public deleteFriend( url: string, friend: Friend): Observable<Friend> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(url + 'deleteFriend', JSON.stringify(friend), {headers});
  }
}
