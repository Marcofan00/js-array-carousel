// Dati tre array contenenti: - una lista ordinata di 5 immagini, - una lista ordinata dei relativi 5 luoghi e - una lista di 5 news
// Al click dell’utente sulle frecce verso l’alto o verso il basso, l’immagine attiva diventa visibile.
// Allo stesso tempo nelle miniature l’immagine attiva dovrà apparire in evidenza rispetto alle altre.

const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

const itemsCont = document.querySelector(".items");
const thumbsCount = document.querySelector(".thumbs");

// bottoni
let btnNext = document.querySelector(".btn-next");
let btnPrev = document.querySelector(".btn-prev");


let item = "";
let thumbs = "";

// ciclo che crea i div e ci inserisce le img
for (let i = 0; i < items.length; i++ ){
    
    item += `
    <div class="item">
        <img src="${items[i]}" alt="${items[i]}">
        <div class="text">
            <h3>${title[i]}</h3>
            <p> ${text[i]}</p>
        </div>
    </div>`;

    thumbs += `
    <div class="thumb">
        <img src="${items[i]}" alt="${items[i]}">
    </div>`;    
};


itemsCont.innerHTML = item;
document.getElementsByClassName("item")[0].classList.add("active");

thumbsCount.innerHTML = thumbs;
document.getElementsByClassName("thumb")[0].classList.add("active");

// al click rimuoviamo la classe active attiva e incrementiamo l'activeposition di 1 assegnando di fatto l'active all'elemento successivo
let activePosition = 0;

btnNext.addEventListener("click",
    
    function(){
        ++activePosition; 
        document.querySelector(".item.active").classList.remove("active");
        document.getElementsByClassName("item")[activePosition].classList.add("active");

        document.querySelector(".thumb.active").classList.remove("active");
        document.getElementsByClassName("thumb")[activePosition].classList.add("active");
    }
);

// al click rimuoviamo la classe active attiva e decrementiamo l'activeposition di 1 assegnando di fatto l'active all'elemento precendente

btnPrev.addEventListener("click",
    
    function(){
        --activePosition; 
        document.querySelector(".item.active").classList.remove("active");
        document.getElementsByClassName("item")[activePosition].classList.add("active");

        document.querySelector(".thumb.active").classList.remove("active");
        document.getElementsByClassName("thumb")[activePosition].classList.add("active");
    }
);