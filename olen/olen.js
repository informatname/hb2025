//2024.07.18 1.2


document.addEventListener("DOMContentLoaded",
	function () {
		var OlenSayHTML = "Чем помочь?";

		function OlenSay() {
			var ID = document.getElementById("OlenSay");
			ID.querySelector("span.Olen").scrollIntoView(true);
			ID.classList.toggle("OlenSayOpen");
			let event = new Event("resize");
            window.dispatchEvent(event);
		}

		var ID = document.getElementById("OlenDiv");
		if (ID) {
			OlenSayHTML = ID.innerHTML;
			ID.innerHTML = "   <div class='olen' id='olenSay'>"+ OlenSayHTML + "</div><img id='OlenImg' src='olen/olen.gif' />";
		}
		else {
			var IDtmp = document.getElementsByTagName("body")[0];
			IDtmp.innerHTML += "<div class='Olen' id='OlenDiv'><div class='olen' id='olenSay'>Поздравляю!</div><img id='OlenImg' src='olen/olen.gif' /></div>";
		}

		var IDdeerDIV = document.getElementById('OlenDiv');
		IDdeerDIV.classList.add("OlenDiv");
		var IDdeer = document.getElementById('olenSay');
		IDdeer.classList.add("div#OlenSay");
		var IDdeer = document.getElementById('OlenImg');
		IDdeer.classList.add("OlenImg");

		var link = document.createElement("link");
		link.setAttribute("rel", "stylesheet");
		link.setAttribute("type", "text/css");
		link.setAttribute("href", "olen/olen.css");
		document.getElementsByTagName("head")[0].appendChild(link);

		console.log("Олень старт... " + IDdeer.classList.contains("Olen"));
		OlenSay();
		IDdeerDIV.addEventListener("click", OlenSay);
	}
);
