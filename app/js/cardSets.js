window.addEventListener('load', cardSets)


function cardSets(e) {

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


        let swshResult = [newResult[109], newResult[110], newResult[111], newResult[112], newResult[113], newResult[114]]
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
        let sideNavImg = document.createElement('div');
        sideNavImg.id = "sideNavImg";
        document.getElementById("mySidenav").append(sideNavImg);


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
            document.getElementById('sideNavImg').append(sideDiv1);

        }

    // Assigning the correct ID to each card set        
        let swshID = ["swsh4", "swsh35", "swsh3", "swsh2", "swsh1", "swshp"]
        let elements = document.getElementsByClassName('swsh');

        swshID.forEach(function(id, i) {
        elements[i].setAttribute('id', id);
        });

    // Assigning the correct ID to each card set        
        let swshIDSide = ["swsh4", "swsh35", "swsh3", "swsh2", "swsh1", "swshp"]
        let sideElements = document.getElementsByClassName('swshSide');

        swshIDSide.forEach(function(id, i) {
        sideElements[i].setAttribute('id', id);
        });


    // Sun and Moon Series

        // Adds a Header
        let smHead = document.createElement('h2');
        smHead.classList.add('cardHead');
        smHead.innerHTML = "Sun & Moon Series";
        document.getElementById("buttonResults").append(smHead)

        // Adds a Div for the Cards to go
        let smDiv = document.createElement('div');
        smDiv.id = "smDiv";
        document.getElementById("buttonResults").append(smDiv);


        smResult.reverse()
        for (let j = 0; j < smResult.length; j++) {

            let logo = smResult[j].logo;
            let number = smResult[j].number;
            let release = smResult[j].release;
            let symbol = smResult[j].symbol;


            let aDiv1 = document.createElement('a');
            let setDiv = document.createElement('div');
            let setImage = document.createElement('div');
            let logoImg = document.createElement('img');
            let setContent = document.createElement('div');
            let setNameDiv = document.createElement('div');
            let setName = document.createElement('p');
            let setRelease = document.createElement('p');
            let symbolImg = document.createElement('img');


            logoImg.setAttribute('src', logo);
            logoImg.classList.add('setImg');
            aDiv1.classList.add('card', 'sunMoon');
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


            document.getElementById('smDiv').append(aDiv1);

        }

    // Assigning the correct ID to each card set        
        let smID = ["sm12", "sm115", "sma", "sm11", "sm10", "det1", "sm9", "sm8", "sm75", "sm7", "sm6", "sm5", "sm4", "sm35", "sm3", "sm2", "sm1", "smp"]
        let elements1 = document.getElementsByClassName('sunMoon');

        smID.forEach(function(id, i) {
        elements1[i].setAttribute('id', id);
        });


    // XY Series

        // Adds a Header
        let xyHead = document.createElement('h2');
        xyHead.classList.add('cardHead');
        xyHead.innerHTML = "XY Series";
        document.getElementById("buttonResults").append(xyHead)

        // Adds a Div for the Cards to go
        let xyDiv = document.createElement('div');
        xyDiv.id = "xyDiv";
        document.getElementById("buttonResults").append(xyDiv);


        xyResult.reverse()
        for (let j = 0; j < xyResult.length; j++) {

            let logo = xyResult[j].logo;
            let number = xyResult[j].number;
            let release = xyResult[j].release;
            let symbol = xyResult[j].symbol;


            let aDiv1 = document.createElement('a');
            let setDiv = document.createElement('div');
            let setImage = document.createElement('div');
            let logoImg = document.createElement('img');
            let setContent = document.createElement('div');
            let setNameDiv = document.createElement('div');
            let setName = document.createElement('p');
            let setRelease = document.createElement('p');
            let symbolImg = document.createElement('img');


            logoImg.setAttribute('src', logo);
            logoImg.classList.add('setImg');
            aDiv1.classList.add('card', 'xy');
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


            document.getElementById('xyDiv').append(aDiv1);

        }

    // Assigning the correct ID to each card set        
        let xyID = ["xy12", "xy11", "g1", "xy10", "xy9", "xy8", "xy7", "xy6", "dc1", "xy5", "xy4", "xy3", "xy2", "xy1", "xy0", "xyp"]
        let elements2 = document.getElementsByClassName('xy');

        xyID.forEach(function(id, i) {
        elements2[i].setAttribute('id', id);
        });


    // Black and White Series

        // Adds a Header
        let bwHead = document.createElement('h2');
        bwHead.classList.add('cardHead');
        bwHead.innerHTML = "Black & White Series";
        document.getElementById("buttonResults").append(bwHead)

        // Adds a Div for the Cards to go
        let bwDiv = document.createElement('div');
        bwDiv.id = "bwDiv";
        document.getElementById("buttonResults").append(bwDiv);


        bwResult.reverse()
        for (let j = 0; j < bwResult.length; j++) {

            let logo = bwResult[j].logo;
            let number = bwResult[j].number;
            let release = bwResult[j].release;
            let symbol = bwResult[j].symbol;


            let aDiv1 = document.createElement('a');
            let setDiv = document.createElement('div');
            let setImage = document.createElement('div');
            let logoImg = document.createElement('img');
            let setContent = document.createElement('div');
            let setNameDiv = document.createElement('div');
            let setName = document.createElement('p');
            let setRelease = document.createElement('p');
            let symbolImg = document.createElement('img');


            logoImg.setAttribute('src', logo);
            logoImg.classList.add('setImg');
            aDiv1.classList.add('card', 'bw');
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


            document.getElementById('bwDiv').append(aDiv1);

        }

    // Assigning the correct ID to each card set        
        let bwID = ["bw11", "bw10", "bw9", "bw8", "bw7", "dv1", "bw6", "bw5", "bw4", "bw3", "bw2", "bw1", "bwp"]
        let elements3 = document.getElementsByClassName('bw');

        bwID.forEach(function(id, i) {
        elements3[i].setAttribute('id', id);
        });


    // Call of Legends Series

        // Adds a Header
        let callHead = document.createElement('h2');
        callHead.classList.add('cardHead');
        callHead.innerHTML = "Call of Legends Series";
        document.getElementById("buttonResults").append(callHead)

        // Adds a Div for the Cards to go
        let callDiv = document.createElement('div');
        callDiv.id = "callDiv";
        document.getElementById("buttonResults").append(callDiv);


        callResult.reverse()
        for (let j = 0; j < callResult.length; j++) {

            let logo = callResult[j].logo;
            let number = callResult[j].number;
            let release = callResult[j].release;
            let symbol = callResult[j].symbol;


            let aDiv1 = document.createElement('a');
            let setDiv = document.createElement('div');
            let setImage = document.createElement('div');
            let logoImg = document.createElement('img');
            let setContent = document.createElement('div');
            let setNameDiv = document.createElement('div');
            let setName = document.createElement('p');
            let setRelease = document.createElement('p');
            let symbolImg = document.createElement('img');


            logoImg.setAttribute('src', logo);
            logoImg.classList.add('setImg');
            aDiv1.classList.add('card', 'callLegends');
            aDiv1.id = "col1";
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


            document.getElementById('callDiv').append(aDiv1);

        }


    // HeartGold SoulSilver Series

        // Adds a Header
        let hgssHead = document.createElement('h2');
        hgssHead.classList.add('cardHead');
        hgssHead.innerHTML = "HeartGold SoulSilver Series";
        document.getElementById("buttonResults").append(hgssHead)

        // Adds a Div for the Cards to go
        let hgssDiv = document.createElement('div');
        hgssDiv.id = "hgssDiv";
        document.getElementById("buttonResults").append(hgssDiv);


        hgssResult.reverse()
        for (let j = 0; j < hgssResult.length; j++) {

            let logo = hgssResult[j].logo;
            let number = hgssResult[j].number;
            let release = hgssResult[j].release;
            let symbol = hgssResult[j].symbol;


            let aDiv1 = document.createElement('a');
            let setDiv = document.createElement('div');
            let setImage = document.createElement('div');
            let logoImg = document.createElement('img');
            let setContent = document.createElement('div');
            let setNameDiv = document.createElement('div');
            let setName = document.createElement('p');
            let setRelease = document.createElement('p');
            let symbolImg = document.createElement('img');


            logoImg.setAttribute('src', logo);
            logoImg.classList.add('setImg');
            aDiv1.classList.add('card', 'hgss');
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


            document.getElementById('hgssDiv').append(aDiv1);

        }

        // Assigning the correct ID to each card set        
            let hgssID = ["hgss4", "hgss3", "hgss2", "hsp", "hgss1"]
            let elements4 = document.getElementsByClassName('hgss');
    
            hgssID.forEach(function(id, i) {
            elements4[i].setAttribute('id', id);
            });


    // Platinum Series

        // Adds a Header
        let platHead = document.createElement('h2');
        platHead.classList.add('cardHead');
        platHead.innerHTML = "Platinum Series";
        document.getElementById("buttonResults").append(platHead)

        // Adds a Div for the Cards to go
        let platDiv = document.createElement('div');
        platDiv.id = "platDiv";
        document.getElementById("buttonResults").append(platDiv);


        platResult.reverse()
        for (let j = 0; j < platResult.length; j++) {

            let logo = platResult[j].logo;
            let number = platResult[j].number;
            let release = platResult[j].release;
            let symbol = platResult[j].symbol;


            let aDiv1 = document.createElement('a');
            let setDiv = document.createElement('div');
            let setImage = document.createElement('div');
            let logoImg = document.createElement('img');
            let setContent = document.createElement('div');
            let setNameDiv = document.createElement('div');
            let setName = document.createElement('p');
            let setRelease = document.createElement('p');
            let symbolImg = document.createElement('img');


            logoImg.setAttribute('src', logo);
            logoImg.classList.add('setImg');
            aDiv1.classList.add('card', 'plat');
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


            document.getElementById('platDiv').append(aDiv1);

        }

    // Assigning the correct ID to each card set        
        let platID = ["ru1", "pl4", "pl3", "pl2", "pl1"]
        let elements5 = document.getElementsByClassName('plat');

        platID.forEach(function(id, i) {
        elements5[i].setAttribute('id', id);
        });

        
    // Pop Series

        // Adds a Header
        let popHead = document.createElement('h2');
        popHead.classList.add('cardHead');
        popHead.innerHTML = "POP Series";
        document.getElementById("buttonResults").append(popHead)

        // Adds a Div for the Cards to go
        let popDiv = document.createElement('div');
        popDiv.id = "popDiv";
        document.getElementById("buttonResults").append(popDiv);


        popResult.reverse()
        for (let j = 0; j < popResult.length; j++) {

            let logo = popResult[j].logo;
            let number = popResult[j].number;
            let release = popResult[j].release;
            let symbol = popResult[j].symbol;


            let aDiv1 = document.createElement('a');
            let setDiv = document.createElement('div');
            let setImage = document.createElement('div');
            let logoImg = document.createElement('img');
            let setContent = document.createElement('div');
            let setNameDiv = document.createElement('div');
            let setName = document.createElement('p');
            let setRelease = document.createElement('p');
            let symbolImg = document.createElement('img');


            logoImg.setAttribute('src', logo);
            logoImg.classList.add('setImg');
            aDiv1.classList.add('card', 'pop');
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


            document.getElementById('popDiv').append(aDiv1);

        }

    // Assigning the correct ID to each card set        
        let popID = ["pop9", "pop8", "pop7", "pop6", "pop5", "pop4", "pop3", "pop2", "pop1"]
        let elements6 = document.getElementsByClassName('pop');

        popID.forEach(function(id, i) {
        elements6[i].setAttribute('id', id);
        });


    // Diamond and Pearl Series

        // Adds a Header
        let dpHead = document.createElement('h2');
        dpHead.classList.add('cardHead');
        dpHead.innerHTML = "Diamond & Pearl Series";
        document.getElementById("buttonResults").append(dpHead)

        // Adds a Div for the Cards to go
        let dpDiv = document.createElement('div');
        dpDiv.id = "dpDiv";
        document.getElementById("buttonResults").append(dpDiv);


        dpResult.reverse()
        for (let j = 0; j < dpResult.length; j++) {

            let logo = dpResult[j].logo;
            let number = dpResult[j].number;
            let release = dpResult[j].release;
            let symbol = dpResult[j].symbol;


            let aDiv1 = document.createElement('a');
            let setDiv = document.createElement('div');
            let setImage = document.createElement('div');
            let logoImg = document.createElement('img');
            let setContent = document.createElement('div');
            let setNameDiv = document.createElement('div');
            let setName = document.createElement('p');
            let setRelease = document.createElement('p');
            let symbolImg = document.createElement('img');


            logoImg.setAttribute('src', logo);
            logoImg.classList.add('setImg');
            aDiv1.classList.add('card', 'dp');
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


            document.getElementById('dpDiv').append(aDiv1);

        }

    // Assigning the correct ID to each card set        
        let dpID = ["dp7", "dp6", "dp5", "dp4", "dp3", "dp2", "dp1", "dpp"]
        let elements7 = document.getElementsByClassName('dp');

        dpID.forEach(function(id, i) {
        elements7[i].setAttribute('id', id);
        });


    // Ruby and Sapphire Series

        // Adds a Header
        let rsHead = document.createElement('h2');
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


            logoImg.setAttribute('src', logo);
            logoImg.classList.add('setImg');
            aDiv1.classList.add('card', 'rs');
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

    // Assigning the correct ID to each card set        
        let rsID = ["ex16", "ex15", "ex14", "ex13", "ex12", "ex11", "ex10", "ex9", "ex8", "ex7", "ex6", "ex5", "ex4", "np", "ex3", "ex2", "ex1"]
        let elements8 = document.getElementsByClassName('rs');

        rsID.forEach(function(id, i) {
        elements8[i].setAttribute('id', id);
        });


    // e-Card Set Series

        // Adds a Header
        let eCardHead = document.createElement('h2');
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


            logoImg.setAttribute('src', logo);
            logoImg.classList.add('setImg');
            aDiv1.classList.add('card', 'eCard');
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

    // Assigning the correct ID to each card set        
        let eCardID = ["ecard3", "ecard2", "ecard1"]
        let elements9 = document.getElementsByClassName('eCard');

        eCardID.forEach(function(id, i) {
        elements9[i].setAttribute('id', id);
        });


    // Legendary Set Series

        // Adds a Header
        let legendHead = document.createElement('h2');
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


            logoImg.setAttribute('src', logo);
            logoImg.classList.add('setImg');
            aDiv1.classList.add('card', 'legend');
            aDiv1.id = 'base6';
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
        let neoHead = document.createElement('h2');
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


            logoImg.setAttribute('src', logo);
            logoImg.classList.add('setImg');
            aDiv1.classList.add('card', 'neo');
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

    // Assigning the correct ID to each card set        
        let neoID = ["neo4", "neo3", "si1", "neo2", "neo1"]
        let elements10 = document.getElementsByClassName('neo');

        neoID.forEach(function(id, i) {
        elements10[i].setAttribute('id', id);
        });


    // Gym Set Series

        // Adds a Header
        let gymHead = document.createElement('h2');
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


            logoImg.setAttribute('src', logo);
            logoImg.classList.add('setImg');
            aDiv1.classList.add('card', 'gym');
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

    // Assigning the correct ID to each card set        
        let gymID = ["gym2", "gym1"]
        let elements11 = document.getElementsByClassName('gym');

        gymID.forEach(function(id, i) {
        elements11[i].setAttribute('id', id);
        });


    // Base Set Series

        // Adds a Header
        let baseHead = document.createElement('h2');
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


            logoImg.setAttribute('src', logo);
            logoImg.classList.add('setImg');
            aDiv1.classList.add('card', 'base');
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

        // Assigning the correct ID to each card set        
            let baseID = ["base5", "base4", "base3", "basep", "base2", "base1"]
            let elements12 = document.getElementsByClassName('base');
    
            baseID.forEach(function(id, i) {
            elements12[i].setAttribute('id', id);
            });
    });

}

