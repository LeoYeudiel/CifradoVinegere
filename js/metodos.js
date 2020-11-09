
function Cifradov() {
    var y=document.getElementById("semilla").value;
    var txt=document.getElementById("men").value;
    var y=y.toLowerCase()
    var txt=txt.toLowerCase()
    var textov=/^[a-zñ\s]+$/
    var tex=/^[a-zñ]+$/
    console.log(y)
    console.log(txt)
    if (txt.length>=1 && y.length>0) {
        if (!textov.test(txt) || !tex.test(y)) {
            document.getElementById('resultado').innerHTML="Metió un dato mal en la cadena o seleccione el número de desplazamiento"    
        }else{
            Cifrarvine();
        }
    }else{
        document.getElementById('resultado').innerHTML="Debe insertar algo para cifrar"
        
    }
}

function Decifradov() {
    var y=document.getElementById("semilla").value;
    var txt=document.getElementById("men").value;
    var y=y.toLowerCase()
    txt=txt.toLowerCase()
    var textov=/^[a-zñ\s]+$/
    var tex=/^[a-zñ]+$/
    if (txt.length>0 && y.length>0) {
        if (!textov.test(txt) || !tex.test(y)) {
            document.getElementById('resultado').innerHTML="Metió un dato mal en la cadena o seleccione el número de desplazamiento"    
        }else{
            Decifarvine();
        }
    }else{
        document.getElementById('resultado').innerHTML="Debe insertar algo para cifrar"
        
    }
}

function Cifrarvine(){
    var y=document.getElementById("semilla").value;
    var txt=document.getElementById("men").value;
    var txt= txt.toLowerCase()
    var y=y.toLowerCase()
    var abc="abcdefghijklmnñopqrstuvwxyz"
    var ci="";
    console.log(txt+y)
    for (var i = 0 ; i < txt.length; i++) {
        var c=0
        if (abc.indexOf(txt.charAt(i)) != -1) {
            var d=(abc.indexOf(txt.charAt(i))+abc.indexOf(y.charAt(c)))%abc.length
            ci+=(abc.indexOf(txt.charAt(i))!= -1)? abc.charAt(d):abc.charAt(d);
            
        }else{
            c-=1
            ci+= txt.charAt(i);
        }
        c=(c+1)%y.length
        
    }
    document.getElementById('resultado').innerHTML = ci
}

function Decifarvine(){
    var y=document.getElementById("semilla").value;
    var txt=document.getElementById("men").value;
    var txt= txt.toLowerCase()
    y=y.toLowerCase()
    var abc="abcdefghijklmnñopqrstuvwxyz"
    var ci="";
    console.log(txt)
    for (var i = 0; i < txt.length; i++) {
        var c=0
        if (abc.indexOf(txt.charAt(i)) != -1) {
            if ((abc.indexOf(txt.charAt(i))-abc.indexOf(y.charAt(c)))<0){
                ci+=abc.charAt((abc.length)+((abc.indexOf(txt.charAt(i)))-abc.indexOf(y.charAt(c))))
            }else{
                ci+=(abc.indexOf(txt.charAt(i))!= -1)? abc.charAt(((abc.indexOf(txt.charAt(i)))-abc.indexOf(y.charAt(c)))% abc.length):abc.charAt(((abc.indexOf(txt.charAt(i)))-abc.indexOf(y.charAt(c)))% abc.length);
            
            }
        }else{
            c-=1
            ci+= txt.charAt(i);
        }
        c=(c+1)%y.length
    }
    document.getElementById('resultado').innerHTML = ci
}