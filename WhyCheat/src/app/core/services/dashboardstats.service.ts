import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardstatsService {

  constructor(private http: HttpClient) { }
  onDashboardStats() {
    let Token = localStorage.getItem("token")
    return this.http.get('http://localhost:3000/api/dashboard/dashboardStatistics',{ headers: { "authrization": `Bearer ${Token}` } });
  }

}
