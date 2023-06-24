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
const crearComics = async (nuevoComic) => {
  try {
    const response = await axios.post('http://localhost:4000/comics/', nuevoComic);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Servicio para actualizar una noticia existente
const actualizarComic = async (comicId, datosActualizados) => {
  try {
    const response = await axios.put(`http://localhost:4000/comics/${comicId}`, datosActualizados);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Servicio para eliminar una noticia
const eliminarComic = async (comicId) => {
  try {
    const response = await axios.delete(`http://localhost:4000/comics/${comicId}`);
	//me retornaba un objeto vacío en data, así que devuelvo el status para saber si me hace el borrado bien y gestionarlo de acuerdo a eso
    return response.status;
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
