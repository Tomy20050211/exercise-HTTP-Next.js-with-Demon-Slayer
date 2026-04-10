import { personajes } from "@/app/data/personaje.data";

//Handle haciendo una peticion HTTP GET, asi obteniendo mis personajes

export async function GET(){
    return Response.json(personajes)
};

//Handle haciendo una peticion HTTP POST, asi poder ingresar un nuevo cazador
export async function POST(request: Request){
   try{
       const nuevoPersonaje = await request.json();

       const nuevoId = personajes.length +1;

       const personajeCreado = {
          id: nuevoId,
          ...nuevoPersonaje
       };

       personajes.push(personajeCreado)

       return Response.json(personajeCreado, {status: 201})
   }catch{ 
       return Response.json({error: "Error al crear el personaje"}, {status: 500})
   }

};






