


let buttVal = document.grt('base1');

loadElist()

function loadElist(){
    buttVal.addEventListener("click", record);
}



function record(){
    console.log('ive been clicked')
}

let queryURL = "https://api.pokemontcg.io/v1/cards?pageSize=300&setCode="+buttVal;
console.log(queryURL)



// let buttVal = document.getElementById('btn1').value
// let queryURL = "https://api.pokemontcg.io/v1/cards?pageSize=300&setCode="+buttVal;
// console.log(queryURL)
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
                imageUrl: pokemon[i].imageUrlHiRes
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
        console.log(newResult)

    });

    // Header scrolling functionality 
     (function ($) {
        $.fn.fixMe = function () {
        return this.each(function () {
            var $this = $(this),
                $t_fixed;
            function init() {
                $this.wrap('<div class="container" />');
                $t_fixed = $this.clone();
                $t_fixed.find("tbody").remove().end().addClass("fixed").insertBefore($this);
                resizeFixed();
            }
            function resizeFixed() {
                $t_fixed.find("th").each(function (index) {
                    $(this).css("width", $this.find("th").eq(index).outerWidth() + "px");
                });
            }
            function scrollFixed() {
                var offset = $(this).scrollTop(),
                    tableOffsetTop = $this.offset().top,
                    tableOffsetBottom = tableOffsetTop + $this.height() - $this.find("thead").height();
                if (offset < tableOffsetTop || offset > tableOffsetBottom)
                    $t_fixed.hide();
                else if (offset >= tableOffsetTop && offset <= tableOffsetBottom && $t_fixed.is(":hidden"))
                    $t_fixed.show();
            }
            $(window).resize(resizeFixed);
            $(window).scroll(scrollFixed);
            init();
        });
    };
})(jQuery);

$(document).ready(function () {
    $("table").fixMe();
    $(".up").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });
});


