export const getMisFavoritos = () => {

    return JSON.parse(localStorage.getItem("misFavoritos")) || []

}

export const agregarFavorito = (id) => {

    const ids = getMisFavoritos()

    if (!ids.includes(id)) {

        ids.push(id)

        localStorage.setItem("misFavoritos", JSON.stringify(ids))

    }

    return ids

}

export const quitarFavorito = (id) => {

    let ids = getMisFavoritos()

    ids = ids.filter(f => f !== id)

    localStorage.setItem("misFavoritos", JSON.stringify(ids))

    return ids

}
