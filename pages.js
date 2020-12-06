createHomePage ();

function createHomePage ()
{
	createH1Tag ("ACHS Off-Season Batting Program");
	createButton ("Tutorials");
	createButton ("Week 1");
	createButton ("Week 2");
	createButton ("Week 3");
	createButton ("Week 4");
	createButton ("Week 5");
	createButton ("Week 6");
}

function deleteHomePage ()
{
	document.getElementById ("ACHS Off-Season Batting Program").remove ();
	document.getElementById ("Tutorials").remove ();
	document.getElementById ("Week 1").remove ();
	document.getElementById ("Week 2").remove ();
	document.getElementById ("Week 3").remove ();
	document.getElementById ("Week 4").remove ();
	document.getElementById ("Week 5").remove ();
	document.getElementById ("Week 6").remove ();
}

function createTutorialsPage ()
{
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
	createWorkoutBackButton (week);
	createH1Tag (week.title);
	createH2Tag (week.description);
	let hr = document.createElement ("hr");
	hr.id = "hr0";
	document.body.appendChild (hr);
	for (let i = 0; i < week.length; i++)
	{
		createH2Tag (week[i].name);
		let table = document.createElement ("table");
		table.id = i;
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
		document.body.appendChild (table);
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
		document.getElementById (i).remove ();
		document.getElementById ("hr" + i).remove ();
	}
}
