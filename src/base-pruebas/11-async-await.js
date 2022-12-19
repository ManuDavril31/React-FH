// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

// export const getImagen = async () => {
//   try {
//     const apiKey = "C1khQe3Z7R1W2lfTO9myKeuShdqFYSGC";
//     const resp = await fetch(
//       `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
//     );
//     const { data } = await resp.json();

//     const { url } = data.images.original;

//     const img = document.createElement("img");
//     img.src = url;
//     document.body.append(img);
//   } catch (error) {
//     // manejo del error
//     console.error(error);
//   }
// };

export const getImagen = async () => {
  try {
    const uri =
      "https://docs.google.com/spreadsheets/d/1ewIA2E3E0QZVBvVlWR3bdq7D3kqev3EquCJY5QuXZr4/gviz/tq?tqx=out:json";
    const resp = await fetch(uri);
    const text = await resp.text();
    const transformJSON = JSON.parse(text.substring(47).slice(0, -2));
    const { v: url } = transformJSON.table.rows[0].c[1];
    return url;

    // const img = document.createElement("img");
    // img.src = v;
    // document.body.append(img);
  } catch (error) {
    // manejo del error
    console.error(error);
    return "No se encontro la imagen";
  }
};
