export const getMisEventos = () => {

  return JSON.parse(localStorage.getItem("misEventos")) || [];

};


export const apuntarseEvento = (id) => {

  const ids = getMisEventos();

  if (!ids.includes(id)) {

    ids.push(id);
    localStorage.setItem("misEventos", JSON.stringify(ids));

  }

  return ids;

};


export const cancelarEvento = (id) => {

  const ids = getMisEventos().filter((eId) => eId !== id);
  localStorage.setItem("misEventos", JSON.stringify(ids));

  return ids;
  
};
