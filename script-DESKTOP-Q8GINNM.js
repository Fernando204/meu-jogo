

const player = document.getElementById('playe')
var posx = 0;
var jogando = false
var linhaVara = document.getElementById('linhaDavar')
var estado_Da_Linha = "recolhida"
//comandos para mover o barco
function moverBarco(event){
   
    if(jogando){
    switch (event.keyCode){
        case 65:
        case 37:
            //mover para esquerda
            if(posx>-500 && estado_Da_Linha === "recolhida"){
            posx -= 30
            player.style.transform = 'rotateY(180deg)';
            player.style.left = posx+"px"}
            break;
        case 39:
        case 68:
            //mover para direita
            if(posx<465 && estado_Da_Linha === "recolhida"){
            posx += 30
            player.style.transform = 'rotateY(0deg)';
            player.style.left = posx+"px"}
            break;
        case 69:
            // jogar anzol
                estado_Da_Linha = "jogada"
                linhaVara.style.width = '400px'
                linhaVara.style.transform = 'rotate(60deg)'
            break;
        case 81:
            //recolher anzol
            recolherAnzol();
            break;
            
    }
    console.log("keycode: "+event.keyCode)}
}
function recolherAnzol(){
    //Recolher anzol
      estado_Da_Linha = "recolhida"
            linhaVara.style.width = '0px';
            linhaVara.style.transform = 'rotate( 0deg)'
}
document.addEventListener('keydown', moverBarco)
const entrada = document.getElementById('entri')
const nuvem = document.getElementById('nuv')
function jogar(){
    entrada.style.display = 'none'
    pausa.style.display = 'block'
    nuvem.style.animation = 'movimentodasnuvens 200s linear infinite'
    
    jogando = true
}
const aeb = document.getElementById('escolhaDoBarco')
const btvolt = document.getElementById('btvolt')
entrada.style.display = 'flex'
function EscolherBarco(){
    
    if(entrada.style.display === 'flex'){
        entrada.style.display = 'none'
        aeb.style.display = 'flex'
    } else {
        entrada.style.display = 'flex'
        aeb.style.display = 'none'
    }
}
 const OBarco = document.getElementById('OBarco')
 //remover classes do barco
 function removeClass(){
    OBarco.classList.remove('b0')
    OBarco.classList.remove('b1')
    OBarco.classList.remove('b2')
    OBarco.classList.remove('b3')
    OBarco.classList.remove('b32')
    linhaVara.classList.remove('bl3')
    vara.classList.remove('bv3')
    memel.classList.remove('bm3')
 }
 //adicionar classes(cores) ao barco
 btvolt.addEventListener('click', EscolherBarco)
 let Barcos = document.querySelectorAll('.BarcosAE')
 Barcos[0].style.background = 'linear-gradient(45deg, green 0%, lightblue 100%)'
 Barcos[0].addEventListener('click', function(){
    Barcos[0].style.background = 'linear-gradient(45deg, green 0%, lightblue 100%)'
    Barcos[1].style.background = 'gray'
    Barcos[2].style.background = 'gray'
    Barcos[3].style.background= 'gray'
    removeClass();
    OBarco.classList.add('b0')
 })
 Barcos[1].addEventListener('click', function(){
    Barcos[1].style.background = 'linear-gradient(45deg, green 0%, lightblue 100%)'
    Barcos[0].style.background = 'gray'
    Barcos[2].style.background = 'gray'
    Barcos[3].style.background= 'gray'
    removeClass();
    OBarco.classList.add('b1')
 })
 Barcos[2].addEventListener('click', function(){
    Barcos[2].style.background = 'linear-gradient(45deg, green 0%, lightblue 100%)'
    Barcos[1].style.background = 'gray'
    Barcos[0].style.background= 'gray'
    Barcos[3].style.background= 'gray'
    removeClass();
    OBarco.classList.add('b2')
 })
 var vara = document.getElementById('vrra')
 var memel = document.getElementById('memel')
 Barcos[3].addEventListener('click', function(){
    Barcos[3].style.background = 'linear-gradient(45deg, green 0%, lightblue 100%)'
    Barcos[1].style.background = 'gray'
    Barcos[0].style.background= 'gray'
    Barcos[2].style.background= 'gray'
    removeClass()
    OBarco.classList.add('b3')
    OBarco.classList.add('b32')
    linhaVara.classList.add('bl3')
    vara.classList.add('bv3')
    memel.classList.add('bm3')
 })
 //botão para pausar o jogo
 const pausa = document.getElementById('pause')
 pausa.addEventListener('click', function(){
    entrada.style.display = 'flex'
    pausa.style.display = 'none'
    nuvem.style.animation = "none"
 })
 //adicionar peixes:

 var pexe = []
 var quantidadePeixes = 0;
 var cont = 1;
 const mar = document.getElementById('marr')
 var pexpos = [0,1110,0,655,0];
 var pexDirection = 'direita'

 function addPeixes(){
    if(jogando){
    if(quantidadePeixes<=3 && cont === 1){
    var div = document.createElement('div')
    div.classList.add('peixes');
    if(quantidadePeixes ===1 || quantidadePeixes === 3){
        div.classList.add('carpa')
    } else{
    div.classList.add('carpaDef');}
    pexe.push(div);
    document.body.appendChild(div);
    quantidadePeixes++
    }
    cont = (cont % 4) +1}

    pexe[1].style.marginLeft = pexpos[1]+'px'
    pexe[1].style.marginTop = '-600px'
    pexe[2].style.marginLeft = pexpos[2]+'px'
    pexe[2].style.marginTop = '-550px'
    pexe[3].style.marginLeft = pexpos[3]+'px'
    pexe[3].style.marginTop = '-580px'
    
 }
 
 setInterval(addPeixes, 2000)
