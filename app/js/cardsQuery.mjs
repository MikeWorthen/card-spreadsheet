//
window.addEventListener('load', initiate)

document.querySelectorAll('.btn').forEach(item => {
    item.addEventListener('click',  event  => {
        $('.initial').show();
        initiate();
        event.preventDefault()
        clear();
      
    })
})

  function clear(e) {
    document.getElementById("resultsBody").innerHTML = "";
  }


  let buttons = document.getElementsByName("button");
  let butID = []
  function initiate(){
      for (var i = 0; i < buttons.length; i += 1) {
          buttons[i].onclick = function(e) {
              e.preventDefault()
              butID[0] = this.id
              console.log(this.id)
              butID.push(this.id);
              query();
              console.log(butID)
          };
      
          
      }
    }



function query(e){
    
    let queryURL = "https://api.pokemontcg.io/v1/cards?pageSize=300&setCode="+butID[0];
    console.log(queryURL)
    axios
        .get(queryURL)
        .then(function (response) {
            let pokemon = response.data.cards
            let newResult = []
    
            // Loop through results, get data we want and push to new array
            for (let i = 0; i < pokemon.length; i++) {
    
                // let results = [pokemon[i]]
    
                // takes out any letters from a string - allowing for the follwoing parseFloat
               let noLetterResult = {
                   noLetter: pokemon[i].number.replace(/\D/g,'')
               }
               
               let targetResult = {
                    number: parseFloat(noLetterResult.noLetter),
                    letterNumber: pokemon[i].number,
                    name: pokemon[i].name,
                    rarity: pokemon[i].rarity,
                    imageUrl: pokemon[i].imageUrlHiRes,
               }
    
                newResult.push(targetResult);
    
            }
    
            // console.log(newResult.sort((a, b) => (a.number) > (b.number) ? 1 : -1));
            let modalCount = 0
            let boxCount = 0
    
            
            newResult.sort((a, b) => (a.number) > (b.number) ? 1 : -1);
            for (let j = 0; j < newResult.length; j++) {
    
                let number = newResult[j].number;
                let number2 = newResult[j].letterNumber;
                let name = newResult[j].name;
                let rarity = newResult[j].rarity;
                let imageUrl = newResult[j].imageUrl;
                let placeHolder = "View";
                let closeX = "&times;";
                modalCount++;
                boxCount++
                
    
    
                // Table Elements
                let checkbox = document.createElement('input');
                let boxDiv = document.createElement('div');
                let tr = document.createElement('tr');
                let tdNumber = document.createElement('td');
                let tdName = document.createElement('td');
                let tdRarity = document.createElement('td');
                let tdImage = document.createElement('td');
    
    
                // Modal Elements
                let modalDiv = document.createElement('BUTTON');
                let modal = document.createElement('div');
                let modalDialog = document.createElement('div');
                let modalContent = document.createElement('div');
                let modalClose = document.createElement('BUTTON');
                let modalBody = document.createElement('div');
                let modalImg = document.createElement('img');
    
            
                // add the image url to the href of the image field 
                modalDiv.setAttribute('href', imageUrl);
    
    
                // setting attributes to modal elements
                modalDiv.dataset.target = "#myModal"+ modalCount;
                modalDiv.dataset.toggle = "modal";
                modal.setAttribute('role', "dialog");
                modalClose.setAttribute('type', "button")
                modalClose.setAttribute('data-dismiss', "modal");
                modalImg.setAttribute('src', imageUrl);
                
    
                // setting attributes to checkbox elements
                checkbox.setAttribute('type', "checkbox");
                checkbox.setAttribute('name', "checked");
                checkbox.setAttribute('id', "check");
                checkbox.dataset.target = "#box"+ boxCount;
    
                
                // add class to created elements
                boxDiv.classList.add('boxDiv');
                checkbox.classList.add('tableBox');
                tr.classList.add('tableRow');
                tdNumber.classList.add('tableData');
                tdName.classList.add('tableData');
                tdRarity.classList.add('tableData');
                tdImage.classList.add('tableData');
                
    
                // Adding classes to the Modal elements
                modalDiv.classList.add('modalDiv', 'btn', 'btn-sm','btn-primary');
                modalContent.classList.add('modal-content');
                modal.id = "myModal"+ modalCount;
                modal.classList.add('modal', 'fade');
                modalImg.classList.add('modalImg');
                modalDialog.classList.add('modal-dialog', 'modal-md');          
                modalClose.classList.add('close');
    
    
                // populate created elements with api data
                tdNumber.innerHTML = number2;
                tdName.innerText = name;
                tdRarity.innerText = rarity;
                modalDiv.innerText = placeHolder;
                modalClose.innerHTML = closeX;
    
               
                // append elements where needed            
                tr.appendChild(boxDiv);
                boxDiv.appendChild(checkbox);
                // tr.appendChild(checkbox);
                tr.appendChild(tdNumber);
                tr.appendChild(tdName);
                tr.appendChild(tdRarity);
                tr.appendChild(tdImage);
                
                tdImage.appendChild(modalDiv);
                tdImage.appendChild(modal);
                modal.appendChild(modalDialog);
                modalDialog.appendChild(modalContent);
                modalContent.appendChild(modalClose);
                modalContent.appendChild(modalImg);
    
    
                
                document.getElementById('resultsBody').append(tr);
    
            }
    
        });
    
    }

    
    

