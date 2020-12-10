let queryURLTest = "https://api.pokemontcg.io/v1/sets?pageSize=300";
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

                }
                newResult.push(targetResult); 
            }


            newResult.reverse()
            for (let j = 0; j < newResult.length; j++) {
                // let logoUrl1 = newResult[j];
                let logo = newResult[j].logo;
                let number = newResult[j].number;
                let release = newResult[j].release;
    

                let aDiv1 = document.createElement('a');
                let setDiv = document.createElement('div');
                let setImage = document.createElement('div');
                let logoImg = document.createElement('img');
                let setContent = document.createElement('div');
                let setNameDiv = document.createElement('div');
                let setName = document.createElement('p');
                let setRelease = document.createElement('p');

                
                setDiv.classList.add("test");
                logoImg.setAttribute('src', logo);
                logoImg.classList.add('setImg');
                aDiv1.classList.add('card');
                aDiv1.setAttribute('href', "");
                setImage.classList.add('card-image');
                setContent.classList.add('card-content');

               
                setName.innerHTML = number;
                setRelease.innerHTML = "Released: " + release;
            

                aDiv1.appendChild(setDiv);
                setDiv.appendChild(setImage);
                setImage.appendChild(logoImg);
                setDiv.appendChild(setContent);
                setContent.appendChild(setNameDiv);
                setNameDiv.appendChild(setName);
                setNameDiv.appendChild(setRelease);
               
               
                document.getElementById('buttonResults').append(aDiv1);

    
            }
    
        });