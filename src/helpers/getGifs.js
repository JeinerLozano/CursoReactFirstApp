export const getGif = async (category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=B6zAvlUqjJmYiBOGcmAmz3kp0xBufkhI&q=${category}&limit=8`;
    const resp = await fetch(url)
    const {data} = await resp.json()
    const gif = data.map( (images) =>{
      return(
        {
          id: images.id,
          title: images.title,
          url: images.images.downsized_medium.url
        }
      )
    })
    return gif
  }