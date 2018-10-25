class Idea {

	constructor(title, body){
		this.id = new Date().getTime(); 
		this.title = title;
		this.body	= body;
		this.quality = "swill";
    this.upvote = 0; 
    this.downvote = 0;
	}
    saveToSTorage(){

     }

    updateSelf(title, body){
      this.title = title; 
      this.body = body;

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

    deleteFromStorage(){

    }

}


