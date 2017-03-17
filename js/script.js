function get(){
    var var1= parseInt(document.getElementById("var1").value);
    var operador= document.getElementById("operador").value;
    var var2= parseInt(document.getElementById("var2").value);

    switch(operador){
        case "*":
        resultado= var1 * var2;
            break;
        case "/":
        resultado= var1/var2;
            break;
        case "+":
        resultado= var1 + var2;
            break;
        case "-":
        resultado= var1 - var2;
            break;

    }


    parseInt(document.getElementById("result").innerHTML= resultado;
}

Function mercado(){
        var producto= document.getElementById(producto).value;
        var nuevo = document.getElementById("listamercado").innerHTML;
        document.getElementById("listamercado").innerHTML = "<li>" + producto + "</li>";
    }
