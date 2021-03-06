let numClicked = 0;
let hasBeenInc = false;

createHomePage ();

function createHomePage ()
{
	scroll (0, 0);
	createH1Tag ("ACHS Off-Season Batting Program");
	createButton ("Velocity Tracker");
	createButton ("Editor");
	createButton ("Tutorials");
	createButton ("Week 1");
	createButton ("Week 2");
	createButton ("Week 3");
	createButton ("Week 4");
	createButton ("Week 5");
	createButton ("Week 6");
	createButton ("Week 7");
	createButton ("Week 8");
	createButton ("Week 9");
	createButton ("Week 10");
	createButton ("Week 11");
	createButton ("Week 12");
	numClicked = 0;
	hasBeenInc = false;
}

function deleteHomePage ()
{
	document.getElementById ("ACHS Off-Season Batting Program").remove ();
	document.getElementById ("Velocity Tracker").remove ();
	document.getElementById ("Editor").remove ();
	document.getElementById ("Tutorials").remove ();
	document.getElementById ("Week 1").remove ();
	document.getElementById ("Week 2").remove ();
	document.getElementById ("Week 3").remove ();
	document.getElementById ("Week 4").remove ();
	document.getElementById ("Week 5").remove ();
	document.getElementById ("Week 6").remove ();
	document.getElementById ("Week 7").remove ();
	document.getElementById ("Week 8").remove ();
	document.getElementById ("Week 9").remove ();
	document.getElementById ("Week 10").remove ();
	document.getElementById ("Week 11").remove ();
	document.getElementById ("Week 12").remove ();
}

function createVelocityTrackerPage ()
{
	scroll(0, 0);
	createVelocityBackButton ();
	createH1Tag ("Velocity Tracker");

	let select = document.createElement ("select");
	select.id = "Week Selection";
	select.name = "weeks";

	select.addEventListener("change", function (){
		document.getElementById ("WeekNum").innerHTML = select.value;
		
		for (let i = 0; i < 5; i++)
		{
			let input = document.getElementById ("BL" + i);
			if (localStorage.getItem (weekNum.innerHTML + input.id))
			{
				input.value = localStorage.getItem (weekNum.innerHTML + input.id);
			}
			else 
			{
				localStorage.setItem (weekNum.innerHTML + input.id, 0);
				input.value = localStorage.getItem (weekNum.innerHTML + input.id);
			}
		}

		for (let i = 0; i < 5; i++)
		{
			let input = document.getElementById ("HL" + i);
			if (localStorage.getItem (weekNum.innerHTML + input.id))
			{
				input.value = localStorage.getItem (weekNum.innerHTML + input.id);
			}
			else 
			{
				localStorage.setItem (weekNum.innerHTML + input.id, 0);
				input.value = localStorage.getItem (weekNum.innerHTML + input.id);
			}
		}

		for (let i = 0; i < 5; i++)
		{
			let input = document.getElementById ("U" + i);
			if (localStorage.getItem (weekNum.innerHTML + input.id))
			{
				input.value = localStorage.getItem (weekNum.innerHTML + input.id);
			}
			else 
			{
				localStorage.setItem (weekNum.innerHTML + input.id, 0);
				input.value = localStorage.getItem (weekNum.innerHTML + input.id);
			}
		}

		for (let i = 0; i < 5; i++)
		{
			let input = document.getElementById ("R" + i);
			if (localStorage.getItem (weekNum.innerHTML + input.id))
			{
				input.value = localStorage.getItem (weekNum.innerHTML + input.id);
			}
			else 
			{
				localStorage.setItem (weekNum.innerHTML + input.id, 0);
				input.value = localStorage.getItem (weekNum.innerHTML + input.id);
			}
		}
	})

	document.body.appendChild (select);
	let weekNum = document.createElement ("h1");
	weekNum.id = "WeekNum";
	weekNum.innerHTML = "Week 1";
	document.body.appendChild (weekNum);

	createH2Tag ("BL Bat Velocities");
	for (let i = 0; i < 5; i++)
	{
		let input = document.createElement ("input");
		input.id = "BL" + i;
		input.type = "number";
		if (localStorage.getItem (weekNum.innerHTML + input.id))
		{
			input.value = localStorage.getItem (weekNum.innerHTML + input.id);
		}
		else 
		{
			localStorage.setItem (weekNum.innerHTML + input.id, 0);
			input.value = localStorage.getItem (weekNum.innerHTML + input.id);
		}
		document.body.appendChild (input);
	}

	createH2Tag ("HL Bat Velocities");
	for (let i = 0; i < 5; i++)
	{
		let input = document.createElement ("input");
		input.id = "HL" + i;
		input.type = "number";
		if (localStorage.getItem (weekNum.innerHTML + input.id))
		{
			input.value = localStorage.getItem (weekNum.innerHTML + input.id);
		}
		else 
		{
			localStorage.setItem (weekNum.innerHTML + input.id, 0);
			input.value = localStorage.getItem (weekNum.innerHTML + input.id);
		}
		document.body.appendChild (input);
	}

	createH2Tag ("U Bat Velocities");
	for (let i = 0; i < 5; i++)
	{
		let input = document.createElement ("input");
		input.id = "U" + i;
		input.type = "number";
		if (localStorage.getItem (weekNum.innerHTML + input.id))
		{
			input.value = localStorage.getItem (weekNum.innerHTML + input.id);
		}
		else 
		{
			localStorage.setItem (weekNum.innerHTML + input.id, 0);
			input.value = localStorage.getItem (weekNum.innerHTML + input.id);
		}
		document.body.appendChild (input);
	}

	createH2Tag ("R Bat Velocities");
	for (let i = 0; i < 5; i++)
	{
		let input = document.createElement ("input");
		input.id = "R" + i;
		input.type = "number";
		if (localStorage.getItem (weekNum.innerHTML + input.id))
		{
			input.value = localStorage.getItem (weekNum.innerHTML + input.id);
		}
		else 
		{
			localStorage.setItem (weekNum.innerHTML + input.id, 0);
			input.value = localStorage.getItem (weekNum.innerHTML + input.id);
		}
		document.body.appendChild (input);
	}

	for (let i = 1; i < 13; i++) 
	{
		let option = document.createElement ("option");
		option.id = "Week " + i;
		option.value = "Week " + i;
		option.innerHTML = "Week " + i;

		select.appendChild (option);
	}

	let submit = document.createElement ("button");
	submit.id = "submit";
	submit.className = "button";
	submit.innerHTML = "Submit";
	submit.addEventListener ("click", function () {
		for (let i = 0; i < 5; i++)
		{
			let input1 = document.getElementById ("BL" + i);
			let input2 = document.getElementById ("HL" + i);
			let input3 = document.getElementById ("U" + i);
			let input4 = document.getElementById ("R" + i);
			localStorage.setItem (weekNum.innerHTML + input1.id, input1.value);
			localStorage.setItem (weekNum.innerHTML + input2.id, input2.value);
			localStorage.setItem (weekNum.innerHTML + input3.id, input3.value);
			localStorage.setItem (weekNum.innerHTML + input4.id, input4.value);
		}
		window.alert("Submitted!");
	})

	document.body.appendChild (submit);
}

