var cantidad;
var cod;
var vlrproducto;
var vlrcompra;
var descuento;

document.getElementById('imprimir').style.display = "none"

function Calcular(){
    codigo = document.getElementById('codigo').value;
    cantidad = Number(document.getElementById('nroArticulo').value);
    vlrproducto = Number(document.getElementById('valArticulo').value);

    vlrcompra=cantidad*vlrproducto;
    descuento = Descuento(vlrcompra,cantidad);
    total = vlrcompra-descuento;

    // alert("Total compra es "+total)
    document.getElementById('imprimir').style.display="block"
    document.getElementById('totCompra').value = total;
    document.getElementById('valDescuento').value = descuento;

}

function Descuento(vlrcompra, cantidad) {
    
    if (cantidad>50){
        descuento=vlrcompra*.1;
    }else{
        descuento=0;
    }
    return descuento
}