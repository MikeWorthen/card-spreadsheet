let queryURLTest = "https://api.pokemontcg.io/v1/sets?pageSize=300";
console.log(queryURLTest)
   
    axios
        .get(queryURLTest)
        .then(function (response) {
            let pokemon = response.data.sets
            let newResult = []
            

            // console.log(targetResult)
            
            // Loop through results, get data we want and push to new array
            for (let i = 0; i < pokemon.length; i++) {
                
                let targetResult = [
                    pokemon[i].logoUrl,
                ]

                newResult.push(targetResult); 
            }
    
            newResult.reverse()
            for (let j = 0; j < newResult.length; j++) {
                let logoUrl1 = newResult[j];
    
                let aDiv1 = document.createElement('a');
                let logoImg = document.createElement('img');
                
                // let aDiv2 = document.createElement('a');
                // let setDiv2 = document.createElement('img');


                // add the image url to the href of the image field 
                logoImg.setAttribute('src', logoUrl1);
                // setDiv2.setAttribute('src', logoUrl1);
                aDiv1.setAttribute('id','base1')
                aDiv1.setAttribute('href', '/guestSearch')
                // aDiv2.setAttribute('id','base2')
                logoImg.classList.add('setImg');
                // setDiv2.classList.add('setImg');
                

                aDiv1.appendChild(logoImg)
                // aDiv2.appendChild(setDiv2)

    
                document.getElementById('mySidenav').append(aDiv1);
                // document.getElementById('buttonResults').append(aDiv2);
    
            }
    
        });

/* Open the sidenav */
/* Set the width of the side navigation to 250px */
// function openNav() {
//   document.getElementById("mySidenav").style.width = "600px";
// }

// /* Set the width of the side navigation to 0 */
// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0";
// }

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}