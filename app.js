/*let menu = "Ingrese: \n1 Remeras \n2 Bermudas\n3 Zapatillas\n4 Total de la compra\n0 Para salir  "
let opcion = Number(prompt(menu))
let remeras = 8000
let bermudas = 15000
let zapatillas = 20000
let cantRem
let cantBer
let cantZap
function sumar2()
      {
          let resultadoTotal = (cantRem * remeras) + (cantBer * bermudas) + (cantZap * zapatillas)
          let sumaIva = resultadoTotal *0.21
          let resultado = sumaIva + resultadoTotal
          alert("El total con Iva es: " + (resultado));
      }
while (opcion != 0)
  {
    if (opcion == 1){
      let menu2 = "¿Cuantas remeras queres comprar?: "
      cantRem = Number(prompt(menu2))
    }
      else if(opcion == 2)
        {
          let menu3 = "¿Cuantas bermudas queres comprar?: "
          cantBer = Number(prompt(menu3))
        }
      else if(opcion == 3)
        {
          let menu4 = "¿Cuantas zapatillas queres comprar?: "
          cantZap = Number(prompt(menu4))
        }
      else if(opcion == 4)
        {
          sumar2()
        }
      else 
        {
          alert("opcion incorrecta")
        }
        opcion = Number(prompt(menu))
  }*/
class Producto 
          {
            constructor(id,nombre,precio,cantidad,categoria)
            {
              this.id=id;
              this.nombre=nombre;
              this.precio=precio;
              this.cantidad=cantidad;
              this.categoria=categoria;
            }
          }

let producto1= new Producto(1, "remeras", 8000, 10, "ropa" )
let producto2= new Producto(2, "bermudas", 15000, 10, "ropa")
let producto3= new Producto(3, "zapatillas", 20000, 10, "accesorio")



const mercaderia=[producto1, producto2, producto3]

mercaderia.push()

const nombres= ["remeras", "bermudas", "zapatillas"]
let nombre= prompt("Ingrese un producto para ver si esta disponible")
if (nombres.includes(nombre))
    {
      alert(nombre+ " En stock")
    } else 
        {
          alert(nombre + " Sin stock")
        }

const productoAComprar= prompt("Ingrese el nombre del producto:")
const productoElegido=mercaderia.find(producto=>producto.nombre===productoAComprar)
let carrito=mercaderia
if(productoElegido)
    {
      carrito.push(productoElegido)
      alert('Agregado al carrito')
    }
else 
    {
      alert('El producto no existe, vuelva a intentarlo')
    }




