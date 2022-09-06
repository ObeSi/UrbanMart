const header = document.querySelector('.container_1 .navbar');
document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 1) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

var menuList = document.getElementById('menuList');
var links = document.getElementById('show');
var links1 = document.getElementById('show1');
var links2 = document.getElementById('show2');


menuList.style.visibility='hidden';
// links.style.visibility='hidden';
// links1.style.visibility='hidden';
// links2.style.visibility='hidden';




function togglemenu(){

	if(menuList.style.visibility=='hidden'){
		menuList.style.visibility='visible';
		links.style.visibility='visible';
		links1.style.visibility='visible';
		links2.style.visibility='visible';
		
	}
	else{
		menuList.style.visibility='hidden';
		links.style.visibility='hidden';
		links1.style.visibility='hidden';
		links2.style.visibility='hidden';
	}

}

