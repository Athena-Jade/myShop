//  1) créer une variable pour contenir toutes les images du slider
let img_slider = document.getElementsByClassName("img_slider")

//console.log(img_slider);

// 2) créer une etape pour savoir quelle image sera affichée la première. l'image de base est image 0 (la première image)
let etape = 0;


// 3) nbre images dans le slider
let nbr_img = img_slider.length;



// 5) récuperer le bouton precedent
let precedent = document.querySelector('.precedent');

// 6) récuperer le bouton suivant
let suivant = document.querySelector('.suivant');



// 4)  créer une fonction pour enlever la classe active sur toutes les images
function enleverActiveImages(){

    //  A)  i est égal à 0, alors i est inférieur au nombre d'image alors incrémentation
    for(let i = 0; i<nbr_img; i++){
       
        //  B)  enlever les images de la classe active
        img_slider[i].classList.remove('active');
    }
}



// 7)  AJOUT D'UN GESTIONNAIRE EVENEMENT  
suivant.addEventListener('click', function(){
    etape++;  // quand l'user clique sur suivant, l'image suivante s'affiche

    //  C) si l'étape est superieure ou égale au nombre d'images alors remettre l'étape à 0 (après la 3eme image, il n'y a plus d'image donc retour à l'image 0)
    if(etape>=nbr_img){
        etape = 0;
    }
    enleverActiveImages()  // A) enlever  la classe active sur toutes les images 


    // B) SAUF SUR L'IMAGE EN COURS QUI EST L'ETAPE COURANTE.  afficher l'image suivante qui a une classe active uniquement
    img_slider[etape].classList.add("active")
})




// 10) quand l'user clique sur précedent, on décrémente
precedent.addEventListener('click', function(){
    etape--;
    
    //  C) si l'étape est inférieure à 0 alors l'étape est égale à nbre image -1 (moins 1) afin de ne pas afficher une image qui n''existe pas
    if(etape<0){
        etape = nbr_img -1;
    }

    enleverActiveImages()  // A) enlever  la classe active sur toutes les images
    
    // B)  SAUF SUR L'IMAGE EN COURS QUI EST L'ETAPE COURANTE 
    img_slider[etape].classList.add('active')  //  afficher l'image précédente qui a une classe active uniquement
})






// 11) faire  défiler le slider toutes les 3 secondes
setInterval(function() {
    etape++;
  
    if(etape >= nbr_img) {
        etape = 0;
    }
    enleverActiveImages();
    img_slider[etape].classList.add('active');
}, 3000)