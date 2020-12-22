// let queryURLTest = "https://api.pokemontcg.io/v1/cards?name=";
// console.log(queryURLTest)

// axios
//     .get(queryURLTest)
//     .then(function (response) {
//         let pokemon = response.data.sets
//         let newResult = []


//         // Loop through results, get data we want and push to new array
//         for (let i = 0; i < pokemon.length; i++) {

//             let targetResult = {
//                 logo: pokemon[i].logoUrl,
//                 number: pokemon[i].name,
//                 release: pokemon[i].releaseDate,
//                 symbol: pokemon[i].symbolUrl,

//             }
//             newResult.push(targetResult);
//         }

$(document).ready(function() { 
  
    $("button").click(function() { 
        
      //here the value is stored in variable.  
        var x = $("input:text").val();  

        document.getElementById("demo").innerHTML = x; 
    }); 

}); 