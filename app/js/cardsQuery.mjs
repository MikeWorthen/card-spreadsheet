// import axios from "axios";
// const BASEURL = "https://cors-anywhere.herokuapp.com/https://api.meetup.com/find/topics?query=";

// let queryURL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=30"
let queryURL = "https://api.pokemontcg.io/v1/cards?name=charizard"

axios
.get( queryURL)
.then(function(response){
let pokemon = response


    console.log(pokemon)

})