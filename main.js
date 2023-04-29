// students
const students = [
  {
    id: 1,
    studentName: "Harry Potter", 
    studentHouse: "Griffyndor",
  },
  {
    id: 2,
    studentName: "Draco Malfoy", 
    studentHouse: "Slytherin",
  }
];

const expelled = [];

// dom render

const renderToDom = (divID, htmlToRender) => {
  const selectedDiv = document.querySelector(divID);
  selectedDiv.innerHTML = htmlToRender;
};
 
const welcome = () => {
  let domString = `<div class="card">
  <div class="card-header">
    Hogwarts School Year of 2023-2024
  </div>
  <div class="card-body">
    <h5 class="card-title">The Hogwarts Sorting Hat</h5>
    <p class="card-text">Welcome to Hogwarts, first-year student. To determine which House you will be a part of, please click the button below:</p>
    <a href="#" class="btn btn-primary" id="sortingButton">Take me to the Sorting Hat</a>
  </div>`;
  renderToDom('#sorting', domString);
};
welcome();

const sortForm = () => {
  let domString = `<form>
  <div class="mb-3">
    <label class="form-label">Student Name</label>
    <input type="text" class="form-control" id="Student Name">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`; 
  renderToDom('#form', domString);
};

const houseButtons = () => {
  let domString = `<button class="btn btn-primary" type="button">All</button>
  <button class="btn btn-primary" type="button">Griffyndor</button>
  <button class="btn btn-primary" type="button">Hufflepuff</button>
  <button class="btn btn-primary" type="button">Ravenclaw</button>
  <button class="btn btn-primary" type="button">Slytherin</button>
  `;
  renderToDom('#houseButtons', domString);
}

const sortedStudentCards = (array) => {
  let domString = "";
  for (const student of array) {
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${student.studentName}</h5>
      <p class="card-text">${student.studentHouse}</p>
    </div>
  </div>`
  }
  renderToDom('#sortedStudents',domString);
}

// event listener

const sortingButton = document.querySelector('#sortingButton');
sortingButton.addEventListener('click', (e) => {
  sortForm();
  houseButtons()
  sortedStudentCards(students);
});
