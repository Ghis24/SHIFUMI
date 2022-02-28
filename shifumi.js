const ButtonEls=document.querySelectorAll(".img");

const Joueur1=document.querySelector("#Joueur1");
const Joueur2=document.querySelector("#Robot");
const theChoice=document.querySelector("#choix");
const theValeur=document.querySelector("#valeur");
const theScore1=document.querySelector("#scoreJoueur");
const scoreRobot=document.querySelector("#scoreRobot");


scoreJoueur.innerText= 0;
scoreRobot.innerText= 0;

const coups =["Pierre","Feuille","Ciseaux"];
function NbAleatoire(){
    return Math.floor(Math.random()*3);
};


ButtonEls.forEach(ButtonEl => {
    ButtonEl.addEventListener("click",function() {
        console.log(ButtonEls);
        // theChoice.value=ButtonEl.id;
        // theValeur.value=ButtonEl.id;
        const coupRobot=coups[NbAleatoire];
        
        switch(ButtonEl.id){
            case "imgPierre":
                if(coupRobot=="Pierre"){
                
                }else if(coupRobot=="Feuille"){
                    scoreRobot.innerText++
                }else{
                    scoreJoueur.innerText++
                }
            break;
            
            case "imgFeuille":
                if(coupRobot=="Feuille"){
                
                }else if(coupRobot=="Pierre"){
                    scoreJoueur.innerText++
                }else{
                    scoreRobot.innerText++
                } 
                    
            break;

            case "imgCiseaux":
                if(coupRobot=="Ciseaux"){
                
                }else if(coupRobot=="Feuille"){
                    scoreJoueur.innerText++
                }else{
                    scoreRobot.innerText++
                }
            break;

            default:
        }
    })      
})
   
   
    //         if(Joueur1==coups[0]&&Joueur2==coups[0]){
    //             return false;
    //         }else{
    //             if(Joueur1==coups[1]&&Joueur2==coups[1]){
    //                 return false;
    //             }else{
    //                 if(Joueur1==coups[2]&&Joueur2==coups[2]){
    //                     return false;
    //                 }else{
    //                 if(Joueur1==coups[0]&&Joueur2==coups[1]){
    //                     alert("Joueur2 a gagné cette manche!");
    //                     theScore2.innerText++
    //                 }else{
    //                     if(Joueur1==coups[1]&&Joueur2==coups[0]){
    //                         alert("Joueur1 a gagné cette manche!");
    //                         theScore1.innerText++
    //                     }else{
    //                         if(Joueur1==coups[2]&&Joueur2==coups[1]){
    //                             alert("Joueur1 a gagné cette manche!");
    //                             theScore1.innerText++
    //                         }else{
    //                         if(Joueur1==coups[0]&&Joueur2==coups[2]){
    //                             alert("Joueur1 a gagné cette manche!");
    //                             theScore1.innerText++
    //                         }else{
    //                         if(Joueur1==coups[1]&&Joueur2==coups[2]){
    //                             alert("Joueur2 a gagné cette manche!");
    //                             theScore2.innerText++
    //                         }else{
    //                         if(Joueur1==coups[2]&&Joueur2==coups[0]){
    //                             alert("Joueur2 a gagné cette manche!");
    //                             theScore2.innerText++
    //                     }
    //                 }
                
    //             }
    //         }
    //     }
    // };

