let n1,n2,n3,t,mayor;
n1= parseInt(prompt("agrega un numero"))
n2= parseInt(prompt("agrega un numero"))
n3= parseInt(prompt("agrega un numero"))

if(n1 > n2) {
    t = n1;
}else{
    t = n2;
}

if(t > n3) {
    mayor= t;
} else{
    mayor = n3;
}

document.write( "el numero mayor es " + mayor)