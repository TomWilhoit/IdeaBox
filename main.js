var searchButton        =        document.querySelector('.search-button');
var saveButton          =        document.querySelector('.save-button');
var upVote              =        document.querySelector('.up-vote')
var downVote            =        document.querySelector('.down-vote')
var deleteButton        =        document.querySelector('.delete-button')
var bottomSection       =        document.querySelector('.bottom-section')
// var cardDisplay         =        document.querySelector('.card-display')

saveButton.addEventListener('click', saveReturn)

function saveReturn() {
  var titleInput = document.querySelector('.title-input')
  var bodyInput = document.querySelector('.body-input')
  appendCard(titleInput.value, bodyInput.value);

}

function appendCard(title, body) {
  event.preventDefault();
  // console.log('Hey')
  var cardHtml =
    `<div class="card-display">
    <h2 class="card-title">${title}</h2>
    <p class="card-text">${body}</p>
      <button class="up-vote">up</button>
      <button class="down-vote">down</button>
      <p class="quality-change">Quality: Swill</p>
      <button class="delete-button">X</button>
    </div>`;
    bottomSection.innerHTML += cardHtml;
  }