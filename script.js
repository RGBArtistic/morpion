function play() {
    let morpion = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
    let boolVictoire;
    function verifBool() {
        let v1 = morpion[0] == morpion[1] && morpion[1] == morpion[2];
        let v2 = morpion[3] == morpion[4] && morpion[4] == morpion[5];
        let v3 = morpion[6] == morpion[7] && morpion[7] == morpion[8];
        let v4 = morpion[0] == morpion[3] && morpion[3] == morpion[6];
        let v5 = morpion[1] == morpion[4] && morpion[4] == morpion[7];
        let v6 = morpion[2] == morpion[5] && morpion[5] == morpion[8];
        let v7 = morpion[0] == morpion[4] && morpion[4] == morpion[8];
        let v8 = morpion[6] == morpion[4] && morpion[4] == morpion[2];
        if (v1 || v2 || v3 || v4 || v5 || v6 || v7 || v8) {
            boolVictoire = true;
        }
        else {
            boolVictoire = false;
        }
    }

    let verif = false;
    let compteur = 0;
    let ask;
    do {
        ask = prompt("Quelle case souhaitez vous jouer ?");

        if (!isNaN(ask) && morpion[Number(ask) - 1] !== "X" && morpion[Number(ask) - 1] !== "O" && (Number(ask) >= 1 && Number(ask) <= 9)) {
            compteur += 1;
            verif = true;
            ask = Number(ask);
            if (compteur % 2 !== 0) {
                pion = "X";
            }
            else {
                pion = "O";
            }
            morpion[ask - 1] = pion;
            console.log("========================");
            console.log(morpion[0] + "   ||   " + morpion[1] + "   ||   " + morpion[2]);
            console.log(morpion[3] + "   ||   " + morpion[4] + "   ||   " + morpion[5]);
            console.log(morpion[6] + "   ||   " + morpion[7] + "   ||   " + morpion[8]);
            console.log("========================");
            verifBool();
        }
        else {
            console.log("votre entrée n'est pas valide");
        }

    } while (verif == true && compteur < 9 && boolVictoire == false);
    if (boolVictoire == true) {
        console.log("Le joueur " + pion + " a gagné.");
    }
    else {
        console.log("Match Nul");
    }


}

function playVisu() {
    let morpion = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
    let visuel = document.querySelectorAll('.case') ;
    let indicPlayer = document.querySelector('#indicplayer');
    indicPlayer.textContent = "" ;
    for(cell of visuel) {
        cell.textContent = "" ;
    }
    let boolVictoire;
    function verifBool() {
        let v1 = morpion[0] == morpion[1] && morpion[1] == morpion[2];
        let v2 = morpion[3] == morpion[4] && morpion[4] == morpion[5];
        let v3 = morpion[6] == morpion[7] && morpion[7] == morpion[8];
        let v4 = morpion[0] == morpion[3] && morpion[3] == morpion[6];
        let v5 = morpion[1] == morpion[4] && morpion[4] == morpion[7];
        let v6 = morpion[2] == morpion[5] && morpion[5] == morpion[8];
        let v7 = morpion[0] == morpion[4] && morpion[4] == morpion[8];
        let v8 = morpion[6] == morpion[4] && morpion[4] == morpion[2];
        if (v1 || v2 || v3 || v4 || v5 || v6 || v7 || v8) {
            boolVictoire = true;
        }
        else {
            boolVictoire = false;
        }
    }
    let compteur = 0;
    let containerMorpion = document.querySelector('#container');
    containerMorpion.addEventListener("click", function (e) {
        if(!boolVictoire) {     
        let caseTarget = e.target;
        let pion;
        if (compteur % 2 !== 0) {
            pion = "X";
        }
        else {
            pion = "O";
        }
        indicPlayer.textContent = "Joueur " + pion + " vient de jouer !";
        if (morpion[Number(caseTarget.dataset.id)] !== "X" && morpion[Number(caseTarget.dataset.id)] !== "O") {
            morpion[Number(caseTarget.dataset.id)] = pion;
            caseTarget.textContent = pion;
            compteur += 1;
            verifBool();
        }
        if (boolVictoire == true) {
            indicPlayer.textContent = "Le joueur " + pion + " a gagné !";
            return;
        }
        else if (compteur == 9) {
            indicPlayer.textContent = "Match nul !!";
            return;
        }
    }
    }) ;
}

