window.addEventListener('load', cardSets)


function cardSets(e) {

    let queryURLTest = "https://api.pokemontcg.io/v1/sets/";
    console.log(queryURLTest)

    axios
        .get(queryURLTest)
        .then(function (response) {
            let pokemon = response.data.sets
            console.log(pokemon);
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


            let swshResult = [newResult[113], newResult[114], newResult[115], newResult[116], newResult[117], newResult[118], newResult[119], newResult[120]]
            let smResult = [newResult[91], newResult[92], newResult[93], newResult[94], newResult[95], newResult[96], newResult[97], newResult[98], newResult[99], newResult[100], newResult[101], newResult[102], newResult[103], newResult[104], newResult[105], newResult[106], newResult[107], newResult[108]]
            let xyResult = [newResult[74], newResult[76], newResult[77], newResult[78], newResult[79], newResult[80], newResult[81], newResult[82], newResult[83], newResult[84], newResult[85], newResult[86], newResult[87], newResult[88], newResult[89], newResult[90]]
            let bwResult = [newResult[62], newResult[63], newResult[64], newResult[65], newResult[66], newResult[67], newResult[68], newResult[69], newResult[70], newResult[71], newResult[72], newResult[73], newResult[75]]
            let callResult = [newResult[61]]
            let hgssResult = [newResult[56], newResult[57], newResult[58], newResult[59], newResult[60]]
            let platResult = [newResult[50], newResult[52], newResult[53], newResult[54], newResult[55]]
            let popResult = [newResult[23], newResult[28], newResult[32], newResult[34], newResult[38], newResult[42], newResult[45], newResult[48], newResult[51]]
            let dpResult = [newResult[39], newResult[40], newResult[41], newResult[43], newResult[44], newResult[46], newResult[47], newResult[49]]
            let rsResult = [newResult[17], newResult[18], newResult[19], newResult[20], newResult[21], newResult[22], newResult[24], newResult[25], newResult[26], newResult[27], newResult[29], newResult[30], newResult[31], newResult[33], newResult[35], newResult[36], newResult[37]]
            let eCardResult = [newResult[14], newResult[15], newResult[16],]
            let legendResult = [newResult[13]]
            let neoResult = [newResult[8], newResult[9], newResult[10], newResult[11], newResult[12]]
            let gymResult = [newResult[6], newResult[7]]
            let baseResult = [newResult[0], newResult[1], newResult[2], newResult[3], newResult[4], newResult[5]]


    // Sword and Shield Series

            // Adds a Header
            let swshHead = document.createElement('h2');
            swshHead.classList.add('cardHead');
            swshHead.innerHTML = "Sword & Shield Series";
            document.getElementById("buttonResults").append(swshHead)

            // Adds a Div for the Cards to go
            let swshDiv = document.createElement('div');
            swshDiv.id = "swshDiv";
            document.getElementById("buttonResults").append(swshDiv);


            // Adds a Header for SideNav Cards
            let swshSideHead = document.createElement('h2');
            swshSideHead.classList.add('cardHead');
            swshSideHead.innerHTML = "Sword & Shield Series";
            document.getElementById("mySidenav").append(swshSideHead);

            // Adds a Div for the SideNav Cards to go 
            let swshSideDiv = document.createElement('div');
            swshSideDiv.id = "swshSideDiv";
            document.getElementById("mySidenav").append(swshSideDiv);


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

                let sideDiv1 = document.createElement('div');
                let setSideDiv = document.createElement('div');
                let setSideImage = document.createElement('div');
                let logoSideImg = document.createElement('img');
                let setSideContent = document.createElement('div');
                let setSideNameDiv = document.createElement('div');
                let setSideName = document.createElement('p');
                let setSideRelease = document.createElement('p');
                let symbolSideImg = document.createElement('img');

                logoImg.setAttribute('src', logo);
                logoImg.classList.add('setImg');
                aDiv1.classList.add('card', 'swsh');
                aDiv1.setAttribute('name', "button");
                setImage.classList.add('card-image');
                setContent.classList.add('card-content');
                symbolImg.classList.add('symbolImg');
                symbolImg.setAttribute('src', symbol);

                logoSideImg.setAttribute('src', logo);
                logoSideImg.classList.add('setSideImg');
                sideDiv1.classList.add('card', 'swshSide');
                sideDiv1.setAttribute('name', "button");
                setSideImage.classList.add('card-image');
                setSideContent.classList.add('card-content');
                symbolSideImg.classList.add('symbolSideImg');
                symbolSideImg.setAttribute('src', symbol);

                setName.innerHTML = number;
                setRelease.innerHTML = "Released: " + release;

                setSideName.innerHTML = number;
                setSideRelease.innerHTML = "Released: " + release;

                aDiv1.appendChild(setDiv);
                setDiv.appendChild(setImage);
                setImage.appendChild(logoImg);
                setDiv.appendChild(setContent);
                setContent.appendChild(setNameDiv);
                setNameDiv.appendChild(setName);
                setNameDiv.appendChild(setRelease);
                setNameDiv.appendChild(symbolImg);

                sideDiv1.appendChild(setSideDiv);
                setSideDiv.appendChild(setSideImage);
                setSideImage.appendChild(logoSideImg);
                setSideDiv.appendChild(setSideContent);
                setSideContent.appendChild(setSideNameDiv);
                setSideNameDiv.appendChild(setSideName);
                setSideNameDiv.appendChild(setSideRelease);
                setSideNameDiv.appendChild(symbolSideImg);

                document.getElementById('swshDiv').append(aDiv1);
                document.getElementById('swshSideDiv').append(sideDiv1);
            }

            // Assigning the correct ID to each card set        
            let swshID = ["swsh4", "swsh35", "swsh3", "swsh2", "swsh1", "swshp"]
            let elements = document.getElementsByClassName('swsh');

            swshID.forEach(function (id, i) {
                elements[i].setAttribute('id', id);
            });

            // Assigning the correct ID to each card set        
            let swshIDSide = ["swsh4", "swsh35", "swsh3", "swsh2", "swsh1", "swshp"]
            let sideElements = document.getElementsByClassName('swshSide');

            swshIDSide.forEach(function (id, i) {
                sideElements[i].setAttribute('id', id);
            });

        });

}

