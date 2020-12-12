
let queryURLTest = "https://api.pokemontcg.io/v1/sets/";
console.log(queryURLTest)
   
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


    //         newResult.reverse()
    //         for (let j = 0; j < newResult.length; j++) {
    //             // let logoUrl1 = newResult[j];
    //             let logo = newResult[j].logo;
    //             let number = newResult[j].number;
    //             let release = newResult[j].release;
    //             let symbol = newResult[j].symbol;
    

    //             let aDiv1 = document.createElement('a');
    //             let setDiv = document.createElement('div');
    //             let setImage = document.createElement('div');
    //             let logoImg = document.createElement('img');
    //             let setContent = document.createElement('div');
    //             let setNameDiv = document.createElement('div');
    //             let setName = document.createElement('p');
    //             let setRelease = document.createElement('p');
    //             let symbolImg = document.createElement('img');

                
    //             setDiv.classList.add("test");
    //             logoImg.setAttribute('src', logo);
    //             logoImg.classList.add('setImg');
    //             aDiv1.classList.add('card');
    //             aDiv1.setAttribute('href', "");
    //             setImage.classList.add('card-image');
    //             setContent.classList.add('card-content');
    //             symbolImg.classList.add('symbolImg');
    //             symbolImg.setAttribute('src', symbol);

               
    //             setName.innerHTML = number;
    //             setRelease.innerHTML = "Released: " + release;
            

    //             aDiv1.appendChild(setDiv);
    //             setDiv.appendChild(setImage);
    //             setImage.appendChild(logoImg);
    //             setDiv.appendChild(setContent);
    //             setContent.appendChild(setNameDiv);
    //             setNameDiv.appendChild(setName);
    //             setNameDiv.appendChild(setRelease);
    //             setNameDiv.appendChild(symbolImg);
               
               
    //             document.getElementById('buttonResults').append(aDiv1);

    
    //         }
    
    //     });

  
 
    axios
        .get(queryURLTest)
        .then(function (response) {
            let pokemon = response.data.sets
            let newResult = []
    
            
            // Loop through results, get data we want and push to new array
            for (let i = 0; i < pokemon.length; i ++) {
                
                let targetResult = {
                    logo: pokemon[i].logoUrl,
                    number: pokemon[i].name,
                    release: pokemon[i].releaseDate,
                    symbol: pokemon[i].symbolUrl,

                }
                newResult.push(targetResult); 
            }

                let finalResult = [ newResult[0], newResult[1], newResult[2], newResult[3], newResult[4], newResult[5] ]
            
        
                let setHead = document.createElement('h1');
                setHead.classList.add('setHead');
                setHead.innerHTML = "Base Set Series";
                document.getElementById("buttonResults").append(setHead)
            
                let cardDiv = document.createElement('div');
                cardDiv.id = "cardDiv";
                document.getElementById("buttonResults").append(cardDiv);
            
                finalResult.reverse()    
            for (let j = 0; j < finalResult.length; j++) {
                // let logoUrl1 = newResult[j];
                let logo = finalResult[j].logo;
                let number = finalResult[j].number;
                let release = finalResult[j].release;
                let symbol = finalResult[j].symbol;
    

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
               
                
                document.getElementById('cardDiv').append(aDiv1);

            }
            
        });



