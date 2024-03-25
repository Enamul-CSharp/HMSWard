import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Followups } from '../models/followups';

@Injectable({
  providedIn: 'root'
})
export class FollowupsService {
  constructor(private http: HttpClient) { }

  apiUrl: string = 'https://localhost:7055/api/Followups';

  public GetFollowups(): Observable<Followups[]> {

    return this.http.get<Followups[]>(this.apiUrl);
  }
  public GetFollowup(id: number): Observable<Followups> {

    return this.http.get<Followups>(this.apiUrl + '/' + id);
  }
  public SaveFollowups(GetFollowups: any): Observable<any> {

    return this.http.post(this.apiUrl, Followups);
  }
  public UpdateFollowups(Followups: Followups): Observable<Followups> {

    return this.http.put<Followups>(this.apiUrl + '/' + Followups.followupId, Followups);
  }
  public DeleteFollowups(id: any): Observable<any> {

    return this.http.delete(this.apiUrl + '/' + id);
  }
}

