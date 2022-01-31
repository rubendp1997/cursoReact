


export const getGifs = async( category ) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=ZW2QpkaQ1bfoF7KbjJdcDiEN3yqqRfL6`;
    const response = await fetch (url);
    const {data} = await response.json();
    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }

    })
    return (gifs);

  }