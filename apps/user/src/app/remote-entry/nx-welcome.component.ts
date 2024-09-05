import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDataAccessUserComponent } from '../../../../../libs/shared/data-access-user/src/lib/shared-data-access-user/shared-data-access-user.component';

@Component({
  selector: 'ng-mf-nx-welcome',
  standalone: true,
  imports: [CommonModule,SharedDataAccessUserComponent],
  template: `
    <div class="container">
      <h1>User List</h1>
      <table class="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let user of users">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.role }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <lib-shared-data-access-user></lib-shared-data-access-user>

  `,
  styles: [
    `
      .container {
        width: 80%;
        margin: 0 auto;
        padding: 20px;
        background-color: #f9f9f9;
        border-radius: 8px;
      }
      h1 {
        text-align: center;
        margin-bottom: 20px;
      }
      .user-table {
        width: 100%;
        border-collapse: collapse;
      }
      .user-table th,
      .user-table td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
      }
      .user-table th {
        background-color: #4CAF50;
        color: white;
      }
      .user-table tr:nth-child(even) {
        background-color: #f2f2f2;
      }
      .user-table tr:hover {
        background-color: #ddd;
      }
      
    `
    ,
  ],
})
export class NxWelcomeComponent {
  users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User' },
    { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', role: 'Editor' },
    { id: 4, name: 'Bob Brown', email: 'bob.brown@example.com', role: 'User' },
  ];
}
