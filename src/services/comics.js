import axios from 'axios';

// Servicio para obtener noticias
const getComics = async () => {
  try {
    const response = await axios.get('http://localhost:4000/comics');
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Servicio para crear una nueva noticia
const crearComics = async (nuevaNoticia) => {
  try {
    const response = await axios.post('https://api.example.com/noticias', nuevaNoticia);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Servicio para actualizar una noticia existente
const actualizarComic = async (noticiaId, datosActualizados) => {
  try {
    const response = await axios.put(`https://api.example.com/noticias/${noticiaId}`, datosActualizados);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Servicio para eliminar una noticia
const eliminarComic = async (noticiaId) => {
  try {
    const response = await axios.delete(`https://api.example.com/noticias/${noticiaId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getComic = async (comicSeleccionado) => {
	try {
	  const response = await axios.get('http://localhost:4000/comics/'+comicSeleccionado);
	  return response.data;
	} catch (error) {
	  console.error(error);
	  return null;
	}
  };

export { getComics, crearComics, actualizarComic, eliminarComic, getComic };
