function mercado(){
        var producto= document.getElementById("producto").value;
        var nuevo = document.getElementById("listamercado").innerHTML;
        document.getElementById("listamercado").innerHTML = nuevo + '<li>' + producto + '</li>';
    }
