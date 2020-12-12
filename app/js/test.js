
let queryURLTest = "https://api.pokemontcg.io/v1/sets/";
console.log(queryURLTest)

axios
    .get(queryURLTest)
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

        // let popResult = [newResult[23], newResult[28], newResult[32], newResult[34]]
        let rsResult = [newResult[17], newResult[18], newResult[19], newResult[20], newResult[21], newResult[22], newResult[24], newResult[25], newResult[26], newResult[27], newResult[29], newResult[30], newResult[31], newResult[33], newResult[35], newResult[36], newResult[37]]
        let eCardResult = [newResult[14], newResult[15], newResult[16],]
        let legendResult = [newResult[13]]
        let neoResult = [newResult[8], newResult[9], newResult[10], newResult[11], newResult[12]]
        let gymResult = [newResult[6], newResult[7]]
        let baseResult = [newResult[0], newResult[1], newResult[2], newResult[3], newResult[4], newResult[5]]


    // Ruby and Sapphire Series

        // Adds a Header
        let rsHead = document.createElement('h1');
        rsHead.classList.add('cardHead');
        rsHead.innerHTML = "EX Ruby & Sapphire Series";
        document.getElementById("buttonResults").append(rsHead)

        // Adds a Div for the Cards to go
        let rsDiv = document.createElement('div');
        rsDiv.id = "rsDiv";
        document.getElementById("buttonResults").append(rsDiv);


        rsResult.reverse()
        for (let j = 0; j < rsResult.length; j++) {

            let logo = rsResult[j].logo;
            let number = rsResult[j].number;
            let release = rsResult[j].release;
            let symbol = rsResult[j].symbol;


            let aDiv1 = document.createElement('a');
            let setDiv = document.createElement('div');
            let setImage = document.createElement('div');
            let logoImg = document.createElement('img');
            let setContent = document.createElement('div');
            let setNameDiv = document.createElement('div');
            let setName = document.createElement('p');
            let setRelease = document.createElement('p');
            let symbolImg = document.createElement('img');


            setDiv.classList.add("test");
            logoImg.setAttribute('src', logo);
            logoImg.classList.add('setImg');
            aDiv1.classList.add('card');
            aDiv1.setAttribute('href', "");
            setImage.classList.add('card-image');
            setContent.classList.add('card-content');
            symbolImg.classList.add('symbolImg');
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


            document.getElementById('rsDiv').append(aDiv1);

        }


    // e-Card Set Series

        // Adds a Header
        let eCardHead = document.createElement('h1');
        eCardHead.classList.add('cardHead');
        eCardHead.innerHTML = "e-Card Series";
        document.getElementById("buttonResults").append(eCardHead)

        // Adds a Div for the Cards to go
        let eCardDiv = document.createElement('div');
        eCardDiv.id = "eCardDiv";
        document.getElementById("buttonResults").append(eCardDiv);


        eCardResult.reverse()
        for (let j = 0; j < eCardResult.length; j++) {

            let logo = eCardResult[j].logo;
            let number = eCardResult[j].number;
            let release = eCardResult[j].release;
            let symbol = eCardResult[j].symbol;


            let aDiv1 = document.createElement('a');
            let setDiv = document.createElement('div');
            let setImage = document.createElement('div');
            let logoImg = document.createElement('img');
            let setContent = document.createElement('div');
            let setNameDiv = document.createElement('div');
            let setName = document.createElement('p');
            let setRelease = document.createElement('p');
            let symbolImg = document.createElement('img');


            setDiv.classList.add("test");
            logoImg.setAttribute('src', logo);
            logoImg.classList.add('setImg');
            aDiv1.classList.add('card');
            aDiv1.setAttribute('href', "");
            setImage.classList.add('card-image');
            setContent.classList.add('card-content');
            symbolImg.classList.add('symbolImg');
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


            document.getElementById('eCardDiv').append(aDiv1);

        }


    // Legendary Set Series

        // Adds a Header
        let legendHead = document.createElement('h1');
        legendHead.classList.add('cardHead');
        legendHead.innerHTML = "Legendary Collection Series";
        document.getElementById("buttonResults").append(legendHead)

        // Adds a Div for the Cards to go
        let legendDiv = document.createElement('div');
        legendDiv.id = "legendDiv";
        document.getElementById("buttonResults").append(legendDiv);


        legendResult.reverse()
        for (let j = 0; j < legendResult.length; j++) {

            let logo = legendResult[j].logo;
            let number = legendResult[j].number;
            let release = legendResult[j].release;
            let symbol = legendResult[j].symbol;


            let aDiv1 = document.createElement('a');
            let setDiv = document.createElement('div');
            let setImage = document.createElement('div');
            let logoImg = document.createElement('img');
            let setContent = document.createElement('div');
            let setNameDiv = document.createElement('div');
            let setName = document.createElement('p');
            let setRelease = document.createElement('p');
            let symbolImg = document.createElement('img');


            setDiv.classList.add("test");
            logoImg.setAttribute('src', logo);
            logoImg.classList.add('setImg');
            aDiv1.classList.add('card');
            aDiv1.setAttribute('href', "");
            setImage.classList.add('card-image');
            setContent.classList.add('card-content');
            symbolImg.classList.add('symbolImg');
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


            document.getElementById('legendDiv').append(aDiv1);

        }


    // Neo Set Series

        // Adds a Header
        let neoHead = document.createElement('h1');
        neoHead.classList.add('cardHead');
        neoHead.innerHTML = "Neo Set Series";
        document.getElementById("buttonResults").append(neoHead)

        // Adds a Div for the Cards to go
        let neoDiv = document.createElement('div');
        neoDiv.id = "neoDiv";
        document.getElementById("buttonResults").append(neoDiv);


        neoResult.reverse()
        for (let j = 0; j < neoResult.length; j++) {

            let logo = neoResult[j].logo;
            let number = neoResult[j].number;
            let release = neoResult[j].release;
            let symbol = neoResult[j].symbol;


            let aDiv1 = document.createElement('a');
            let setDiv = document.createElement('div');
            let setImage = document.createElement('div');
            let logoImg = document.createElement('img');
            let setContent = document.createElement('div');
            let setNameDiv = document.createElement('div');
            let setName = document.createElement('p');
            let setRelease = document.createElement('p');
            let symbolImg = document.createElement('img');


            setDiv.classList.add("test");
            logoImg.setAttribute('src', logo);
            logoImg.classList.add('setImg');
            aDiv1.classList.add('card');
            aDiv1.setAttribute('href', "");
            setImage.classList.add('card-image');
            setContent.classList.add('card-content');
            symbolImg.classList.add('symbolImg');
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


            document.getElementById('neoDiv').append(aDiv1);

        }


    // Gym Set Series

        // Adds a Header
        let gymHead = document.createElement('h1');
        gymHead.classList.add('cardHead');
        gymHead.innerHTML = "Gym Set Series";
        document.getElementById("buttonResults").append(gymHead)

        // Adds a Div for the Cards to go
        let gymDiv = document.createElement('div');
        gymDiv.id = "gymDiv";
        document.getElementById("buttonResults").append(gymDiv);


        gymResult.reverse()
        for (let j = 0; j < gymResult.length; j++) {

            let logo = gymResult[j].logo;
            let number = gymResult[j].number;
            let release = gymResult[j].release;
            let symbol = gymResult[j].symbol;


            let aDiv1 = document.createElement('a');
            let setDiv = document.createElement('div');
            let setImage = document.createElement('div');
            let logoImg = document.createElement('img');
            let setContent = document.createElement('div');
            let setNameDiv = document.createElement('div');
            let setName = document.createElement('p');
            let setRelease = document.createElement('p');
            let symbolImg = document.createElement('img');


            setDiv.classList.add("test");
            logoImg.setAttribute('src', logo);
            logoImg.classList.add('setImg');
            aDiv1.classList.add('card');
            aDiv1.setAttribute('href', "");
            setImage.classList.add('card-image');
            setContent.classList.add('card-content');
            symbolImg.classList.add('symbolImg');
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


            document.getElementById('gymDiv').append(aDiv1);

        }


    // Base Set Series

        // Adds a Header
        let baseHead = document.createElement('h1');
        baseHead.classList.add('cardHead');
        baseHead.innerHTML = "Base Set Series";
        document.getElementById("buttonResults").append(baseHead)

        // Adds a Div for the Cards to go
        let baseDiv = document.createElement('div');
        baseDiv.id = "baseDiv";
        document.getElementById("buttonResults").append(baseDiv);

        
        baseResult.reverse()
        for (let j = 0; j < baseResult.length; j++) {

            let logo = baseResult[j].logo;
            let number = baseResult[j].number;
            let release = baseResult[j].release;
            let symbol = baseResult[j].symbol;


            let aDiv1 = document.createElement('a');
            let setDiv = document.createElement('div');
            let setImage = document.createElement('div');
            let logoImg = document.createElement('img');
            let setContent = document.createElement('div');
            let setNameDiv = document.createElement('div');
            let setName = document.createElement('p');
            let setRelease = document.createElement('p');
            let symbolImg = document.createElement('img');


            setDiv.classList.add("test");
            logoImg.setAttribute('src', logo);
            logoImg.classList.add('setImg');
            aDiv1.classList.add('card');
            aDiv1.setAttribute('href', "");
            setImage.classList.add('card-image');
            setContent.classList.add('card-content');
            symbolImg.classList.add('symbolImg');
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


            document.getElementById('baseDiv').append(aDiv1);

        }
    });



