// students
const students = [
  // {
  //   id: 1,
  //   studentName: "Harry Potter", 
  //   studentHouse: "Griffyndor",
  // },
  // {
  //   id: 2,
  //   studentName: "Draco Malfoy", 
  //   studentHouse: "Slytherin",
  // },
];

const expelled = [];

// render DOM function

const renderToDom = (divID, htmlToRender) => {
  const selectedDiv = document.querySelector(divID);
  selectedDiv.innerHTML = htmlToRender;
};
 
//main welcome card 

const welcome = () => {
  let domString = `<div class="welcome-card">
  <div class="card-body">
    <img class="hat-sort" src="https://www.gamespot.com/a/uploads/original/1599/15997278/4096013-sortinghatthumb.png">
    <h5 class="card-title-main">The Hogwarts Sorting Hat</h5>
    <div class="title-container">
    <p class="card-text-welcome">Welcome to Hogwarts, first-year student. To determine which House you will be a part of, please click the button below:</p>
    </div>
    <a href="#" class="btn btn-primary" id="sortingButton">Take me to the Sorting Hat</a>
  </div>`;
  renderToDom('#sorting', domString);
};

// sorted title
const sortTitle = () => {
  let domString = `<h1>First Year Students</h1>`;
  renderToDom('#sortedTitle', domString);
};

// expelled title
const expTitle = () => {
  let domString = `<h1>Expelled</h1>`;
  renderToDom('#expelledTitle', domString);
};


// input form
const sortForm = () => {
  let domString = `
  <form>
  <div class="mb-3">
    <input type="text" class="form-control" id="submitName" placeholder="Type Name Here">
  </div>
  <button type="submit" class="sort-me">Sort</button>
  </form>`; 
  renderToDom('#form', domString);
};


// student cards
const studentCards = (array) => {
  let domString = "";
  for (student of array) {
    domString += `<div class="card" style="width: 15rem;">
    <div class="card-body-${student.studentHouse === "Griffyndor" ? "Griffyndor" : (student.studentHouse === "Hufflepuff" ? "Hufflepuff" : (student.studentHouse === "Ravenclaw" ? "Ravenclaw" : "Slytherin"))}">
      <h5 class="card-title">${student.studentName}</h5>
      <p class="card-text">${student.studentHouse}</p>
      <button class="expel-btn" id="expel--${student.id}">Expel</button>
    </div>
  </div>`
  }
  renderToDom('#sortedStudents',domString);
};



// expelled students cards
const expelledCards = (array) => {
  let domString = "";
  for (student of array) {
    domString += `<div class="card-exp" style="width: 15rem;">
    <div class="card-body-exp">
      <h5 class="card-title">${student.studentName}</h5>
      <p class="card-text">joined Voldemort's army</p>
    </div>
  </div>`
  }
  renderToDom('#expelledStudents',domString);
};


// expelled students function

const expelSorted = document.querySelector('#sortedStudents');

expelSorted.addEventListener('click', (e) => {
  alert("Are you sure you want to expel this student?");
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

  const sortHouse = () => {
    //per W3schools this preventDefault "cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur,"
    // e.preventDefault(); move this to form event listener
   
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
  }
  form.addEventListener('submit', (e) => {
    if (document.getElementById('submitName').value === "") {
      alert('Please enter your name');
    } else {sortHouse()};
    e.preventDefault();
    form.reset();
  });
};

const init = () => {
  welcome(); 
};
init();


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
