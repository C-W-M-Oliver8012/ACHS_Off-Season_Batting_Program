function createH1Tag (textString)
{
	let title = document.createElement ("h1");
	title.id = textString;
	let text = document.createTextNode(textString);
	title.appendChild (text);

	document.body.appendChild (title);
}

function createH2Tag (textString)
{
	let title = document.createElement ("h2");
	title.id = textString;
	let text = document.createTextNode(textString);
	title.appendChild (text);

	document.body.appendChild (title);
}

function createLink (textString, url)
{
	let link = document.createElement ("a");
	link.innerHTML = textString;
	link.href = url;
	link.id = textString;
	link.target = "_blank";
	document.body.appendChild (link);
}

function createButton (textString)
{
	let button = document.createElement ("button");
	button.id = textString;
	button.className = "button";
	let text = document.createTextNode (textString);
	button.appendChild (text);

	if (textString != "Tutorials" && textString != "Times Completed Editor")
	{
		for (let i = 1; i < 13; i++)
		{
			if (textString === "Week " + i)
			{
				if (localStorage.getItem ("Week " + i))
				{
					let br = document.createElement ("br");
					let timesCompleted = document.createTextNode ("Times Completed: " + localStorage.getItem ("Week " + i));
					button.appendChild (br);
					button.appendChild (timesCompleted);
				}
				else
				{
					let br = document.createElement ("br");
					localStorage.setItem ("Week " + i, 0);
					let timesCompleted = document.createTextNode ("Times Completed: " + localStorage.getItem ("Week " + i));
					button.appendChild (br);
					button.appendChild (timesCompleted);
				}
			}
		}
	}

	if (textString === "Velocity Tracker")
	{
		button.addEventListener ("click", function (){ deleteHomePage (); createVelocityTrackerPage () });
	}
	else if (textString === "Editor")
	{
		button.addEventListener ("click", function (){ deleteHomePage (); createTimesCompletedEditor (); });
	}
	else if (textString === "Tutorials")
	{
		button.addEventListener ("click", function (){ deleteHomePage (); createTutorialsPage (); });
	}
	if (textString === "Week 1")
	{
		button.addEventListener ("click", function (){ deleteHomePage (); createWorkoutPage (week1); });
	}
	else if (textString === "Week 2")
	{
		button.addEventListener ("click", function (){ deleteHomePage (); createWorkoutPage (week2); });
	}
	else if (textString === "Week 3")
	{
		button.addEventListener ("click", function (){ deleteHomePage (); createWorkoutPage (week3); });
	}
	else if (textString === "Week 4")
	{
		button.addEventListener ("click", function (){ deleteHomePage (); createWorkoutPage (week4); });
	}
	else if (textString === "Week 5")
	{
		button.addEventListener ("click", function (){ deleteHomePage (); createWorkoutPage (week5); });
	}
	else if (textString === "Week 6")
	{
		button.addEventListener ("click", function (){ deleteHomePage (); createWorkoutPage (week6); });
	}
	else if (textString === "Week 7")
	{
		button.addEventListener ("click", function (){ deleteHomePage (); createWorkoutPage (week7); });
	}
	else if (textString === "Week 8")
	{
		button.addEventListener ("click", function (){ deleteHomePage (); createWorkoutPage (week8); });
	}
	else if (textString === "Week 9")
	{
		button.addEventListener ("click", function (){ deleteHomePage (); createWorkoutPage (week9); });
	}
	else if (textString === "Week 10")
	{
		button.addEventListener ("click", function (){ deleteHomePage (); createWorkoutPage (week10); });
	}
	else if (textString === "Week 11")
	{
		button.addEventListener ("click", function (){ deleteHomePage (); createWorkoutPage (week11); });
	}
	else if (textString === "Week 12")
	{
		button.addEventListener ("click", function (){ deleteHomePage (); createWorkoutPage (week12); });
	}

	document.body.appendChild (button);
}

function createWorkoutBackButton (week)
{
	let button = document.createElement ("button");
	button.id = "back";
	button.className = "back";
	let text = document.createTextNode ("Back");
	button.appendChild (text);
	button.addEventListener ("click", function (){ deleteWorkoutPage (week); createHomePage (); });
	document.body.appendChild (button);
}

function createTutorialsBackButton ()
{
	let button = document.createElement ("button");
	button.id = "back";
	button.className = "back";
	let text = document.createTextNode ("Back");
	button.appendChild (text);
	button.addEventListener ("click", function (){ deleteTutorialsPage (); createHomePage (); });
	document.body.appendChild (button);
}

function createEditorBackButton ()
{
	let button = document.createElement ("button");
	button.id = "back";
	button.className = "back";
	let text = document.createTextNode ("Back");
	button.appendChild (text);
	button.addEventListener ("click", function (){ deleteTimesCompletedEditor (); createHomePage (); });
	document.body.appendChild (button);
}

function createVelocityBackButton ()
{
	let button = document.createElement ("button");
	button.id = "back";
	button.className = "back";
	let text = document.createTextNode ("Back");
	button.appendChild (text);
	button.addEventListener ("click", function (){ deleteVelocityTrackerPage (); createHomePage (); });
	document.body.appendChild (button);
}
