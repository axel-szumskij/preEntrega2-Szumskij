class Producto{
  constructor(nombre,precio,stock){

    this.nombre=nombre;
    this.precio=precio;
    this.stock=stock;
  }

  get_datos(){
    console.log("<----DATOS----->")
    console.log("Nombre: " , this.nombre);
    console.log("Precio: " , this.precio);
    console.log("");
  }

  get_stock(){
    if(this.stock < 1){
      return false
    }
    else{
      return true
    }

  }
  update_stock( cantidad ){
    this.stock = this.stock - cantidad;
  }

}

function buscar_producto( producto){
  return producto.nombre == compra_usario;
}

/*cargar productos*/

let lista_productos = [];

function start(){
  for(let i=0 ; i < 3 ; i++){
    let nombre = prompt ("Ingrese el nombre del producto");
    let precio = prompt("Ingrese el precio del producto");
    let stock = prompt("Ingrese el stock del producto");
    let producto = new Producto( nombre, precio, stock);
  
    lista_productos.push(producto);
  }
  unidades()
}




console.log(lista_productos);

/*simulo lista de productos*/
for(let producto of lista_productos){
  producto.get_datos();
}

/*simulo compras*/
function unidades(){
  compra_usuario = prompt("Ingrese el nombre del producto que desea comprar")
  unidades = prompt("Cuantos productos desea comprar?");
  
  if (compra_usuario == lista_productos[0].nombre){
    alert( "estas a punto de comprar " + unidades + " copias de " + lista_productos[0].nombre + " a $" + lista_productos[0].precio + " por un valor total de $" + lista_productos[0].precio * unidades)
  }
  if (compra_usuario == lista_productos[1].nombre){
    alert("chau")
  }
   if (compra_usuario == lista_productos[2].nombre){
    alert("quetal")
  }
  else{
    alert("no vendemos ese")
  }
}






let resultado_find = lista_productos.find(buscar_producto);








start()