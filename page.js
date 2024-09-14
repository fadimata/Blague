let btn = document.querySelector('#Btn');
const phrase = document.querySelector('.h3');
const auteur = document.querySelector('.auteur');


const bouton = [
    {
     Text:  `Quel fruit doit toujours se sacrifier lors d’un compromis?  
     La poire… en deux 💧 .`, 
     auteur : ` _Presidente Fady` 
    },
    {
        Text: `Pourquoi le melon a-t-il sauté dans le lac?
        Pour devenir un melon d’eau 🌊 .`,
        auteur : ` _Presidente Fady` 
    },
    {
        Text: ` 😠 Pourquoi un professeur porte-t-il ses lunettes de soleil en classe?
        Parce que ses élèves sont trop brillants  😎 😅 !`,
        auteur : ` _Presidente Fady` 
    },
    {
        Text: `Quel est l’endroit préféré d’un géologue pour un rendez-vous amoureux?
        Un concert de roc 🎶.`,
        auteur : ` _Presidente Fady` 
    }
];

btn.addEventListener("click",() =>{

    const monBtn = Math.floor(Math.random () * bouton.length);

    phrase.textContent = bouton[monBtn].Text;

    auteur.textContent = bouton[monBtn].auteur;


   
});




