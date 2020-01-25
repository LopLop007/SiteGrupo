function expandir(arg) {

	var imagens = ['imagens/imgslide_1.jpg','imagens/imgslide_2.jpg','imagens/imgslide_3.jpg','imagens/imgslide_4.jpeg',
	'imagens/imgslide_5.jpeg','imagens/imgslide_6.jpeg','imagens/imgslide_7.jpg','imagens/imgslide_8.jpg',
	'imagens/imgslide_9.jpg','imagens/imgslide_10.jpg','imagens/imgslide_11.jpg','imagens/imgslide_12.jpg']


	document.getElementById("img_exp").style.visibility = "visible"

	document.getElementById("img").innerHTML = `<img src= ${imagens[arg - 1]} width='800px' class="img-fluid">`


}


function normal(){

	document.getElementById("img_exp").style.visibility = "hidden"

}

