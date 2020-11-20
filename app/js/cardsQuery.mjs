
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


            let tr = document.createElement('tr');
            let tdNumber = document.createElement('td');
            let tdName = document.createElement('td');
            let tdRarity = document.createElement('td');
            let tdImage = document.createElement('td');
            let imageLink = document.createElement('a');
        
            // add the image url to the href of the image field 
            imageLink.setAttribute('href', imageUrl);

            tr.classList.add('tableRow');
            tdNumber.classList.add('tableData');
            tdName.classList.add('tableData');
            tdRarity.classList.add('tableData');
            tdImage.classList.add('tableData');
            imageLink.classList.add('imageLink');

            tdNumber.innerHTML = number;
            tdName.innerText = name;
            tdRarity.innerText = rarity;
            imageLink.innerText = placeHolder;

            tr.appendChild(tdNumber);
            tr.appendChild(tdName);
            tr.appendChild(tdRarity);
            tr.appendChild(tdImage);
            tdImage.appendChild(imageLink);



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