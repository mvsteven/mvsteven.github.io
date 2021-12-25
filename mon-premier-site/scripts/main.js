// Centre d'apprentissage JS complet de Modzilla : https://developer.mozilla.org/fr/docs/Learn/JavaScript 

// OUtils de dévéloppement présents sur les navigateurs : https://developer.mozilla.org/fr/docs/Learn/Common_questions/What_are_browser_developer_tools 

// Guide d'utilisation des ";" sur JS : http://news.codecademy.com/your-guide-to-semicolons-in-javascript/ 

/*

--------------------------------------------------------------------
Mon code d'introduction au JS de MDN 
let space_name = " ";

let name;
name = space_name + "Van";

// let est la fonction permettant d'initialiser des variables en JS
let myHeading; // myHeading est ma variable
myHeading = document.querySelector("h1");
myHeading.textContent = "Hello, World !" + name;
--------------------------------------------------------------------

*/

/*
    Article sur les règles de nommage des variables en JS : https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Grammar_and_types#variables 
    Autre lien : https://mothereff.in/js-variables 
*/

// Lien pour les types de données sur JS : https://developer.mozilla.org/fr/docs/Web/JavaScript/Data_structures#les_valeurs_primitives 

/* 
Les opérateurs basiques en JS :
    = est l'opérateur d'affectation ou d'assignation
    + opérateur d'addition ou de concaténation de chaine 
    - Opérateur de soustraction 
    * opérateur de multiplication 
    / opérateur de division 
    === Opérateur d'égalité 
    ! ou !== opérateur de négation ou de "N'égale pas"
*/ 

// Lien pour les opérateurs JS : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators 


// En dessous, code pour changer les images d'acceuil 
let myImage = document.querySelector('img');

myImage.addEventListener("click", function() {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/vansteven.png") {
        myImage.setAttribute("src", "images/M.png");
    }
    else {
        myImage.setAttribute("src", "images/vansteven.png");
    }
});

// En dessous, Code pour message d'acceuil en h1 personnalisé 
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
    let myName = prompt("Veuillez saisir votre nom s'il vous plait !"); // la fonction prompt() est similaire à input dans python. Sauf que c'est une fenetre contextuelle qui s'affiche pour que l'user rentre des infos. 
    localStorage.setItem("nom", myName);
    myHeading.textContent = "Bonjour, " + myName;
}

if (!localStorage.getItem('nom')) {
    setUserName();
} 
    else {
        let storedName = localStorage.getItem('nom');
        myHeading.textContent = "Bonjour, " + storedName;
    }

myButton.addEventListener('click', function() {
    setUserName();
})