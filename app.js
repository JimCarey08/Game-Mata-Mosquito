let music = document.getElementById('music')
music.volume = 0.1
document.addEventListener('DOMContentLoaded', music.play())

let altura =0
let largura = 0
let vidas=1
let tempo = 15
let criarMosquitoTempo = 1500

let nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel==='facil'){
//1500
    criarMosquitoTempo = 1500
}else if(nivel==='normal'){
//1000
    criarMosquitoTempo = 1000
}else if(nivel==='dificil'){
//800
    criarMosquitoTempo = 800
}

function ajustar(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura, largura)
}

ajustar()

let cronometro = setInterval(()=>{
    tempo-=1
    if(tempo<0){
        clearInterval(cronometro)
        clearInterval(inicioJogo)
        window.location.href = 'vitoria.html'
        
    }else {
        document.getElementById('tempo').innerHTML = tempo
    }

},1000)



function criarMosquito(){
     posicaoX = Math.floor(Math.random()*largura)-230
     posicaoY = Math.floor(Math.random()*altura)-230

    posicaoX = posicaoX<0?0:posicaoX
    posicaoY = posicaoY<0?0:posicaoY
    
    if(document.getElementById('mosquito')){
        
        document.getElementById('mosquito').remove()
        if(vidas>3){

            window.location.href= 'game_over.html'
        }else{
            document.getElementById('hurt').currentTime = 0
            document.getElementById('hurt').play()
            document.getElementById(`v${vidas}`).src = "imagens/coracao_vazio.png"
            vidas++
        }

        
    }
    

    let index = Math.floor(Math.random()*5)
    let ladoIndex = Math.floor(Math.random()*2)

    let mosca = document.createElement('img')
    mosca.src = 'imagens/mosca.png'
    mosca.className = `mosquito${index}`
    mosca.classList.add(`rotate${ladoIndex}`)
    mosca.style.position = 'absolute'
    mosca.style.left = posicaoX + 'px'
    mosca.style.top = posicaoY + 'px'
    mosca.id= 'mosquito'
    mosca.onclick = function(){
        this.remove()
        document.getElementById('acerto').currentTime = 0
        document.getElementById('acerto').volume = 0.3
        document.getElementById('acerto').play()
    }
    
    document.body.appendChild(mosca)
    document.getElementById('zumbido').currentTime = 0
    document.getElementById('zumbido').volume = 0.1
    document.getElementById('zumbido').play()


}




 




