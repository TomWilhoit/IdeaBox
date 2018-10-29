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
var titleEdit = document.querySelector('.title-edit');
var bodyEdit = document.querySelector('.body-edit');

// Event Listeners

saveButton.addEventListener('click', saveReturn);
bottomSection.addEventListener('click', manageCard);
searchButton.addEventListener('click', search);


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

function saveReturn() {
  var idea = new Idea (titleInput.value, bodyInput.value); 
  //adds idea in ideas array on line 11//
  idea.saveToStorage(ideas);
  appendCard(idea);
  titleInput.value = '';
  bodyInput.value = '';
}

function appendCard(idea) {
  // event.preventDefault();
  var cardHtml =
    `<div class="card-display" id="${idea.id}" data-id="${idea.id}">
      <h2 contentEditable="true" class="title-edit">${idea.title}</h2>
      <p class="body-edit">${idea.body}</p>
      <div class="card-button">
        <button class="up-vote btn">Up</button>
        <button class="down-vote btn">Down</button>
        <p class="card-text btn">Quality:${idea.quality}</p>
        <button class="delete-button btn" > X </button>
      </div>
     </div>`
    bottomSection.innerHTML += cardHtml;
    
  }


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

//creates function for upvote and downvote// 
function upVoteCard(event){
  console.log('upVote')
  var element = event.target.parentElement.parentElement;
  //get id of element// 
  var id = element.id;

  var idea = getIdeaById(id); 
  idea.updateQuality(true);
  console.log(ideas); 

}


function downVoteCard(event){
  var element = event.target.parentElement.parentElement;
  //get id of element// 
  var id = element.id;

  var idea = getIdeaById(id); 
  idea.updateQuality(false);
  console.log('downVote');
  console.log(ideas); 
}

 
function deleteCard(event){
  //get the parent element of card// 
  var element = event.target.parentElement.parentElement;
  //get id of element// 
  var id = element.dataset.id;

  var idea = getIdeaById(id); 
  var index = ideas.indexOf(idea);  
  ideas.splice(index,1);
  idea.deleteFromStorage(ideas);
  // idea.me(); 
  //remove that card from dom//
  element.remove();


}
//It finds idea by its id // //
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



function searchCardsReturn() {

}




