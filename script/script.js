class Producto{
  constructor(nombre,precio,stock){

    this.nombre=nombre;
    this.precio=precio;
    this.stock=stock;
  }

  get_datos(){
    console.log("<----DATOS----->")
    console.log("Nombre: " , this.nombre);
    console.log("Nombre: " , this.precio);
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

for(let i=0 ; i < 3 ; i++){
  let nombre = prompt ("Ingrese el nombre del producto");
  let precio = prompt("Ingrese el precio del producto");
  let stock = prompt("Ingrese el stock del producto");
  let producto = new Producto( nombre, precio, stock);

  lista_productos.push(producto);
}

console.log(lista_productos);

/*simulo lista de productos*/
for(let producto of lista_productos){
  producto.get_datos();
}

/*simulo compras*/
let compra_usario = prompt("Ingrese el nombre del producto que desea comprar")
let resultado_find = lista_productos.find(buscar_producto);

if( resultado_find != undefined ){
  if( resultado_find.get_stock()){

    let unidades = prompt("Cuantos productos desea comprar?");
    resultado_find.update_stock(unidades);
  }
  else{
    console.log("Sin stock");
  }
}


console.log(resultado_find);



