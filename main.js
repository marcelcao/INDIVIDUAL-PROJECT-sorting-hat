const sort = document.querySelector('#sortButton');

const sortForm = (divID, htmlToRender) => {
  const formDiv = document.querySelector(divID);
  formDiv.innerHTML = htmlToRender;
}
  
let formString = "";
formString += `<form>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>` 

sortForm("#form", formString);

sort.addEventListener('click', (e) => {
  sortForm();
});
