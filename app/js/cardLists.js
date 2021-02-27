window.addEventListener('load', allCards)


function allCards(e) {

    let queryURLTest = "https://api.pokemontcg.io/v1/cards?setCode=swsh45";
    console.log(queryURLTest)
    axios
        .get(queryURLTest)
        .then(function (response) {
            let pokemon = response.data.cards
            console.log(pokemon);
            let newResult = []
            console.log(newResult);

            // Loop through results, get data we want and push to new array
            for (let i = 0; i < pokemon.length; i++) {

                let targetResult = {
                    name: pokemon[i].name,
                    imageUrl: pokemon[i].imageUrl,
                }
                newResult.push(targetResult);
            }


            for (let j = 0; j < newResult.length; j++) {

                let name = newResult[j].name;
                let imageUrl = newResult[j].imageUrl;
        
                let aDiv1 = document.createElement('div');
                let logoImg = document.createElement('img');
                let infoDiv = document.createElement('div');
                let cardName = document.createElement('p');
        
                logoImg.setAttribute('src', imageUrl);
                logoImg.classList.add('setCardImg');
                aDiv1.classList.add('allCards');
                aDiv1.id = "setCard";
                infoDiv.classList.add('setNameDiv');
                cardName.classList.add('cardName');
        
                cardName.innerHTML = name;
               
                aDiv1.appendChild(logoImg);
                aDiv1.appendChild(infoDiv);
                infoDiv.appendChild(cardName);
        
                document.getElementById('allCards').append(aDiv1);
        
            }

        });

}

