window.addEventListener('load', function(){
    let tituloLibro = document.querySelector('#titulo');
    let spanTitulo = document.querySelector('#spanTitulo');
    let autorLibro = document.querySelector('#autor');
    let spanAutor = document.querySelector('#spanAutor');
    let sinopsisLibro = document.querySelector('#sinopsis');
    let spanSinopsis = document.querySelector('#spanSinopsis');
    let precioLibro = document.querySelector('#precio');
    let spanPrecio = document.querySelector('#spanPrecio');
    let imagenLibro = document.querySelector('#imagenProducto');
    let edicionLibro = document.querySelector('#edicion');
    let spanEdicion = document.querySelector('#spanEdicion');
    let paginasLibro = document.querySelector('#paginas');
    let spanPaginas = document.querySelector('#spanPaginas');
    let idiomaLibro = document.querySelector('#idioma');
    let spanIdioma = document.querySelector('#spanIdioma');
    let presentacionLibro = document.querySelector('#presentacion');
    let spanPresentacion = document.querySelector('#spanPresentacion');


    const expresiones = {
    titulo: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras, numeros, guion y guion_bajo
    sinopsis: /^[a-zA-Z0-9\_\-]{10,70}$/, // Letras, numeros, guion y guion_bajo
	name: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{6,12}$/, // 6 a 12 digitos.
    precio: /^.{2,5}$/, // 2 a 5 digitos.
    edicion: /^.{1,2}$/, // 1 a 2 digitos.
    paginas: /^.{1,4}$/, // 1 a 4 digitos.
    idioma: /^[a-zA-ZÀ-ÿ\s]{3,10}$/, // Letras y espacios, pueden llevar acentos.
    presentacion: /^[a-zA-ZÀ-ÿ\s]{5,20}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        
    }

    tituloLibro.focus()
    tituloLibro.addEventListener('blur', (e)=>{
        if(!expresiones.titulo.test(e.target.value)){
            tituloLibro.classList.add('error');
            spanTitulo.classList.remove('invisible');
            spanTitulo.classList.add('visible');
            
        }else{
            tituloLibro.classList.remove('error');
            spanTitulo.classList.add('invisible');
            spanTitulo.classList.remove('visible');
            autorLibro.focus();
        }
    });
    autorLibro.addEventListener('blur', (e)=>{
        if(!expresiones.name.test(e.target.value)){
            autorLibro.classList.add('error')
            spanAutor.classList.remove('invisible');
            spanAutor.classList.add('visible');
        }else{
            autorLibro.classList.remove('error')
            spanAutor.classList.add('invisible');
            spanAutor.classList.remove('visible');
            sinopsisLibro.focus();
        }
    });
    sinopsisLibro.addEventListener('blur', (e)=>{
        if(!expresiones.titulo.test(e.target.value)){
            sinopsisLibro.classList.add('error');
            spanSinopsis.classList.remove('invisible');
            spanSinopsis.classList.add('visible');
            
        }else{
            sinopsisLibro.classList.remove('error');
            spanSinopsis.classList.add('invisible');
            spanSinopsis.classList.remove('visible');
            precioLibro.focus();
        }
    });
    precioLibro.addEventListener('blur', (e)=>{
        if(!expresiones.precio.test(e.target.value)){
            precioLibro.classList.add('error');
            spanPrecio.classList.remove('invisible');
            spanPrecio.classList.add('visible');
            
        }else{
            precioLibro.classList.remove('error');
            spanPrecio.classList.add('invisible');
            spanPrecio.classList.remove('visible');
            edicionLibro.focus();
        }
    });
    edicionLibro.addEventListener('blur', (e)=>{
        if(!expresiones.edicion.test(e.target.value)){
            edicionLibro.classList.add('error');
            spanEdicion.classList.remove('invisible');
            spanEdicion.classList.add('visible');
            
        }else{
            edicionLibro.classList.remove('error');
            spanEdicion.classList.add('invisible');
            spanEdicion.classList.remove('visible');
            paginasLibro.focus();
        }
    });
    paginasLibro.addEventListener('blur', (e)=>{
        if(!expresiones.paginas.test(e.target.value)){
            paginasLibro.classList.add('error');
            spanPaginas.classList.remove('invisible');
            spanPaginas.classList.add('visible');
            
        }else{
            paginasLibro.classList.remove('error');
            spanPaginas.classList.add('invisible');
            spanPaginas.classList.remove('visible');
            idiomaLibro.focus();
        }
    });
    idiomaLibro.addEventListener('blur', (e)=>{
        if(!expresiones.idioma.test(e.target.value)){
            idiomaLibro.classList.add('error');
            spanIdioma.classList.remove('invisible');
            spanIdioma.classList.add('visible');
            
        }else{
            idiomaLibro.classList.remove('error');
            spanIdioma.classList.add('invisible');
            spanIdioma.classList.remove('visible');
            presentacionLibro.focus();
        }
    });
    presentacionLibro.addEventListener('blur', (e)=>{
        if(!expresiones.presentacion.test(e.target.value)){
            presentacionLibro.classList.add('error');
            spanPresentacion.classList.remove('invisible');
            spanPresentacion.classList.add('visible');
            
        }else{
            presentacionLibro.classList.remove('error');
            spanPresentacion.classList.add('invisible');
            spanPresentacion.classList.remove('visible');
        }
    });
});