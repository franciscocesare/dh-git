const autosModulo = require("./autos");

let concesionaria = {
  autos: autosModulo,
  buscarAuto(patente) {
    const auto = this.autos.find((auto) => auto.patente == patente);
    if (auto) {
      return auto;
    } else {
      return null;
    }
  },
  venderAuto(patente) {
    return (this.buscarAuto(patente).vendido = true);
  },
  autosParaLaVenta() {
    return (autosSinVender = this.autos.filter(
      ({ vendido }) => vendido == false
    ));
  },
  autosNuevos() {
    return this.autosParaLaVenta().filter(({ km }) => km < 100);
  },
  listaDeVentas: function () {
    return this.autos.filter((auto) => auto.vendido).map((auto) => auto.precio);
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
    return this.listaDeVentas().reduce((acc, precio) => acc + precio, 0);
  },
  puedeComprar(auto, persona) {
    return (
      persona.capacidadDePagoEnCuotas >= auto.precio / auto.cuotas &&
      persona.capacidadDePagoTotal >= auto.precio
    );
  },
  autosQuePuedeComprar(persona) {
    return this.autosParaLaVenta().filter((auto) =>
      this.puedeComprar(auto, persona)
    );
  },
};

console.log(concesionaria.buscarAuto("JJK116")); //no encuentra
 console.log(concesionaria.buscarAuto("APL123")); //si encuentra
console.log(concesionaria.venderAuto("APL123"));
//console.log(concesionaria.venderAuto("GRA888"));
// console.log(concesionaria.buscarAuto("APL123")); //si encuentra
// console.log(concesionaria.autosParaLaVenta());
// console.log(concesionaria.autosNuevos());
// console.log(concesionaria.listaDeVentas());
// console.log(
//   concesionaria.autosQuePuedeComprar({
//     nombre: "Juan",
//     capacidadDePagoEnCuotas: 20000,
//     capacidadDePagoTotal: 100000,
//   })
// );
//console.log(concesionaria.totalDeVentas());
