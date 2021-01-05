let butID = []
console.log(butID)

let finalID = []
console.log(finalID)


$(document).ready(function () {

    $("button").click(function () {
        event.preventDefault();
        var val = $("input:text").val().toLowerCase();
        butID[0] = val;
        let newVal = val.replace(/ .*/, '');
        finalID[0] = newVal;
        clearArray();
        cardSearch();
    });

});



function clearArray(e) {
    document.getElementById("demo").innerHTML = "";
}


function cardSearch(e) {
    let queryURLSearch = "https://api.pokemontcg.io/v1/cards?name=" + finalID[0];
    console.log(queryURLSearch)


    axios
        .get(queryURLSearch)
        .then(function (response) {
            let pokemon = response.data.cards
            console.log(pokemon)
            let newResult = []
            console.log(newResult)


            // Loop through results, get data we want and push to new array
            for (let i = 0; i < pokemon.length; i++) {

                let noDashResult = {
                    noDash: pokemon[i].name.replace(/-/g, ' ')
                }

                let targetResult = {
                    name: noDashResult.noDash.toLowerCase(),
                    imageUrl: pokemon[i].imageUrlHiRes,
                    set: pokemon[i].set,

                }
                newResult.push(targetResult);

            }

            // This for loop and if/else compares the input value and the api call to produce the correct cards
            let finalResult = [];
            console.log(finalResult);

            for (let i = 0; i < newResult.length; i++) {
                if (newResult[i].name.includes(butID)) {
                    finalResult.push(newResult[i]);
                }
            }


            // This for loop creates the html for each card
            for (let j = 0; j < finalResult.length; j++) {

                let name = finalResult[j].name;
                let imageUrl = finalResult[j].imageUrl;
                let set = finalResult[j].set;

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

        });

}