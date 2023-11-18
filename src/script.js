function adicionarAnime(){
  var animeFavorito = document.getElementById('anime').value;
  // Criei um outro input para adicionar os links
  var anilist = document.getElementById('anilist').value;
  // Verifica se contem uma imagem em formato jpg
  if(animeFavorito.includes('.jpg')){
    var elementoListaAnimes = document.getElementById('listaAnimes');
  elementoListaAnimes.innerHTML = elementoListaAnimes.innerHTML + '<a href=' +anilist+ '><img src =' +animeFavorito+ '></a>';
  document.getElementById('anime').value = '';
  document.getElementById('anilist').value = '';
  } else {
    alert('adicione uma imagem');
  }
}