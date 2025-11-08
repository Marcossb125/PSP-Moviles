import { Component, OnInit } from '@angular/core';
import { Tarjeta } from '../tarjeta/tarjeta';
import { Personaje } from '../../models/personaje.model';

@Component({
  selector: 'app-lista',
  imports: [Tarjeta],
  templateUrl: './lista.html',
  styleUrl: './lista.css'
})
export class Lista {

  personajes:Personaje[] = [
    {nombre: "Vergil", poder: 5, imagen: "/pngs/Vergil.png", raza: "Mestizo", 
      historia:"Vergil es uno de los dos hijos de Eva, una mujer humana, y el demonio Sparda, el primer comandante del ejercito del rey demonio Mundus. Poco después de que Sparda traicionara a Mundus aniquilando al ejercito que estaba a punto de atacar el mundo humano, unos demonios atacaron el hogar de Vergil y lo redujeron a cenizas. Vergil presenció todo desde el cobertizo, donde se había escondido antes, y tras sentir la terrible impotencia de no poder hacer nada mientras su familia era asesinada, el corazón de Vergil se llenó de oscuridad. Desde entonces la vida de Vergil solo ha continuado por un único propósito, obtener más poder bajo cualquier costo para poder proteger a sus seres queridos, y el hará todo lo posible para cumplir ese deseo, aunque tenga que perderse a si mismo en el proceso o destruir el mundo"},
    {nombre: "Dante", poder: 5, imagen: "/pngs/dante.png", raza: "Mestizo", historia: "Dante es uno de los dos hijos de Eva, una mujer humana, y el demonio Sparda, el primer comandante del ejercito del rey demonio Mundus. Poco después de las traición de Sparda hacia Dante, unos demonios asaltaron la casa de Dante y su familia y la redujeron a cenizas, Eva escondió a Dante en un armario y fue a buscar a su hermano Vergil, pero por desgracia esta terminó muriendo entre las llamas. Varios años después Dante abrió su propio negocio como mercenario a sueldo, el 'Devil May Cry,' y pese a las numerosas hazañas de Dante como matar a Mundus a detener a su hermano Vergil cuando esté intento destruir el mundo, Dante sigue estando en bancarrota debido a: 1: Las numerosas deudas 2: El hecho de que casi nunca cobra 3: Todas las compras en la pizzeria de al lado"},
    {nombre: "Nero", poder: 4, imagen: "/pngs/Nero.png", raza: "Mestizo", 
      historia: "Nero era un caballero sagrado mitad demonio de la orden de la espada, un ejercito religioso de la ciudad de fortuna y que adora al demonio Sparda y que lo considera el salvador de la humanidad. Nero es un huerfano abandonado por sus padres en la entrada de un orfanato cuando era apenas un bebe, poco después fue adoptado por una nueva familia, sin embargo sus nuevos padres terminaron murieron a manos de demonios, lo que les llevó a unirse a la orden de la espada. Un dia durante un sermon del papa, Dante atravesó la ventana de la iglesia para empalar al cura, asi que la nueva misión de Nero fue perseguir a Dante por la ciudad. Finalmente se descubrió que la orden buscaba absorber el poder de los demonios, por lo que Nero acabó matando al papa para salvar la ciudad. Años después Nero fue reubicado a la ciudad de Red Grave, donde finalmente descubriría la verdadera identidad de su padre"},
    {nombre: "Lady", poder: 3, imagen: "/pngs/Lady.png", raza: "Humano", 
      historia: "Lady es una de las mercenarias más famosas del mundo, la cual colabora con Dante a cambio de pagos bastante importantes. Es una maestra en el uso de armas de fuego como las pistolas y los lanzamisiles, además, es de las pocas humanas con las capacidades para plantar caras a demonios de rango alto"},
    {nombre: "Trish", poder: 3, imagen: "/pngs/Trish.png", raza: "Demonio", 
      historia: "Trish es un demonio artificial creado por el rey demonio Mundus, el cual le otorgó la apariencia de Eva (Madre de Vergil y Dante) para engañar a Dante y matarlo por la espalda. Eventualmente Trish se redime y acaba salvando a Dante de la muerte durante su batalla contra Mundus. Tras la caída de Mundus, Trish se convierte en mercenaria y se convierte en la otra miembro del 'Devil May Cry'"},
    {nombre: "V", poder: 2, imagen: "/pngs/V.png", raza: "Humano", 
      historia: "V es un misterioso nuevo cliente del Devil May Cry, no se sabe absolutamente nada de su pasado, lo único que se conoce sobre el es: 1: Nunca dice su nombre real, solo pide que le llamen V 2: Es un amante de los poemas de William Blake 3: Nació 3 días antes de llegar al 'Devil May Cry' y 4: Quiere abatir a Urizen, el nuevo y desconocido aspirante a rey demonio"},];

  
}