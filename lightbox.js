var links = document.querySelectorAll('.lightbox');
    linksLen = links.length;
    
    // on numérote chaque image pour la navigation
for (var i = 0; i < linksLen; i++) {
	links[i].id = i;
}
 
for (var i = 0 ; i < linksLen ; i++) {
 
    links[i].addEventListener('click', function(e) {
        e.preventDefault(); // On bloque la redirection
	        // On appelle notre fonction pour afficher les images
        // currentTarget est utilisé pour cibler le lien et non l'image
        displayImg(e.currentTarget);
    }, false);
 
}
 
function displayImg(link) {

    var img = new Image(),
    overlay = document.getElementById('overlay');
 
    img.addEventListener('load', function() {
 
    // creation deux éléments contenant les flèches de navigation	 
	var prev = document.createElement('span');
	prev.id = 'lbox-nav-prev';
	var next = document.createElement('span');
	next.id = 'lbox-nav-next'; 
	
	// element de fermeture
	var close = document.createElement('span');
	close.id = 'lbox-close';
 
	overlay.innerHTML = '';
	overlay.appendChild(img);
	overlay.appendChild(next); 
	overlay.appendChild(prev);
	overlay.appendChild(close);
	
	// clique sur la flèche gauche pour image précédente
	prev.addEventListener('click', function(e) {
		x = link.getAttribute('id');

		newlink = document.getElementById(x-1);
		displayImg(newlink);	
	    	    
	}, false);
	
	// clique sur la flèche droite pour image suivante
	next.addEventListener('click', function(e) {
		y = link.getAttribute('id');
		position = parseInt(y);
		newlink = document.getElementById(position+1);
		
		displayImg(newlink);	
	    	    
	}, false);
	
	// pour fermer le conteneur
	close.addEventListener('click', function(e) {
	
		document.getElementById('overlay').style.display = 'none';
    	    
	}, false);
	
	
 }, false);
 
	img.style.maxHeight = '75%';
	img.style.maxWidth = '75%';
    	img.src = link.href;
	overlay.style.display = 'block'
	
}
 
