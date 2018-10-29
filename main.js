var searchButton        =        document.querySelector('.search-button');
var saveButton          =        document.querySelector('.save-button');
var upVote              =        document.querySelector('.up-vote');
var downVote            =        document.querySelector('.down-vote');
var deleteButton        =        document.querySelector('.delete-button');
var bottomSection       =        document.querySelector('.bottom-section');
var titleInput          =        document.querySelector('.title-input');
var bodyInput           =        document.querySelector('.body-input');
var saveDisabled        =        document.querySelector('#save-disabled');
var saveEnabled         =        document.querySelector('.save-button');
//stores list of class// we should be able to access idea.js methods so we need to save them
//variable in main.js// 
var ideas               =        [];
var ideasArray = []; 




saveButton.addEventListener('click', saveReturn);
bottomSection.addEventListener('click', manageCard);

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
  // if (titleInput.value !== false){
  //   document.getElementById("save-disabled").disabled = false;
  // }

  if (titleInput.value || bodyInput.value === ''){
    button.disabled = true;

   }else {
    button.disabled= false;
   }


  var idea = new Idea (titleInput.value, bodyInput.value); 
  
  idea.saveToStorage(ideas);
  appendCard(idea);
  titleInput.value = '';
  bodyInput.value = '';
  
  
}




  


function appendCard(idea) {
  // event.preventDefault();
  var cardHtml =
    `<div class="card-display" id="${idea.id}" data-id="${idea.id}">
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
  //get index of that idea in ideas array // 
  var index = ideas.indexOf(idea);
  //remove that idea from ideas array//  
  ideas.splice(index,1);
  idea.deleteFromStorage(ideas);
  console.table(idea);
  
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


