function numeric(ch){
    i=0;
    while(i<ch.length && (ch[i]>="0" && ch[i]<="9")){
        i++;
    }
    return i==ch.length ;
}
function alpha(x){
    x=x.toUpperCase();
    i=0;
    while(i<x.length  && (x[i]>="A" && x[i]<="Z") || x[i]==" "){
        i++;
    }
    return i==x.length ;
}

function verif(){
    np=document.getElementById("name").value ;
    if(np.length<10 || np.length>100 || !apha(np)){
        alert("verify name");
        return false;
    }
    e=document.getElementById("email").value ;
    if(e.indexOf("@")==-1){
        alert("verify email");
        return false;
    }
}