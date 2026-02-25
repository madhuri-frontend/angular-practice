import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
  employees = [
    { id: 1, name: 'John Doe', role: 'Frontend Developer' },
    { id: 2, name: 'Jane Smith', role: 'Backend Developer' },
    { id: 3, name: 'Michael Johnson', role: 'UI Designer' },
  ];

  newEmployee = {
    id: 0,
    name: '',
    role: '',
  };

  addEmployee() {
    if (this.newEmployee.name && this.newEmployee.role) {
      const newId = this.employees.length + 1;

      this.employees.push({
        id: newId,
        name: this.newEmployee.name,
        role: this.newEmployee.role,
      });

      this.newEmployee = { id: 0, name: '', role: '' };
    }
  }
  deleteEmployee(id: number) {
    this.employees = this.employees.filter((emp) => emp.id !== id);
  }
}
