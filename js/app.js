"use strict"


const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	Mobile: function () {
		return navigator.userAgent.search(/mobile/i);
	},
	any: function () {
		return ((isMobile.Android() || isMobile.BlackBerry()) || (isMobile.iOS() || isMobile.Opera()) || (isMobile.Windows() || isMobile.Mobile() > 0));
	}
}
if (isMobile.any()) {
	document.body.classList.add("_touch");
} else {
	document.body.classList.add("_pc");
}
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAQAcJaQAA3AA/v3AgAA=';
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	}
});

function ibg() {
	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector("img")) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	};
}
ibg();
const button = document.querySelector('._button-spoiler');
const container = document.querySelector('._container-spoiler');


button.addEventListener('click', () => {
	container.style.minHeight = 32 + "px";
	if (container.classList.contains('container--active')) {
		container.classList.remove('container--active');
		container.style.minHeight = 32 + "px";
	} else {
		container.classList.add('container--active');

	}
	if (container.classList.contains('container--active')) {
		container.style.minHeight = container.scrollHeight + 'px';
	}
});
//добавить к элементу active rtansition: all 0.3s ease 0;

//если в контейнере есть выбранный элемент добавить это
const arrow = document.querySelector(".footer__arrow");//кнопка переключение спойлера
let conLang = document.querySelector(".footer__language");//items в контейнере
const wrap = document.querySelector(".footer__wrap-language");//наружняя оболочка контейнера
const items = document.querySelectorAll(".footer__language-item");//все items  в контейнере
arrow.onclick = function () {
	arrow.classList.toggle("_active");
	conLang.classList.toggle("_active");
}
wrap.onclick = function (event) {
	let e = event.target;
	for (let index = 0; index < items.length; index++) {
		const item = items[index];

		if (item.contains(e)) {

			item.classList.add("_active");
			arrow.classList.remove("_active");
			container.classList.remove('container--active');
			container.style.minHeight = 32 + "px";
		} else {
			item.classList.remove("_active");
		}
	}
}








