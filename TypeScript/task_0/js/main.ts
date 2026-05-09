interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Alice',
  lastName: 'Johnson',
  age: 20,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Bob',
  lastName: 'Smith',
  age: 22,
  location: 'Los Angeles',
};

const studentsList: Student[] = [student1, student2];

// Create table and append rows for each student
const table = document.createElement('table');

studentsList.forEach((student: Student) => {
  const row = document.createElement('tr');

  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);
