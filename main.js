var searchButton        =        document.querySelector('.search-button');
var saveButton          =        document.querySelector('.save-button');
// var upVote              =        document.querySelector('.up-vote');
// var downVote            =        document.querySelector('.down-vote');
var deleteButton        =        document.querySelector('.delete-button');
var bottomSection       =        document.querySelector('.bottom-section');
var titleInput          =        document.querySelector('.title-input');
var bodyInput           =        document.querySelector('.body-input');
//stores list of class// we should be able to access idea.js methods so we need to save them
//variable in main.js// 
var ideas               =        []; 


saveButton.addEventListener('click', saveReturn);
bottomSection.addEventListener('click', deleteCard);


function saveReturn() {
  var idea = new Idea (titleInput.value, bodyInput.value); 
  //adds idea in ideas array on line 11//
  ideas.push(idea);
  console.log(ideas);
  appendCard(idea);
  titleInput.value = '';
  bodyInput.value = '';

}

function appendCard(idea) {
  // event.preventDefault();
  var cardHtml =
    `<div class="card-display">
      <h2>${idea.title}</h2>
      <p>${idea.body}</p>
      <div class="card-button">
        <button class="up-vote btn">Up</button>
        <button class="down-vote btn">Down</button>
        <p class="card-text btn">Quality:${idea.quality}</p>
        <button class="delete-button btn" > X </button>
      </div>
     </div>`
    bottomSection.innerHTML += cardHtml;
    
  }

function deleteCard(event){
  console.log(event)
  if (event.target.classList.contains('delete-button')) {
    console.log('here')
    event.target.parentElement.parentElement.remove();
  
  }
}

