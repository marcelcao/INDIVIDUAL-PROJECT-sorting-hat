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

const studentCards = (array) => {
  let domString = "";
  for (student of array) {
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${student.studentName}</h5>
      <p class="card-text">${student.studentHouse}</p>
    </div>
  </div>`
  }
  renderToDom('#sortedStudents',domString);
}

//filter through buttons
const houseButtons = () => {
  let domString = `<button class="btn btn-primary" type="button" id="buttonAll">All</button>
  <button class="btn btn-primary" type="button" id="buttonGriffyndor">Griffyndor</button>
  <button class="btn btn-primary" type="button" id="buttonHufflepuff">Hufflepuff</button>
  <button class="btn btn-primary" type="button" id="buttonRavenclaw">Ravenclaw</button>
  <button class="btn btn-primary" type="button" id="buttonSlytherin">Slytherin</button>
  `;
  renderToDom('#houseButtons', domString);
}

const filter = (array, houseString) => {
  const sortedStudentArray = [];
  for(const student of array) {
    if(student.studentHouse === houseString){
      sortedStudentArray.push(student);
    }
  }
  return sortedStudentArray;
}

const filterButtons = () => {
  const showAllStudents = document.querySelector("#buttonAll");
  const showAllGriffyndor = document.querySelector("#buttonGriffyndor");
  const showAllHufflepuff = document.querySelector("#buttonHufflepuff");
  const showAllRavenclaw = document.querySelector("#buttonRavenclaw");
  const showAllSlytherin = document.querySelector("#buttonSlytherin");

  showAllGriffyndor.addEventListener('click', () => {
    const allGriffyndor = filter(students, 'Griffyndor');
    studentCards(allGriffyndor);
  });
  
  showAllSlytherin.addEventListener('click', () => {
    const allSlytherin = filter(students, 'Slytherin');
    studentCards(allSlytherin);
  });

  showAllHufflepuff.addEventListener('click', () => {
    const allSlytherin = filter(students, 'Hufflepuff');
    studentCards(allSlytherin);
  });

  showAllRavenclaw.addEventListener('click', () => {
    const allSlytherin = filter(students, 'Ravenclaw');
    studentCards(allSlytherin);
  });

  showAllStudents.addEventListener('click', () => studentCards(students));
}



// event listeners dom

const sortingButton = document.querySelector('#sortingButton');
sortingButton.addEventListener('click', (e) => {
  sortForm();
  houseButtons();
  studentCards(students);
  filterButtons();
});
