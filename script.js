var element;

function showDialog(event){
	document.getElementById("popUpHolder").style.visibility = "visible";
	element=this.parentNode;
}

sumVotes={
	"rating1":0,
	"rating2":0,
	"rating3":0,
	"rating4":0,
	"rating5":0
};
numberVotes={
	"rating1":0,
	"rating2":0,
	"rating3":0,
	"rating4":0,
	"rating5":0
};

function addVote(i,value){
    sumVotes[i]=parseInt(sumVotes[i]) + parseInt(value);
    numberVotes[i]=numberVotes[i]+1;
    console.log(numberVotes[i]);
}

function calculateRating(i){
	if(numberVotes[i]!=0){
		return sumVotes[i]/numberVotes[i];
	}
	else return "No votes, yet."
}

function updateRating(i){
	id="rating" + (i+1);
	console.log(id)
	
}

function rate(event){
	value=0
	var radios = document.getElementsByName('rating');
	for (var i = 0, length = radios.length; i < length; i++) {
    	if (radios[i].checked) {
        	value=radios[i].value;
        	break;
    	}
	}
	console.log(element);
	rateElement=element.getElementsByTagName("span")[0];
	console.log(rateElement.id);
	addVote(rateElement.id,value);
	document.getElementById("popUpHolder").style.visibility = "hidden";
	rateElement.innerHTML=calculateRating(rateElement.id);
}

