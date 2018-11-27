//this is for index.html page, logic to select particular trainer that the user wants to select.


console.log(location.hash);

var selectedPlayer = location.hash;
// My background Pokemon Video When the page loads
window.onload = function myFunction() {
  var vid = document.getElementById("back_video");
  vid.autoplay = true;
  vid.load;
  // vid.controls = true;
};

let hp;
let defense;
let attack;
let potential;
let result =[];
let name;

let mikiasUrl = ["https://fizal.me/pokeapi/api/v2/id/25.json", "https://fizal.me/pokeapi/api/v2/id/14.json", "https://fizal.me/pokeapi/api/v2/id/27.json"];
let mikiasPokeImage = ["pikachugif.gif", "kakuna.gif", "sandshrew.png"];
let mikiasTrainerImage = "mikias.png";//Trainer name is Mikias.

let neeyasUrl = ["http://fizal.me/pokeapi/api/v2/name/lapras.json","http://fizal.me/pokeapi/api/v2/name/bellossom.json", "http://fizal.me/pokeapi/api/v2/name/luxio.json"] ;
let neeyaPokeImage = [];

let tylersUrl = [] ;
let tylerPokeImage = [];

let carlosUrl = ["https://fizal.me/pokeapi/api/v2/id/6.json","https://fizal.me/pokeapi/api/v2/id/25.json", "https://fizal.me/pokeapi/api/v2/id/395.json"] ;
let carlosPokeImage = ["http://play.pokemonshowdown.com/sprites/xyani/charizard.gif","http://play.pokemonshowdown.com/sprites/xyani/pikachu.gif", "http://play.pokemonshowdown.com/sprites/xyani/empoleon.gif"];

let raysUrl = ["http://fizal.me/pokeapi/api/v2/name/azumarill.json","http://fizal.me/pokeapi/api/v2/name/spheal.json", "http://fizal.me/pokeapi/api/v2/name/leafeon.json"] ;
let rayPokeImage = [];

// let pokeball = document.getElementById('preview_image');
let pokeballSketch = document.getElementById('poke_image');

function fetchPokemonData(thaturl) {
      axios.get(thaturl)
      .then(function (response) {
         hp = response.data.stats[5].base_stat;  //Pokemon's Health Status
         attack = response.data.stats[4].base_stat; //Pokemon's Attack Status
         defense = response.data.stats[3].base_stat; //Pokemon's Defense Status
         potential = response.data.abilities; //Pokemon's Ability
         name = response.data.forms[0].name;

      })
      .catch(function (error) {
          console.log("error");
      });
  }

//  "fizal.me/pokeapi/api/v2/name/"+name+".json/";

  /** Method to display Pokemon Data **/
  let ability_lists = ["This pokemon is so fast that you never see it coming, it just comes and that's that, and its oponent are left wondering what just happened.", "The most Abilities any species or form has is three: two normal Abilities and one Hidden Ability. In most wild Pokémon encounters, it'll be non-Hidden Abilities.", "There are three ways for Pokémon to change Abilities in a permanent manner. One way is if the Pokémon has different forms with different Abilities."];
  let sketchfab = ["https://sketchfab.com/models/09326261ead84002af136fdff56f50e7/embed?autostart=1", "https://sketchfab.com/models/28b3d9b0ee5b48ca941e953cefe9bcbf/embed?autostart=1&amp;preload=1","https://sketchfab.com/models/e64604ea410b4648bbb4cd5d47b1bddc/embed?autostart=1&amp;preload=1"];
  let thatPokemonName = document.getElementById('pokemon_name');
  let ability_description = document.getElementById('ability_summary');
  let ability_button_one = document.getElementById('ability_one');
  let ability_button_two = document.getElementById('ability_two');
  let ability_button_three = document.getElementById('ability_three');



//This Class is to Modify Pokemon Object when its method(s) is also called
class Pokemon{
  //Pokemon has certain attributes
  //only the last parameter is String data type, the rest are integer

