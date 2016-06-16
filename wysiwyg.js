var famous = [
	{
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
},
{
  title: "General",
  name: "Ulysses Grant",
  bio: "As Commanding General of the United States Army (1864–69), Grant worked closely with President Abraham Lincoln to lead the Union Army to victory over the Confederacy in the American Civil War.",
  image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Ulysses_Grant_1870-1880.jpg",
  lifespan: {
    birth: 1822,
    death: 1885
  }
},
{
  title: "King",
  name: "Henry V",
  bio: "King of England from 1413 until his death at the age of 36 in 1422. He was the second English monarch who came from the House of Lancaster.",
  image: "https://upload.wikimedia.org/wikipedia/commons/1/18/King_Henry_V_from_NPG.jpg",
  lifespan: {
    birth: 1386,
    death: 1422
  }
},
{
  title: "Ninja",
  name: "Hattori Hanzō",
  bio: "A famous samurai of the Sengoku era, credited with saving the life of Tokugawa Ieyasu and then helping him to become the ruler of united Japan.",
  image: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Hanzo.jpg",
  lifespan: {
    birth: 1542,
    death: 1596
  }
}
];



// dotted border when clicked
// text input focus
// 
// type in input, bio updates
// after enter key, input clears




var userChanges = document.getElementById("input");
var output = document.getElementById("main");

var counter = 0;

for (; counter < famous.length; counter++){
	var mainPeeps = document.createElement("div");
	mainPeeps.className = "personbox";
	mainPeeps.id = "person-" + `${counter}`;
	document.getElementById("main").appendChild(mainPeeps);
	var listStart = document.createElement("ul");
	listStart.className = "list";
	listStart.id = "list-" + `${counter}`;
	mainPeeps.appendChild(listStart);
	var mouse = document.createAttribute("onclick");
	mouse.value = "clickIt()";
	listStart.setAttributeNode(mouse);
	var picture = document.createElement("img");
	listStart.appendChild(picture);
	picture.className = "property";
	picture.id = "pic-" + `${counter}`;
	picture.src = famous[counter].image;
	var job = document.createElement("li");
	job.className = "key";
	listStart.appendChild(job);
	job.appendChild(document.createTextNode("Occupation:"));
	var jobName = document.createElement("li");
	listStart.appendChild(jobName);
	jobName.className = "property";
	jobName.appendChild(document.createTextNode(famous[counter].title));
	var bob = document.createElement("li");
	bob.className = "key";
	listStart.appendChild(bob);
	bob.appendChild(document.createTextNode("Name:"));
	var character = document.createElement("li");
	listStart.appendChild(character);
	character.className = "property";
	character.appendChild(document.createTextNode(famous[counter].name));
	var bio = document.createElement("li");
	listStart.appendChild(bio);
	bio.className = "key";
	bio.appendChild(document.createTextNode("Bio:"));
	var bioedit = document.createElement("li");
	listStart.appendChild(bioedit);
	bioedit.className = "property";
	bioedit.id = "bio-" + `${counter}`;
	bioedit.appendChild(document.createTextNode(famous[counter].bio));
	var years = document.createElement("li");
	listStart.appendChild(years);
	years.className = "key";
	years.appendChild(document.createTextNode("Years Lived:"));
	var dates = document.createElement("li");
	listStart.appendChild(dates);
	dates.className = "property";
	dates.appendChild(document.createTextNode(famous[counter].lifespan.birth + "-" + famous[counter].lifespan.death));
};

var personnel = document.getElementsByClassName("personbox");



for (var i = 0; i > personnel.length; i++){
	personnel[i].addEventListener("click", function borderIt(event){
		console.log("event", event);
		personnel.classList.toggle("caged");
	});
};

userChanges.addEventListener("keyup", function processKeys(event){
	if (event.keyCode !== 13){
		// bio update action
	} else {
		userChanges.value = "";
		console.log("return", event);
		}
});

// var dotted = document.getElementsByClassName("list");

// for (var i = 0; i < dotted.length; i++) {
// 	console.log("event", event);
//   	dotted[i].addEventListener("click", function (event) {
//   	.classList.add("dotted");
// })};
function clickIt(event){
	listStart.classList.toggle("caged");
}



// how to register clicked div
// how to add border to said div
// how to direct userChanges.value to bio div
// child node? guinea pig example?















