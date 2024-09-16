import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  healthData: any[] = [];

  addNewEntry(data: any) {
    this.healthData.push(data);
  }

}
