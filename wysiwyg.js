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
  image: "https://en.wikipedia.org/wiki/Ulysses_S._Grant#/media/File:Ulysses_Grant_1870-1880.jpg",
  lifespan: {
    birth: 1822,
    death: 1885
  }
},
{
  title: "King",
  name: "Henry V",
  bio: "King of England from 1413 until his death at the age of 36 in 1422. He was the second English monarch who came from the House of Lancaster.",
  image: "https://en.wikipedia.org/wiki/Henry_V_of_England#/media/File:King_Henry_V_from_NPG.jpg",
  lifespan: {
    birth: 1386,
    death: 1422
  }
},
{
  title: "Ninja",
  name: "Hattori Hanzō",
  bio: "A famous samurai of the Sengoku era, credited with saving the life of Tokugawa Ieyasu and then helping him to become the ruler of united Japan.",
  image: "https://en.wikipedia.org/wiki/Hattori_Hanz%C5%8D#/media/File:Hanzo.jpg",
  lifespan: {
    birth: 1542,
    death: 1596
  }
}
];

var userChanges = document.getElementById("input");
var output = document.getElementById("main");

var counter = 0;

for (; counter < 5; counter++){
	output.innerHTML += `<div class="personbox" id="person-${counter}"><ul><li><h2>Occupation:</h2>${famous[counter].title}</li><li><h2>Name:</h2>${famous[counter].name}</li><li><h2>Bio:</h2>${famous[counter].bio}</li><li><h2>Years Lived:</h2>${famous[counter].lifespan.birth}-${famous[counter].lifespan.death}</li></div>`;
	console.log("output", famous[counter]);
}

var personnel = document.getElementsByClassName("personbox");



for (var i = 0; i > personnel.length; i++){
	personnel[i].addEventListener("click", function(event){
		// click logic here
	});
};