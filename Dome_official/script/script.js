// Les prix unitaires des articles
const article1Price = 750000;
const article2Price = 950000;
const article3Price = 950000;

// Les quantités initiales des articles
let article1Quantity = 0;
let article2Quantity = 0;
let article3Quantity = 0;

// Fonction pour mettre à jour le prix total d'un article
function updateArticlePrice(articleNumber) {
  let price = 0;
  let quantity = 0;
  
  switch(articleNumber) {
    case 1:
      price = article1Price;
      quantity = article1Quantity;
      break;
    case 2:
      price = article2Price;
      quantity = article2Quantity;
      break;
    case 3:
      price = article3Price;
      quantity = article3Quantity;
      break;
  }
  
  let totalPrice = price * quantity;
  document.getElementById(`article${articleNumber}-price`).innerHTML = `${totalPrice} CFA`;
  
  updateTotalPrice();
}

// Fonction pour mettre à jour le prix total de tous les articles
function updateTotalPrice() {
  let totalPrice = (article1Price * article1Quantity) + (article2Price * article2Quantity) + (article3Price * article3Quantity);
  document.getElementById("total-price").innerHTML = `= ${totalPrice} CFA`;
}

// Fonction pour ajouter un article
function addArticle(articleNumber) {
  switch(articleNumber) {
    case 1:
      article1Quantity++;
      break;
    case 2:
      article2Quantity++;
      break;
    case 3:
      article3Quantity++;
      break;
  }
  
  updateArticlePrice(articleNumber);
}

// Fonction pour diminuer un article
function removeArticle(articleNumber) {
  switch(articleNumber) {
    case 1:
      if(article1Quantity > 0) {
        article1Quantity--;
      }
      break;
    case 2:
      if(article2Quantity > 0) {
        article2Quantity--;
      }
      break;
    case 3:
      if(article3Quantity > 0) {
        article3Quantity--;
      }
      break;
  }
  
  updateArticlePrice(articleNumber);
}



// Fonction pour aimer un article

 function likeArticle(articleNumber) {

  switch(articleNumber){

    case 1 :

        function likeArticle(){
            var bouton = document.getElementById("love1"); // sélectionner l'élément du bouton par son ID
        
            if (bouton.style.color === "red") { // si la couleur actuelle est rouge
              bouton.style.color = "white"; // réinitialiser la couleur (elle sera par défaut)
            } else {
              bouton.style.color = "red"; // sinon, changer la couleur en rouge
            }
        }
 
       document.getElementById("love1").addEventListener("click", love1);
    
            break;

     case 2 : 

    
            var bouton = document.getElementById("love2"); // sélectionner l'élément du bouton par son ID
        
     if (bouton.style.color === "red") { // si la couleur actuelle est rouge
       bouton.style.color = "white"; // réinitialiser la couleur (elle sera par défaut)
     } else {
       bouton.style.color = "red"; // sinon, changer la couleur en rouge
        }
        
     
       
      document.getElementById("love2").addEventListener("click", love2);

      break;
  
  
    case 3 :
        
    
    var bouton = document.getElementById("love3"); // sélectionner l'élément du bouton par son ID
        
    if (bouton.style.color === "red") { // si la couleur actuelle est rouge
      bouton.style.color = "white"; // réinitialiser la couleur (elle sera par défaut)
    } else {
      bouton.style.color = "red"; // sinon, changer la couleur en rouge
    }
    
     document.getElementById("love3").addEventListener("click", love3);
           
}

  likeArticle();   
 }


 


 // Fonction pour supprimer un article et mettre a jour la somme apres la suppression

function suppArticle(articleNumber) {

  switch(articleNumber)
   {
    case 1:
     

      var parentElem = document.getElementById('articles');
          var childElem = document.getElementById('articlenumber1');
          var suppelement = document.getElementById("supp1");
          
           suppelement.addEventListener("click",function suppArticle() {
        
            
                 // alert ('supprimer avec succer');
                 parentElem.removeChild(childElem); 
                  
           });

           if(article1Quantity > 0) {  //  si la quantité de l'article est superieur a 1 
            article1Quantity=0;          // j'affecte a la quantité une valeur de zero pour que le calcule de la somme egale a zero
            suppArticle();         // j'appel a la fonction supprimer pour supprimer l'article a la fin 
              
          };
           
      break;

    case 2:


      
    var parentElem = document.getElementById('articles');
    var childElem = document.getElementById('articlenumber2');
    var suppelement = document.getElementById("supp2");
    
     suppelement.addEventListener("click",function suppArticle() {
  
      
           // alert ('supprimer avec succer');
           parentElem.removeChild(childElem); 
            
     });

     if(article2Quantity > 0) {  //  si la quantité de l'article est superieur a 1 
      article2Quantity=0;          // j'affecte a la quantité une valeur de zero pour que le calcule de la somme egale a zero
      suppArticle();         // j'appel a la fonction supprimer pour supprimer l'article a la fin 
        
    };
    

      break;
    case 3:

    var parentElem = document.getElementById('articles');
    var childElem = document.getElementById('articlenumber3');
    var suppelement = document.getElementById("supp3");
    
     suppelement.addEventListener("click",function suppArticle() {
  
      
           // alert ('supprimer avec succer');
           parentElem.removeChild(childElem); 
            
     });

     if(article3Quantity > 0) {  //  si la quantité de l'article est superieur a 1 
      article3Quantity=0;          // j'affecte a la quantité une valeur de zero pour que le calcule de la somme egale a zero
      suppArticle();         // j'appel a la fonction supprimer pour supprimer l'article a la fin 
    };

      break;
  }
  
  updateArticlePrice(articleNumber);
}






  