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

// render DOM function

const renderToDom = (divID, htmlToRender) => {
  const selectedDiv = document.querySelector(divID);
  selectedDiv.innerHTML = htmlToRender;
};
 
//main welcome card 

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
welcome(); //this callback may need to relocate to the init()

// sorted title
const sortTitle = () => {
  let domString = `<h1>First Year Students:</h1>`;
  renderToDom('#sortedTitle', domString);
};

// expelled title
const expTitle = () => {
  let domString = `<h1>Death Eaters:</h1>`;
  renderToDom('#expelledTitle', domString);
};


// input form
const sortForm = () => {
  let domString = `<form>
  <div class="mb-3">
    <label class="form-label">Student Name</label>
    <input type="text" class="form-control" id="submitName">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`; 
  renderToDom('#form', domString);
};


// student cards
const studentCards = (array) => {
  let domString = "";
  for (student of array) {
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${student.studentName}</h5>
      <p class="card-text">${student.studentHouse}</p>
      <button class="btn btn-danger id="expel--${students.id}">Expel</button>
    </div>
  </div>`
  }
  renderToDom('#sortedStudents',domString);
};

// expelled students cards
const expelledCards = (array) => {
  let domString = "";
  for (student of array) {
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${student.studentName}</h5>
      <p class="card-text">IS EXPELLED!</p>
    </div>
  </div>`
  }
  renderToDom('#expelledStudents',domString);
};


// expelled students function

const expelSorted = document.querySelector('#sortedStudents');

expelSorted.addEventListener('click', (e) => {
  alert(e.target.id);
  const [, id] = e.target.id.split("--");
  const index = students.findIndex(student => student.id === Number(id));
  expelled.push(...students.splice(index, 1));
  //... spread syntax
  studentCards(students);
  expelledCards(expelled);
});

//filter buttons
const houseButtons = () => {
  let domString = `<button class="btn btn-primary" type="button" id="buttonAll">All</button>
  <button class="btn btn-primary" type="button" id="buttonGriffyndor">Griffyndor</button>
  <button class="btn btn-primary" type="button" id="buttonHufflepuff">Hufflepuff</button>
  <button class="btn btn-primary" type="button" id="buttonRavenclaw">Ravenclaw</button>
  <button class="btn btn-primary" type="button" id="buttonSlytherin">Slytherin</button>
  `;
  renderToDom('#houseButtons', domString);
};

const filter = (array, houseString) => {
  const sortedStudentArray = [];
  for(const student of array) {
    if(student.studentHouse === houseString){
      sortedStudentArray.push(student);
    }
  }
  return sortedStudentArray;
};

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
};

//add and sort new students using form

const formFunction = () => {
  const form = document.querySelector('form');

  const sortHouse = (e) => {
    //per W3schools this preventDefault "cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur,"
    e.preventDefault();
   
    const random = Math.floor(Math.random() * 4) + 1;
   
    let randomHouse = "";
    switch (random) {
      case 1:
        randomHouse = "Griffyndor";
        break;
      case 2:
        randomHouse = "Hufflepuff";
        break;
      case 3:
        randomHouse = "Ravenclaw";
        break;
      case 4: 
        randomHouse = "Slytherin";
        break;
    }  
    const newSortedStudent = {
      id: students.length + 1,
      studentName: document.querySelector('#submitName').value,
      studentHouse: randomHouse,
    }
    students.push(newSortedStudent);
    studentCards(students);
    form.reset();
  }
  form.addEventListener('submit', sortHouse);
};



// event listeners dom

const sortingButton = document.querySelector('#sortingButton');
sortingButton.addEventListener('click', (e) => {
  sortTitle();
  expTitle();
  sortForm();
  houseButtons();
  studentCards(students);
  filterButtons();
  formFunction();
  expelledCards(expelled);
});
