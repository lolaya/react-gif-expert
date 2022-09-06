const getGifs = async ( category ) => {
    const limit = 3
    const keyApi = '7GnjSHcs7mwgleSnjVSoUw0aoa3PQwUD'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${keyApi}&q=${category}&limit=${limit}`
    
    const response = await fetch(url)
    const { data } = await response.json()

    const gifs = data.map(({ id, title, images: { downsized_medium: { url } } }) => 
        ({ id, title, url }))

    return gifs
}

export { getGifs as default }