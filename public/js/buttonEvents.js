var deleteButton = document.querySelector('#deleteButton');
var editButton = document.querySelector('#editButton');

deleteButton.addEventListener('click', deleteButtonClick);
editButton.addEventListener('click',editButtonClick);

function deleteButtonClick(evt) {
  evt.preventDefault();
  // console.log('CLICK', this.href);
  // var xhr = new XMLHttpRequest();
  // xhr.addEventListener('load', deletePhoto);
  // xhr.open('DELETE', this.href);
  // xhr.send();
}

function editButtonClick(evt) {
  evt.preventDefault();
  var xhr = new XMLHttpRequest();
  xhr.addEventListener('load', deletePhoto);
  xhr.open('PUT', this.href);
  xhr.send();
}


function deletePhoto(evt) {
  console.log("delete Photo");
  var response = JSON.parse(this.responseText);
  if(response.success === true) {
    window.location.href = response.redirect;
  }
}

function editPhoto(evt) {
  var response = JSON.parse(this.responseText);
  if(response.success === true) {
    window.location.href = response.redirect;
  }
}

function editShow(){
  document.getElementById("photoBlur").className = "editShow";
}

function editHide(){
  document.getElementById("photoBlur").className = "editHide";
}