let butID = []

$(document).ready(function() { 
  
    $("button").click(function() { 
         
        var x = $("input:text").val();  
        console.log(x);
        butID.push(x);
        cardSearch();
    }); 

}); 

function cardSearch(e) {

let queryURLSearch = "https://api.pokemontcg.io/v1/cards?name=" + butID[0];
console.log(queryURLSearch)

axios
    .get(queryURLSearch)
    .then(function (response) {
        let pokemon = response.data.cards
        console.log(pokemon)
        let newResult = []


        // Loop through results, get data we want and push to new array
        for (let i = 0; i < pokemon.length; i++) {

            let targetResult = {
                name: pokemon[i].name,
                symbol: pokemon[i].symbolUrl,
                imageUrl: pokemon[i].imageUrlHiRes,

            }
            newResult.push(targetResult);
        }
 

    for (let j = 0; j < newResult.length; j++) {

        // let name = newResult[j].name;
        let imageUrl = newResult[j].imageUrl;
        // let symbol = newResult[j].symbol;

        let aDiv1 = document.createElement('div');
        // let setDiv = document.createElement('div');
        // let setImage = document.createElement('div');
        let logoImg = document.createElement('img');
        // let setContent = document.createElement('div');
        // let setNameDiv = document.createElement('div');
        // let symbolImg = document.createElement('img');

        logoImg.setAttribute('src', imageUrl);
        logoImg.classList.add('testImg');
        aDiv1.classList.add('test');
        aDiv1.id = "testCard";
        // aDiv1.setAttribute('name', "button");
        // setImage.classList.add('card-image');
        // setContent.classList.add('card-content');
        // symbolImg.classList.add('symbolImg');

        aDiv1.appendChild(logoImg);
        // setDiv.appendChild(setImage);
        // setImage.appendChild(logoImg);
        // setDiv.appendChild(setContent);
        // setContent.appendChild(setNameDiv);


        document.getElementById('demo').append(aDiv1);

    }

});

}