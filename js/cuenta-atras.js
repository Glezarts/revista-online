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
			el.innerHTML = `<div style="display:flex;
										max-width:400px"> 
			<div style="background-color:white;
			margin:0px 3px 0px 1px;
			font-size:1em; 
			padding:10px 17px; 
			font-family: 'Gill Sans','Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; 
			text-align: center; 
            font-weight:bold; 
            color:black;
			box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.125);">
			${t.remainDays} díes 
			</div>
			<div style="background-color:white;
			margin:0px 3px;
			font-size:1em; 
			padding:10px 17px; 
			font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
			text-align: center; 
            font-weight:bold; 
            color:black;
			box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.125)"> 
			${t.remainHours} hores 
			</div>
			<div style="background-color:white;
			margin:0px 3px;
			font-size:1em; 
			padding:10px 17px; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; 
			text-align: center; 
            font-weight:bold;
            color:black;
			box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.125)"> 
			${t.remainMinutes} minuts 
			</div> 
			<div style="background-color:white;
			margin:0px 0px 0px 3px;
			font-size:1em; 
			padding:10px 17px; 
			font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; 
			text-align: center; 
            font-weight:bold; 
            color:black;
			box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.125)"> 
			${t.remainSeconds} segons 
			</div> 
			</div>`;

		if (t.remainTime <= 1) {
			clearInterval(timeUpdate);
			el.innerHTML = finalMessage;
			};
		},1000)

	}; 

	countdown('Fri May 21 2021 21:30:00 GMT+0100 (hora estándar de Europa central)', 'clock', 'Comença la final!');
