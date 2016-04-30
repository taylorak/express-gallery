var editButton = document.querySelector('#editButton');
var editForm = document.querySelector('#blurDiv');
var cancelButton = document.querySelector('#cancelButton');

editButton.addEventListener('click', editButtonClick);
cancelButton.addEventListener('click', cancelClick);

function editButtonClick(evt) {
  evt.preventDefault();
  if (editForm.className === 'displayNone') {
    editForm.className = 'blurCover';
    // window.location.href = editButton.href;
  }
}

function cancelClick(evt) {
  evt.preventDefault();
  if (editForm.className === 'blurCover') {
    editForm.className = 'displayNone';
  }
}