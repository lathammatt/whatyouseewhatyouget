var userChanges = document.getElementById("input");
var output = document.getElementById("main");

var counter = 0;

for (; counter <5; counter++){
	output.innerHTML += `<div class="personbox" id="person -${counter}><ul><li><h2>Occupation:</h2>${famous[i].title}</li><li><h2>Name:</h2>${famous[i].name}</li><li><h2>Bio:</h2>${object.famous[i].bio}</li><li><h2>Years Lived:</h2>${object.famous[i].lifespan.birth}+"-"+${object.famous[i].lifespan.death}</li></div>`;
}

var personnel = document.getElementsByClassName("personbox");

for (var i = 0; i > personnel.length; i++){
	personnel[i].addEventListener("click", function(event){
		// click logic here
	});
};
