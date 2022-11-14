window.addEventListener('load', function(){
    let tituloLibro = document.querySelector('#titulo');
    let spanTitulo = document.querySelector('#spanTitulo');
    let autorLibro = document.querySelector('#autor');
    let spanAutor = document.querySelector('#spanAutor');
    let sinopsisLibro = document.querySelector('#sinopsis');
    let precioLibro = document.querySelector('#precio');
    let imagenLibro = document.querySelector('#imagenProducto');
    let edicionLibro = document.querySelector('#edicion');
    let paginasLibro = document.querySelector('#paginas');
    let idiomaLibro = document.querySelector('#idioma');
    let precentacionLibro = document.querySelector('#precentacion');
});

const expresiones = {
	titulo: /^[a-zA-Z0-9\_\-]{5,20}$/, // Letras, numeros, guion y guion_bajo
	name: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{6,12}$/, // 6 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	
}

tituloLibro.focus()
tituloLibro.addEventListener('blur', (e)=>{
    if(!expresiones.titulo.test(e.target.value)){
        tituloLibro.classList.add('error');
        tituloLibro.classList.remove('invisible');
        tituloLibro.classList.add('visible');
        
    }else{
        tituloLibro.classList.remove('error');
        spanName.classList.add('invisible');
        spanName.classList.remove('visible');
        autorLibro.focus();
    }
});
autorLibro.addEventListener('blur', (e)=>{
    if(!expresiones.name.test(e.target.value)){
        autorLibro.classList.add('error')
        spanAutor.classList.remove('invisible');
        spanAutor.classList.add('visible');
    }else{
        campoApellido.classList.remove('error')
        spanAutor.classList.add('invisible');
        spanAutor.classList.remove('visible');
        sinopsisLibro.focus();
    }
});
