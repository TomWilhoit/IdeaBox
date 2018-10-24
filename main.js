var searchButton        =        document.querySelector('.search-button');
var saveButton          =        document.querySelector('.save-button');
var upVote              =        document.querySelector('.up-vote')
var downVote            =        document.querySelector('.down-vote')
var deleteButton        =        document.querySelector('.delete-button')
var bottomSection       =        document.querySelector('.bottom-section')

saveButton.addEventListener('click', saveReturn)
bottomSection.addEventListener('click', deleteCard)

function saveReturn() {
  var titleInput = document.querySelector('.title-input')
  var bodyInput = document.querySelector('.body-input')
  appendCard(titleInput.value, bodyInput.value);
  titleInput.value = '';
  bodyInput.value = '';

}

function appendCard(title, body) {
  event.preventDefault();
  var cardHtml =
    `<div class="card-display">
      <h2>${title}</h2>
      <p>${body}</p>
      <div class="card-button">
        <button class="up-vote btn">Up</button>
        <button class="down-vote btn">Down</button>
        <p class="card-text btn">Quality: Swill</p>
        <button class="delete-button btn" > X </button>
      </div>
     </div>`
    bottomSection.innerHTML += cardHtml;
    var idea = new Idea (title, body)
  }

function deleteCard(event){
  console.log(event)
  if (event.target.classList.contains('delete-button')) {
    console.log('here')
    event.target.parentElement.parentElement.remove();
  
  }
}