pe2dir = 'direita'
 function moverPeixes(){
    if(pexe.length > 0){
        //peixe 1:
        if(pexpos[0]<1110 && pexDirection === 'direita'){

            pexe[0].style.transform = 'rotateY(180deg)';
            pexpos[0] += 80;
            pexe[0].style.marginLeft = pexpos[0]+'px'
            

    } else if(pexpos[0] > 0){

            pexDirection = 'esquerda';
            pexe[0].style.transform = 'rotateY(0deg)';
            pexpos[0] -= 80;
            pexe[0].style.marginLeft = pexpos[0]+'px';

    } else {
        pexDirection = 'direita'
    }
    //peixe 2
    if(pexe.length >1){
    if(pexpos[1]>0 && pexDirection === 'direita'){

        pexe[1].style.transform = 'rotateY(0deg)';
        pexpos[1] -= 80;
        pexe[1].style.marginLeft = pexpos[1]+'px'
        

    } else if(pexpos[1] < 1110){

        pexDirection = 'esquerda';
        pexe[1].style.transform = 'rotateY(180deg)';
        pexpos[1] += 80;
        pexe[1].style.marginLeft = pexpos[1]+'px';

    }else {
        pexDirection = 'direita'
    }
//peixe 3:
    if(pexe.length>2){
        if(pexpos[2]>0 && pe2dir === 'direita'){

            pexe[2].style.transform = 'rotateY(0deg)';
            pexpos[2] -= 80;
            pexe[2].style.marginLeft = pexpos[2]+'px'
            
    
        } else if(pexpos[2] < 1110){
    
            pe2dir = 'esquerda';
            pexe[2].style.transform = 'rotateY(180deg)';
            pexpos[2] += 80;
            pexe[2].style.marginLeft = pexpos[2]+'px';
    
        }else {
            pe2dir = 'direita'
        }
    
    //peixe 4:
    if(pexe.length > 3){
        
        if(pexpos[3]<555 && pe2dir === 'direita'){

            pexe[3].style.transform = 'rotateY(180deg)';
            pexpos[3] += 80;
            pexe[3].style.marginLeft = pexpos[3]+'px'
            
    
        } else if(pexpos[3] > 0){
    
            pe2dir = 'esquerda';
            pexe[3].style.transform = 'rotateY(0deg)';
            pexpos[3] -= 80;
            pexe[3].style.marginLeft = pexpos[3]+'px';
    
        }else {
            pe2dir = 'direita'
        }}}}}}
 setInterval(moverPeixes, 900)

 function pexeNoAnzol(anzo, pexe){
    const anzoRect = anzo.getBoundingClientRect()
    const pexeRect = pexe.getBoundingClientRect()

    return !(
        anzoRect.top > pexeRect.bottom ||
        anzoRect.bottom < pexeRect.top ||
        anzoRect.left > pexeRect.right ||
        anzoRect.right < pexeRect.left

    );
 }
const anzol = document.querySelector('.anzol')
const telaDoPeixe =  document.querySelector('.peixe_pescado')
const peixePescado = document.querySelector('.carpaImg')
telaDoPeixe.style.display = "none"
var qdpfisgados = 0;
 function fisgar(){
    for(var i = 0;i<pexe.length;i++){
    if(pexeNoAnzol(pexe[i], anzol) && telaDoPeixe.style.display === "none"){

        qdpfisgados++

        if(pexe[i].classList.contains('carpa')){
        pexe[i].remove()
        telaDoPeixe.style.display = 'flex'
        peixePescado.src = "peixes/carpa.png"
        telaDoPeixe.querySelector('h3').innerHTML = 'salmão'
        aumentarPontuação(2)
        } else if(pexe[i].classList.contains('carpaDef')){
            pexe[i].remove()
            telaDoPeixe.style.display = 'flex'
            peixePescado.src = "peixes/carpaDef.png"
            telaDoPeixe.querySelector('h3').innerHTML = 'carpa'
            aumentarPontuação(1)
        }
    }}
    
    if(qdpfisgados >= 4){
        ReAddPeixes();
        alert('os peixes serão readicionados')
    }
 }
 setInterval(fisgar, 100)

 var btMP = document.querySelector('.voltar2')
 btMP.addEventListener('click', function(){
    telaDoPeixe.style.display = 'none'
 })
 function ReAddPeixes(){
    //adicionar novamente os peixes
        pexe = [];
        quantidadePeixes = 0;
        qdpfisgados = 0;
 }
 const pontuação = document.querySelector('.pontuação')
 var pt = 0;
 function aumentarPontuação(pontos){
        pt += pontos  
        pontuação.querySelector('h2').innerHTML = `Pontuação atual: ${pt}`
 }