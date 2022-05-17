const autosModulo = require("./autos");

let concesionaria = {
   autos: autosModulo,
   buscarAuto(patente) {
    for (const auto of this.autos) {
      if (auto.patente == patente) {
        return auto;
      }
    }
    return null; //sino encontro iterando, null
  },
  venderAuto(patente) {
    let auto = this.buscarAuto(patente);
    auto.vendido = true;
  },
   autosParaLaVenta() {
      return autosSinVender = this.autos.filter(({ vendido }) => vendido == false);
   },
   autosNuevos() {
      let autosNuevos = this.autosParaLaVenta().filter(({ km }) => km < 100);
      return autosNuevos;
    },
    listaDeVentas: function () {
        return this.autos.filter(e => e.vendido).map(e => e.precio)
     },
//    listaDeVentas() {
//       let vendidos = autos.filter(({ vendido }) => vendido == true);
//       let preciosVendidos = [];
//       vendidos.forEach(({ precio }) => {
//          preciosVendidos.push(precio);
//       })
//       return preciosVendidos
//    },
   totalDeVentas() {
      let totalVentas = this.listaDeVentas()
      if (totalVentas.length > 0) {
         return totalVentas.reduce((acc, precio) => { return acc + precio })
      } else {
         return 0;
      }
   },
   puedeComprar(auto, persona) {
      let { precio, cuotas } = auto
      let { capacidadDePagoEnCuotas, capacidadDePagoTotal } = persona;
      if (precio < capacidadDePagoTotal
         && capacidadDePagoEnCuotas > (precio / cuotas)) {
         return true;
      } else {
         return false;
      }

   },
   autosQuePuedeComprar(persona) {
      //let autosPosibles = this.autosParaLaVenta()
      let autosPuedePagar = this.autosParaLaVenta().filter((auto) => {return this.puedeComprar(auto, persona)})
      return autosPuedePagar;
   }
   
};



//console.log(concesionaria.buscarAuto("JJK116")); //no encuentra
// console.log(concesionaria.buscarAuto("APL123")); //si encuentra
//console.log(concesionaria.venderAuto("APL123"));
//console.log(concesionaria.venderAuto("GRA888"));
// console.log(concesionaria.buscarAuto("APL123")); //si encuentra
// console.log(concesionaria.autosParaLaVenta());
console.log(concesionaria.autosNuevos());
console.log(concesionaria.listaDeVentas());
console.log(concesionaria.autosQuePuedeComprar({
    nombre: 'Juan',
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
    }));
//console.log(concesionaria.totalDeVentas());
