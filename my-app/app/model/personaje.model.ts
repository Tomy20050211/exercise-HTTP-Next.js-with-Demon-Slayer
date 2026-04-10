//Defino mi tipo del rol de mis personajes de Demon Slayer

type Rol = 
 | "Lunas demoniacas"
 | "Pilar"
 | "Cazador"
 | "Rey demonio"
 | "Ex pilar";

//Tipos de respiraciones

type Respiracion = 
  | "Agua"
  | "Llama"
  | "Viento"
  | "Piedra"
  | "Niebla"
  | "Amor"
  | "Serpiente"
  | "Insecto"
  | "Sonido"
  | "Bestia"
  | "Rayo"
  | "Luna"
  | "Solar";

//Defino un molde para los datos de mis personajes

export interface Personaje {
    id: number,
    nombre: string,
    rol: Rol,
    respiracion?: Respiracion
    activo: boolean;
    urlImage: string
};

