const getRemainTime = deadline => {
	let now = new Date (),
		remainTime = (new Date(deadline) - now + 1000) / 1000,
		remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
		remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
		remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
		remainDays = Math.floor(remainTime / (3600 * 24));

	return{
		remainTime, 
		remainSeconds ,
		remainMinutes ,
		remainHours ,
		remainDays ,
	}

	};
	const countdown = (deadline, elem, finalMessage) => {
		const el = document.getElementById(elem);
		
		const timeUpdate = setInterval( () =>{
			let t = getRemainTime(deadline);
			el.innerHTML = `			
			<h2>El compte enrere Fins la final!</h2>
			<div class="contenedor-contador"> 

			<div class="contenido-contador">
			${t.remainDays} <p style= "font-size:0.4em;">díes </p>
			</div>
			<div class="contenido-contador"> 
			${t.remainHours} <p style= "font-size:0.4em;">hores</p> 
			</div>
			<div class="contenido-contador"> 
			${t.remainMinutes} <p style= "font-size:0.4em;">minuts </p>
			</div> 
			<div class="contenido-contador"> 
			${t.remainSeconds} <p style= "font-size:0.4em;">segons </p>
			</div> 
			</div>`;

		if (t.remainTime <= 1) {
			clearInterval(timeUpdate);
			el.innerHTML = finalMessage;
			};
		},1000)

	}; 

	countdown('Sat May 22 2021 21:30:00 GMT+0100 (hora estándar de Europa central)', 'clock', 'Comença la final!');
