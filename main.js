const nombreBox = document.getElementById('nombre');
const generer = document.getElementById('generer');
const resultat = document.getElementById('resultat');
  

function conwaySetup() { 
        let nombre = nombreBox.value;
        let nombreString = nombre.toString();       
        let nombres = nombreString.split('');
        let nombreDePareil = 1;
        let nombreResultat = [];      
        conway(nombreDePareil,nombres,nombreResultat);             
        }

function conway(nombreDePareil,nombres,nombreResultat){
        if (nombres[1] == undefined) {
            nombreResultat.push(nombreDePareil);
            nombreResultat.push(nombres[0]);                   
            resultat.innerHTML = nombreResultat;        
        } else if  (nombres[0]==nombres[1]){
            nombreDePareil += 1;
            nombres.shift();              
            conway(nombreDePareil,nombres,nombreResultat);
       } else {
            nombreResultat.push(nombreDePareil);
            nombreResultat.push(nombres[0]);
            nombreDePareil = 1;
            nombres.shift();
            conway(nombreDePareil,nombres,nombreResultat);
}}

