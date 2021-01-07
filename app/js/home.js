window.addEventListener('load', newestSets)


function newestSets(e) {

    let queryURL = "https://api.pokemontcg.io/v1/sets/";
    console.log(queryURL)

    axios
        .get(queryURL)
        .then(function (response) {
            let pokemon = response.data.sets
            let newResult = []


            // Loop through results, get data we want and push to new array
            for (let i = 0; i < pokemon.length; i++) {

                let targetResult = {
                    logo: pokemon[i].logoUrl,
                    number: pokemon[i].name,
                    release: pokemon[i].releaseDate,
                    symbol: pokemon[i].symbolUrl,

                }
                newResult.push(targetResult);
            }


            let swshResult = [newResult[109], newResult[110], newResult[111], newResult[112], newResult[113], newResult[114]]


// Newest Sets for Home Page

            // Adds a Div for the Cards to go
            let swshDiv1 = document.createElement('div');
            swshDiv1.id = "swshDiv1";
            document.getElementById("newestSets").append(swshDiv1);


            swshResult.reverse()
            for (let j = 0; j < swshResult.length; j++) {

                let logo = swshResult[j].logo;
                let number = swshResult[j].number;
                let release = swshResult[j].release;
                let symbol = swshResult[j].symbol;

                let aDiv1 = document.createElement('div');
                let setDiv = document.createElement('div');
                let setImage = document.createElement('div');
                let logoImg = document.createElement('img');
                let setContent = document.createElement('div');
                let setNameDiv = document.createElement('div');
                let setName = document.createElement('p');
                let setRelease = document.createElement('p');
                let symbolImg = document.createElement('img');

                logoImg.setAttribute('src', logo);
                logoImg.classList.add('setImg1');
                aDiv1.classList.add('card', 'swsh');
                aDiv1.setAttribute('name', "button");
                setImage.classList.add('card-image');
                setContent.classList.add('card-content');
                symbolImg.classList.add('symbolImg1');
                symbolImg.setAttribute('src', symbol);

                setName.innerHTML = number;
                setRelease.innerHTML = "Released: " + release;

                aDiv1.appendChild(setDiv);
                setDiv.appendChild(setImage);
                setImage.appendChild(logoImg);
                setDiv.appendChild(setContent);
                setContent.appendChild(setNameDiv);
                setNameDiv.appendChild(setName);
                setNameDiv.appendChild(setRelease);
                setNameDiv.appendChild(symbolImg);

                document.getElementById('swshDiv1').append(aDiv1);
            }

            // Assigning the correct ID to each card set        
            let swshID13 = ["swsh4", "swsh35", "swsh3", "swsh2", "swsh1", "swshp"]
            let elements13 = document.getElementsByClassName('swsh');

            swshID13.forEach(function (id, i) {
                elements13[i].setAttribute('id', id);
            });

        });

    }