  constructor(name, hpStat, attackStat, defenseStat, abilitiesStat){
    this.name = name;
    this.hpStat = hpStat;
    this.attackStat = attackStat;
    this.defenseStat = defenseStat;
    this.abilitiesStat = abilitiesStat;
  }
  /** Creating the function to display data about the pokemon**/
  display(sketchUrl) {
      let displayHP = document.getElementById('health_icon');
      let displayAttack = document.getElementById('attack_icon');
      let displayDefense = document.getElementById('role_icon');
      let displayAbility = document.getElementById('pokemon_ability');
      // let resultInside = [result[0], result[1], result[2]];
      let abilitiesInside = [ability_lists[0], ability_lists[1], ability_lists[2]];
      for(var i = 0; i<potential.length; i++){
        result[i] = potential[i].ability.name;
        console.log(i+"\t"+result[i]);
      }

        /** Animation 'hover' Starts here
        From here im creating a animation where when user hover over and click on a option, info about that shows up**/
      ability_button_one.addEventListener('click', function(){
        if(typeof result[0]==='undefined'){
          displayAbility.innerHTML = "Anonymous";
        }else{
        displayAbility.innerHTML = result[0];
        ability_description.innerHTML = abilitiesInside[0];
      }
      });
      ability_button_two.addEventListener('click', function(){
        if(typeof result[1]==='undefined'){
          displayAbility.innerHTML = "Anonymous";
        }else{
        displayAbility.innerHTML = result[1];
            ability_description.innerHTML = abilitiesInside[1];
      }
      });
      ability_button_three.addEventListener('click', function(){
        if(typeof result[2]==='undefined'){
          displayAbility.innerHTML = "Anonymous";
        }else{
        displayAbility.innerHTML = result[2];
          ability_description.innerHTML = abilitiesInside[2];
      }
      });

      thatPokemonName.innerHTML = this.name;
      displayAttack.innerHTML = this.attackStat;
      displayDefense.innerHTML = this.defense;
      displayHP.innerHTML = this.hpStat;
      //assigning url to the Pokemon Image
      if(selectedPlayer==='#neeya'){
      pokeballSketch.src = neeyaPokeImage[rand];
      }else if(selectedPlayer==='#mikias'){
      pokeballSketch.src = mikiasPokeImage[rand];
      }else if(selectedPlayer==='#carlos'){
      pokeballSketch.src = carlosPokeImage[rand];
      }else if(selectedPlayer==='#tyler'){
      pokeballSketch.src = tylerPokeImage[rand];
      }else if(selectedPlayer==='#ray'){
      pokeballSketch.src = rayPokeImage[rand];
      }else{
        console.log(selectedPlayer, '\terror');
      }

      console.log(this.name);
      console.log(this.hpStat);
      console.log(this.defense);
      console.log(this.attackStat);
      console.log(sketchUrl+":\t"+mikiasPokeImage[sketchUrl]);
    }
}


let sketchRand = 0;
let rand = 0;
//This Class is to Modify Trainer Object when its method(s) is also called
class Trainer{
  // multiple pokemon, user picks one, array of Pokemon to choose from
  //where parameter name holds the name of the trainer
  constructor(trainerName){
    // this.pokeObject = new Pokemon(hp, attack, defense, abilities);
    this.pokemon = ["one", "two", "three"];

  }

  //Method named 'all' that return the array of Pokemon, plus you can add more pokemon if you want
    add(pokeObject){
      this.pokemon.push(pokeObject);
    }
    //this method returns the value from add() method
    all(){
      return this.pokemon;
    }

    // Method named 'get' that Pokemon object housing information for the pokemon it found
    get(){
    // let rand = Math.floor(Math.random()*url.length);
    rand++;
    if(rand>2){
      rand = 0;
    }
    sketchRand = rand;
    console.log("get:\t",rand);
    if(selectedPlayer==='#neeya'){
      fetchPokemonData(neeyasUrl[rand]);
    }else if(selectedPlayer==='#mikias'){
        fetchPokemonData(mikiasUrl[rand]);
    }else if(selectedPlayer==='#carlos'){
        fetchPokemonData(carlosUrl[rand]);
    }else if(selectedPlayer==='#tyler'){
        fetchPokemonData(tylersUrl[rand]);
    }else if(selectedPlayer==='#ray'){
        fetchPokemonData(raysUrl[rand]);
    }else{
      console.log(selectedPlayer, '\terror');
    }

    }
}

//utilizing trainer class to display various trainer and its Pokemon
let trainer = new Trainer('mikias');


//This function showTrainerData() assigns who the Trainer is and his/her name, trainerName is the parameter where the player name goes
//this function also assign trainer his her image as well
=======



//This function showTrainerData() assigns who the Trainer is and his name, trainerName is the parameter where the player name goes
let pokemonTrainerName = document.getElementById('player_name');
let trainerImage = document.getElementById('left_image');


>>>>>>> master
function showTrainerData(trainerName){
  // let nameThatTrainer = sendTrainerName('mikias');
  // selectedPlayer dont forget

  let trainerName = "";
  if(tainerName === "mikias"){
    pokemonTrainerName.innerHTML = "Mikias";
    trainerImage.src = mikiasTrainerImage;
  } else if(tainerName === "carlos"){
    pokemonTrainerName.innerHTML = "Carlos";
    trainerImage.src = "carlos.png";
  } else if(trainerName === "tyler"){
    pokemonTrainerName.innerHTML = "Tyler";
    trainerImage.src = "mikias.png";
  } else if(trainerName === "neeya"){
    pokemonTrainerName.innerHTML = "Neeya";
    trainerImage.src = "mikias.png";
  } else if(trainerName === "roy"){
    pokemonTrainerName.innerHTML = "Roy";
    trainerImage.src = "howrang.png";
  }

}
window.load = showTrainerData(selectedPlayer);

//function to move to next Pokemon and its abilities
function gotoNextPokemon(){
  trainer.get();// here the method will fetch and assign the pokemon data to its designated element
  function runThis(){
  thatPokemon.display(sketchRand);
  }
  setTimeout(runThis, 1000);
}
// When clicked on this button new pokemon shows up
let myNextButton = document.querySelector('.button_on_top');
myNextButton.addEventListener('click', gotoNextPokemon);
