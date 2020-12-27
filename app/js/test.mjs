
let butID = []
console.log(butID)

$(document).ready(function() { 
  
    $("button").click(function() { 
        event.preventDefault(); 
        var val = $("input:text").val();  
        butID.push(val);
        cardSearch();
        clearArray();
    }); 
    
}); 

function clearArray(e) {
    document.getElementById("demo").innerHTML = "";
    butID = [];
}
let queryURLSearch = "https://api.pokemontcg.io/v1/cards?name=";
console.log(queryURLSearch)

function cardSearch(e) {

// let queryURLSearch = "https://api.pokemontcg.io/v1/cards?name=" + butID[0];

let newResult = []
console.log(newResult)
let searchResult = []
console.log(searchResult)

axios
.get(queryURLSearch)
.then(function (response) {
    let pokemon = response.data.cards
    console.log(pokemon)
    
    // Loop through results, get data we want and push to new array
    for (let i = 0; i < pokemon.length; i++) {
        
        let noDashResult = {
            noDash: pokemon[i].name.replace(/-/g, ' ')
        }
        
        let targetResult = {
            name: noDashResult.noDash,
            imageUrl: pokemon[i].imageUrlHiRes,
            set: pokemon[i].set, 
        }
        
        newResult.push(targetResult);
        
    }
    
    
    function createCards() {
        for (let j = 0; j < searchResult.length; j++) {
            
        let name = searchResult[j].name;
        let imageUrl = searchResult[j].imageUrl;
        let set = searchResult[j].set;

        let aDiv1 = document.createElement('div');
        let logoImg = document.createElement('img');
        let infoDiv = document.createElement('div');
        let cardName = document.createElement('p');
        let setName = document.createElement('p');

        logoImg.setAttribute('src', imageUrl);
        logoImg.classList.add('testImg');
        aDiv1.classList.add('test');
        aDiv1.id = "testCard";
        infoDiv.classList.add('setNameDiv');
        cardName.classList.add('cardName');
        setName.classList.add('setName');

        cardName.innerHTML = name;
        setName.innerHTML = set;
       
        aDiv1.appendChild(logoImg);
        aDiv1.appendChild(infoDiv);
        infoDiv.appendChild(cardName);
        infoDiv.appendChild(setName);

        document.getElementById('demo').append(aDiv1);

    }
}


    let testFilter = newResult.filter(answer => {
        return answer.name.includes($("input:text").val())
        
    })
    searchResult.push(testFilter)
    console.log(testFilter)


createCards(); 

    
});


}