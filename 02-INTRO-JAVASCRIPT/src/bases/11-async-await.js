
const getImagen = async () => {

    try {
        const apiKey = 'ZW2QpkaQ1bfoF7KbjJdcDiEN3yqqRfL6';
    const search = 'computer';

    const peticion = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}`);
    const {data} = await peticion.json();

    console.log(data);
            data.forEach(actual => {

            const {url} = actual.images.original;

            const img = document.createElement('img');
            img.src = url;

            document.body.append(img);
            });

    } catch (error) {
        console.warn('error')
    }
    
}

getImagen();

// 



// peticion.then(resp => resp.json())
//         .then( ({data}) => {
//             console.log(data);
//             data.forEach(actual => {

//             const {url} = actual.images.original;

//             const img = document.createElement('img');
//             img.src = url;

//             document.body.append(img);
//             });

//         }).catch(console.warn);
