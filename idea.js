class Idea (){

	constructor(title, body){
		this.id = new Date().getTime(); 
		this.title = title;
		this.body	= body;
		this.quality = "swill";
    this.upvote = 0; 
    this.downvote = 0;
	}

}


var idea1 = new Idea ("hello", "new body", )