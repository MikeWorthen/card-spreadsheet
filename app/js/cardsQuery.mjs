
let queryURL = "https://api.pokemontcg.io/v1/cards?pageSize=300&setCode=base1"

axios
    .get(queryURL)
    .then(function (response) {
        let pokemon = response.data.cards
        let newResult = []

        // Loop through results, get data we want and push to new array
        for (let i = 0; i < pokemon.length; i++) {

            let results = [pokemon[i]]


            let targetResult = {
                number: parseFloat(pokemon[i].number),
                name: pokemon[i].name,
                rarity: pokemon[i].rarity,
                imageUrl: pokemon[i].imageUrlHiRes
            }

            newResult.push(targetResult);

        }

        // console.log(newResult.sort((a, b) => (a.number) > (b.number) ? 1 : -1));
        
        newResult.sort((a, b) => (a.number) > (b.number) ? 1 : -1);
        for (let j = 0; j < newResult.length; j++) {

            let number = newResult[j].number;
            let name = newResult[j].name;
            let rarity = newResult[j].rarity;
            let imageUrl = newResult[j].imageUrl;
            let placeHolder = "Img";
            let closeX = "&times;";

            // create elements for HTML
            let tr = document.createElement('tr');
            let tdNumber = document.createElement('td');
            let tdName = document.createElement('td');
            let tdRarity = document.createElement('td');
            let tdImage = document.createElement('td');
            let imageLink = document.createElement('a');

            // Modal Elements
            let modalDiv = document.createElement('BUTTON');
            let modal = document.createElement('div');
            let modalDialog = document.createElement('div');
            let modalContent = document.createElement('div');
            let modalHeader = document.createElement('div');
            let modalClose = document.createElement('BUTTON');
            let modalBody = document.createElement('div');
        
            
            // add the image url to the href of the image field 
            imageLink.classList.add('imageLink');
            imageLink.setAttribute('href', imageUrl);
            imageLink.dataset.toggle = 'modal';
            imageLink.dataset.target = "#myModal";
            // modalDiv.setAttribute('href', imageUrl);

            // setting attributes to modal elements
            modalDiv.dataset.target = "#myModal";
            modalDiv.dataset.toggle = "modal";
            modal.setAttribute('role', "dialog");
            modalClose.setAttribute('type', "button")
            modalClose.setAttribute('data-dismiss', "modal");
            
        
            // add class to created elements
            tr.classList.add('tableRow');
            tdNumber.classList.add('tableData');
            tdName.classList.add('tableData');
            tdRarity.classList.add('tableData');
            tdImage.classList.add('tableData');


            // Adding classes to the Modal elements
            modalDiv.classList.add('modalDiv');
            modalContent.classList.add('modal-content');
            modal.id = "myModal";
            modal.classList.add('modal', 'fade');
            modalDialog.classList.add('modal-dialog', 'modal-sm');
            modalHeader.classList.add('modal-header');           
            modalClose.classList.add('close');
            modalBody.classList.add('modal-body');


            // populate created elements with api data
            tdNumber.innerHTML = number;
            tdName.innerText = name;
            tdRarity.innerText = rarity;
            imageLink.innerText = placeHolder;
            // modalDiv.innerText = placeHolder;
            modalClose.innerHTML = closeX;

           
            // append elements where needed            
            tr.appendChild(tdNumber);
            tr.appendChild(tdName);
            tr.appendChild(tdRarity);
            tr.appendChild(tdImage);
            tdImage.appendChild(imageLink);
            // tdImage.appendChild(modalDiv);
            tdImage.appendChild(modal);
            modal.appendChild(modalDialog);
            modalDialog.appendChild(modalContent);
            modalContent.appendChild(modalHeader);
            modalHeader.appendChild(modalClose);
            modalContent.appendChild(modalBody);
            

            document.getElementById('resultsBody').append(tr);

        }

    });



    //Header scrolling functionality 
; (function ($) {
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