function deleteVelocityTrackerPage ()
{
	document.getElementById ("back").remove ();
	document.getElementById ("Velocity Tracker").remove ();
	document.getElementById ("Week Selection"). remove ();
	document.getElementById ("WeekNum").remove ();
	document.getElementById ("BL Bat Velocities").remove ();
	document.getElementById ("HL Bat Velocities").remove ();
	document.getElementById ("U Bat Velocities").remove ();
	document.getElementById ("R Bat Velocities").remove ();

	for (let i = 0; i < 5; i++)
	{
		document.getElementById ("BL" + i).remove ();
		document.getElementById ("HL" + i).remove ();
		document.getElementById ("U" + i).remove ();
		document.getElementById ("R" + i).remove ();
	}

	document.getElementById ("submit").remove ();
}

function createTimesCompletedEditor ()
{
	scroll (0, 0);
	createEditorBackButton ();
	createH1Tag ("Times Completed Editor");

	let hr = document.createElement ("hr");
	hr.id = "hr";
	document.body.appendChild (hr);

	for (let i = 1; i < 13; i++)
	{
		createH2Tag ("Week " + i);
		let input = document.createElement ("input");
		input.id = "input" + i;
		input.type = "number";
		input.value = localStorage.getItem ("Week " + i);
		document.body.appendChild (input);

		let hr = document.createElement ("hr");
		hr.id = "hr" + i;
		document.body.appendChild (hr);
	}

	let button = document.createElement ("button");
	button.className = "button";
	let text = document.createTextNode ("Submit");
	button.id = "submitButton";
	button.appendChild (text);
	button.addEventListener ("click", function () {
		for (let i = 1; i < 13; i++)
		{
			let input = document.getElementById ("input" + i);
			localStorage.setItem ("Week " + i, input.value);
		}

		window.alert ("Submitted!");
	});

	document.body.appendChild (button);
}

function deleteTimesCompletedEditor ()
{
	document.getElementById ("back").remove ();
	document.getElementById ("Times Completed Editor").remove ();
	document.getElementById ("hr").remove ();

	for (let i = 1; i < 13; i++)
	{
		document.getElementById ("Week " + i).remove ();
		document.getElementById ("input" + i).remove ();
		document.getElementById ("hr" + i).remove ();
	}

	document.getElementById ("submitButton").remove ();
}

