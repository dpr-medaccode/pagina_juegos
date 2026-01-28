import Juego from "../src/rawg/juego.js";
import RWAG from "../src/rawg/rawg.js";

//let tf2 = await Juego.new_from_busqueda('team',2,1)

//console.log(tf2)

let d = await RWAG.desarrolladores()

//console.log(d);


d.forEach(dd => {

    console.log(dd.games);
    
});
