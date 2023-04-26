function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[Erro] Verifiquei seus dados e tente novamente')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img=document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança  
               img.setAttribute('src' , 'bebemenino.jpg') }
               else if(idade >10 && idade <18){
                img.setAttribute('src', 'meninoadolecente.jpg')
               }
               else if( idade >18 && idade<50){
                img.setAttribute('src', 'Adultohomem.jpg')
               }
               else if(idade >=50){
                img.setAttribute('src', 'Idosohomem.jpg')
               }
             

        }
        else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >0 && idade <10){
                img.setAttribute('src', 'bebe.menina.jpg')
            }
            else if( idade >=10 && idade <18){
                img.setAttribute('src', 'meninaadolecente.jpg')
            }
            else if(idade >18 && idade <50){
                img.setAttribute('src', 'Adultomulher.jpg')
            }
            else if(idade >=50){
img.setAttribute('src', 'idosamulher.jpg')
            }

        }
        res.innerHTML =`Detectamos ${genero} com ${idade}  anos.`
        res.appendChild(img)

    }
}