function createTutorialsPage ()
{
	scroll (0, 0);
	createTutorialsBackButton ();
	createH1Tag ("Tutorials");
	createLink ("Walk Through Drill", "https://www.youtube.com/watch?v=9BsRj3u5HQs&amp%3Blist=PLGSlrSk6rBqJln7y04FOQ_mkJuTyAGlcl&amp%3Bindex=3");
	createLink ("Rocker Drill", "https://www.youtube.com/watch?v=dkdWe-jdATk&list=PLGSlrSk6rBqJln7y04FOQ_mkJuTyAGlcl&index=6");
	createLink ("Shuffle Swings", "https://www.youtube.com/watch?v=-LRcQhTa7TU&list=PLGSlrSk6rBqJln7y04FOQ_mkJuTyAGlcl&index=8");
	createLink ("Overhand Approach", "https://www.youtube.com/watch?v=lqxvizEN69M&list=PLGSlrSk6rBqJln7y04FOQ_mkJuTyAGlcl&index=7");
	createH1Tag ("Program Key");

	let bl = document.createElement ("p");
	bl.id = "bl";
	bl.className = "BL";
	bl.innerHTML = "BL = Barrel Loaded Bat";

	let hl = document.createElement ("p");
	hl.id = "hl";
	hl.className = "HL";
	hl.innerHTML = "HL = Hand Loaded Bat";

	let u = document.createElement ("p");
	u.id = "u";
	u.className = "U";
	u.innerHTML = "U = Underloaded Bat";

	let r = document.createElement ("p");
	r.id = "r";
	r.className = "R";
	r.innerHTML = "R = Regular Bat";

	document.body.appendChild (bl);
	document.body.appendChild (hl);
	document.body.appendChild (u);
	document.body.appendChild (r);
}

function deleteTutorialsPage ()
{
	document.getElementById ("back").remove ();
	document.getElementById ("Tutorials").remove ();
	document.getElementById ("Walk Through Drill").remove ();
	document.getElementById ("Rocker Drill").remove ();
	document.getElementById ("Shuffle Swings").remove ();
	document.getElementById ("Overhand Approach").remove ();
	document.getElementById ("Program Key").remove ();
	document.getElementById ("bl").remove ();
	document.getElementById ("hl").remove ();
	document.getElementById ("u").remove ();
	document.getElementById ("r").remove ();
}

function createWorkoutPage (week)
{
	scroll (0, 0);
	createWorkoutBackButton (week);
	createH1Tag (week.title);
	createH2Tag (week.description);
	let hr = document.createElement ("hr");
	hr.id = "hr0";
	document.body.appendChild (hr);
	for (let i = 0; i < week.length; i++)
	{
		createH2Tag (week[i].name);
		let table_container = document.createElement ("div");
		table_container.id = "table_container" + i;
		table_container.className = "table_container";
		let table = document.createElement ("table");
		let row = table.insertRow (0);
		let col1 = row.insertCell (0);
		col1.innerHTML = "BL";
		col1.className = "BL";
		let col2 = row.insertCell (1);
		col2.innerHTML = "HL";
		col2.className = "HL";
		let col3 = row.insertCell (2);
		col3.innerHTML = "U";
		col3.className = "U";
		let col4 = row.insertCell (3);
		col4.innerHTML = "R";
		col4.className = "R";
		row = table.insertRow (1);
		row.insertCell (0).innerHTML = week[i].BL;
		row.insertCell (1).innerHTML = week[i].HL;
		row.insertCell (2).innerHTML = week[i].U;
		row.insertCell (3).innerHTML = week[i].R;
		table_container.appendChild (table);
		document.body.appendChild (table_container);

		let label = document.createElement ("label");
		label.id = "label" + i;
		label.className = "switch";
		let input = document.createElement ("input");
		input.type = "checkbox";
		input.addEventListener ("change", function () {
			if (input.checked === true && hasBeenInc === false)
			{
				numClicked++;
			}
			else if (input.checked === false && hasBeenInc === false)
			{
				numClicked--
			}

			if (numClicked === week.length && hasBeenInc === false)
			{
				hasBeenInc = true;
				window.alert ("Completed!");

				for (let i = 1; i < 13; i++)
				{
					if (week.title === "Week " + i)
					{
						let num = localStorage.getItem ("Week " + i);
						num++;
						localStorage.setItem ("Week " + i, num);
					}
				}
			}
		});
		let span = document.createElement ("span");
		span.className = "slider";

		label.appendChild (input);
		label.appendChild (span);
		document.body.appendChild (label);

		let hr = document.createElement ("hr");
		hr.id = "hr" + i;
		document.body.appendChild (hr);
	}
}

function deleteWorkoutPage (week)
{
	document.getElementById ("back").remove ();
	document.getElementById (week.title).remove ();
	document.getElementById (week.description).remove ();
	document.getElementById ("hr0").remove ();
	for (let i = 0; i < week.length; i++)
	{
		document.getElementById (week[i].name).remove ();
		document.getElementById ("table_container" + i).remove ();
		document.getElementById ("label" + i). remove ();
		document.getElementById ("hr" + i).remove ();
	}
}
