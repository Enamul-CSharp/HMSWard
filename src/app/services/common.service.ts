import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }
  apiUrl: string = "https://localhost:7055/api/Common";

  public GetShiftTypes(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl + "/GetShiftType");
  }

  public GetGenders(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl + "/GetGender");
  }

  public GetPatient(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiUrl + "/GetPatient");
  }
 
}
