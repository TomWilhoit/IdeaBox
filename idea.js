class Idea {

  constructor(title, body, quality, id){
    this.id = id || new Date().getTime(); 
    this.title = title;
    this.body = body;
    this.quality = quality || "swill";
    this.upvote = 0; 
    this.downvote = 0;
  }
    saveToStorage(ideas){
      ideas.unshift(this);
      localStorage.setItem("ideas",JSON.stringify(ideas));

     }

    updateSelf(newText, type) {
      if (type === 'title') {
        this.title = newText;
      } else if (type === 'body') {
          this.body = newText;  
     }
    }

    updateQuality(isUpVote){
      if(isUpVote){
        this.upvote++;
        if(this.quality === "swill"){
          this.quality = "plausible"; 
        }
        else if(this.quality === "plausible"){
          this.quality = "genius"; 
        }
      }
      else{
        this.downvote++;
        if(this.quality === "genius"){
          this.quality = "plausible"; 
        }
        else if(this.quality === "plausible") {
          this.quality = "swill"; 
        }
      }
    }
    deleteFromStorage(ideas){
      localStorage.setItem('ideas',JSON.stringify(ideas));
    }
}


