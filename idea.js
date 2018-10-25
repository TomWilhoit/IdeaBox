class Idea (){

	constructor(title, body){
		this.id = new Date().getTime(); 
		this.title = title;
		this.body	= body;
		this.quality = "swill";
    this.upvote = 0; 
    this.downvote = 0;
	}
    function saveToSTorage(){

    }

    function updateSelf(){

    }

    function updateQuality(isUpVote){
      if(isUpVote){
        if(this.quality === "swill"){
          this.quality = "plausible"; 
        }
        else if(this.quality === "plausible"){
          this.quality = "genius"; 
        }
      }
      else{
        if(this.quality === "genius"){
          this.quality = "plausible"; 
        }
        else if(this.quality === "plausible") {
          this.quality = "swill"; 
        }
      }
    }

    function deleteFromStorage(){

    }

}


