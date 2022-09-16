
import '../css/componentes.css';
// import webpackLogo from '../assets/img/webpack-logo.png';

export const saludar = ( nombre ) => {
    console.log('Crendo una etiqueta h1');
    const h1 = document.createElement('h1');
    h1.innerText = `Hola como estas ${nombre} !!!`;
    document.body.append(h1);

    // const img = document.createElement('img');
    // img.src = webpackLogo;
    // document.body.append(img);

}