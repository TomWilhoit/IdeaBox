var searchButton        =        document.querySelector('.search-button');
var searchInput         =        document.querySelector('.search-text')
var saveButton          =        document.querySelector('.save-button');
var upVote              =        document.querySelector('.up-vote');
var downVote            =        document.querySelector('.down-vote');
var deleteButton        =        document.querySelector('.delete-button');
var bottomSection       =        document.querySelector('.bottom-section');
var titleInput          =        document.querySelector('.title-input');
var bodyInput           =        document.querySelector('.body-input'); 
var ideas               =        [];
var ideasArray          =        [];
var titleEdit           =        document.querySelector('.title-edit');
var cardDisplay         =        document.querySelector('.card-display')



// Event Listeners



saveButton.addEventListener('click', saveReturn);
bottomSection.addEventListener('click', manageCard);
searchInput.addEventListener('keyup', search);
bottomSection.addEventListener('dblclick', editCard);



// On-load 

window.onload = function() {
  if (localStorage.getItem('ideas') !== null) {
    ideas = JSON.parse(localStorage.getItem('ideas'));
    ideas = ideas.map(function(eachIdea) {
      return new Idea(eachIdea.title, eachIdea.body, eachIdea.quality, eachIdea.id);
    });
    ideas.forEach(function(eachIdea){
      appendCard(eachIdea);
    })
  }
}

function saveReturn(event) {
  if (titleInput.value || bodyInput.value === ''){
    event.disabled = true;
   }else {
    event.disabled= false;
   }
  var idea = new Idea (titleInput.value, bodyInput.value); 
  // debugger
  idea.saveToStorage(ideas);
  appendCard(idea);
  titleInput.value = '';
  bodyInput.value = '';
}

function appendCard(idea) {
  event.preventDefault();
  var cardHtml =
    `<div class="card-display" id="${idea.id}" data-id="${idea.id}">
      <h2 contentEditable="false" class="edit title-edit">${idea.title}</h2>
      <p contentEditable="false" class="edit body-edit">${idea.body}</p>
      <div class="card-button">
        <button class="up-vote btn">Up</button>
        <button class="down-vote btn">Down</button>
        <p class="card-text btn">Quality:${idea.quality}</p>
        <button class="delete-button btn" > X </button>
      </div>
     </div>`
    bottomSection.innerHTML += cardHtml;
    
  }
//event.target.dataset.(declared variable) grabs the texts inside of specific card.

  //manages all three buttons in display-card// //just like query
function manageCard(event){
  if (event.target.classList.contains('delete-button')){
    deleteCard(event);
  }
  else if(event.target.classList.contains('up-vote')){
    upVoteCard (event);
  } 
  else if(event.target.classList.contains('down-vote')){
    downVoteCard (event);
  }
}

function editCard() {
  
  if (event.target.classList.contains("edit")) {
    event.target.contentEditable = true;
    event.target.addEventListener('blur',saveText);
  }
}

function saveText() {
  var id = event.target.parentElement.dataset.id;
  var idea = getIdeaById(id);
  var index = findIndex(idea);
  if (event.target.classList.contains('title-edit')){ 
    idea.updateSelf(event.target.innerText, 'title');
  } else { 
    idea.updateSelf(event.target.innerText, 'body');
  }
    ideas.splice(index, 1, idea);
    idea.saveToStorage(ideas);
}
function upVoteCard(event){
  console.log('upVote')
  var element = event.target.parentElement.parentElement;
  var id = element.id;
  var idea = getIdeaById(id); 
  idea.updateQuality(true);
  console.log(ideas); 

}

function findIndex(idea){
  console.log(ideas.indexOf(idea));
}



function downVoteCard(event){
  var element = event.target.parentElement.parentElement;
  var id = element.id;
  var idea = getIdeaById(id); 
  idea.updateQuality(false);
  console.log('downVote');
  console.log(ideas); 
}

 
function deleteCard(event){
  var element = event.target.parentElement.parentElement;
  var id = element.dataset.id;
  var idea = getIdeaById(id); 
  var index = ideas.indexOf(idea);  
  ideas.splice(index,1);
  idea.deleteFromStorage(ideas);
  element.remove();


}
function getIdeaById(id){
  for (var i=0; i < ideas.length; i++){
    if (id == ideas[i].id){
      return ideas[i]; 
    }
  }
}
function search(){
 event.preventDefault();
 var searchText = searchInput.value.toUpperCase();
 var filteredIdeas = ideas.filter(idea => { 
 var upperCaseTitle = idea.title.toUpperCase();
 var upperCaseBody = idea.body.toUpperCase();

  return upperCaseTitle.includes(searchText) || upperCaseBody.includes(searchText);
  });

  bottomSection.innerHTML = '';
  filteredIdeas.forEach(function(eachIdea){
      appendCard(eachIdea);
 });

 }








