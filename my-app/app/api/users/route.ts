import { personajes } from "@/app/data/personaje.data";
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST",
  "Access-Control-Allow-Headers": "Content-Type",
};


export async function GET(request: Request) {
  // Construir origin a partir de la request para convertir rutas locales (/img/...) en URLs absolutas
  const origin = new URL(request.url).origin;

  const personajesConImagenes = personajes.map((p) => {
    const isExternal = /^https?:\/\//i.test(p.urlImage);
    const imageUrl = isExternal ? p.urlImage : `${origin}${p.urlImage}`;
    return {
      ...p,
      imageUrl,
    };
  });

  return Response.json(personajesConImagenes, { headers: corsHeaders });
}


export async function POST(request: Request) {
  try {
    const nuevoPersonaje = await request.json();
    const nuevoId = personajes.length + 1;
    const personajeCreado = {
      id: nuevoId,
      ...nuevoPersonaje
    };
    personajes.push(personajeCreado);
    return Response.json(personajeCreado, { status: 201, headers: corsHeaders });
  } catch {
    return Response.json({ error: "Error al crear el personaje" }, { status: 500, headers: corsHeaders });
  }
}


export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders });
}
