export  const  getGifs =  async (category)=>{

    //el url debe tener el protocolo

    const url = `https://api.giphy.com/v1/gifs/search?api_key=nzAjgtN39Lls4mbnYEY7BfG3VjNNYS8n&q=${ category }&limit=10`;
    const resp= await fetch(url);
    const { data } = await resp.json();


    const gifs = data.map ( img => ({

        id: img.id,
        title:img.title,
        url:img.images.downsized_medium.url

    })

    );
    
    // console.log(gifs);

    return gifs;


}
