let App = {
	fullname : "Montenegro Eliseo",
	languajes : [
		{
			caption : "Spanish",
			img: "img/spanish.png"
		},
		{
			caption : "English",
			img: "img/english.png"
		},{
			caption : "Italiano",
			img: "img/italian.png"
		},
	],
	technologies : [
		{
			caption : "Java",
			img : "img/java.png"
		},
		{
			caption : "Spring Framework",
			img : "img/spring-logo.png"
		},
		{
			caption : "Spring Boot",
			img : "img/spring-boot.png"
		},
		{
			caption : "Spring Security",
			img : "img/spring-security.png"
		},
		{
			caption : "Maven",
			img : "img/maven.png"
		},
		{
			caption : "JWT",
			img : "img/jwt.png"
		},
		{
			caption : "Swagger",
			img : "img/swagger.png"
		},
		{
			caption : "MapStruct",
			img : "img/mapstruct.png"
		},
		{
			caption : "Git",
			img : "img/git.png"
		},
		{
			caption : "HTML5",
			img : "img/html5.png"
		},
		{
			caption : "CSS3",
			img : "img/css.png"
		},
		{
			caption : "JavaScript",
			img : "img/javascript.png"
		},
		{
			caption : "Python",
			img : "img/python.png"
		}
	]
};

function setup(){
	handleInitialize();
}

function start(){
	let container = document.getElementById("container2");
	for(let i = 0; i < App.technologies.length; i++){
		let div = document.createElement("div");
		div.classList.toggle("card");
		let img = document.createElement("img");
		img.src =  App.technologies[i].img;
		img.classList.toggle("card-icon");
		div.appendChild(img);
		let h3 = document.createElement("h3");
		h3.innerText = App.technologies[i].caption;
		div.appendChild(h3);
		container.appendChild(div);
	}
}

function handleInitialize(){
	document.body.onload = function(){
		start();
	};
}

function show(e){
	let btns = document.getElementsByClassName("tab-button");
	let tabs = document.getElementsByClassName("content-body");
	for (let i = 0; i<btns.length; i++){
		if (btns[i].classList.contains("active")){
			btns[i].classList.remove("active");
		}
		if (tabs[i].classList.contains("active")){
			tabs[i].classList.remove("active");
		}
	}
	btns[e].classList.toggle("active");
	tabs[e].classList.toggle("active");
}

setup();