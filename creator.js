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
	if (textString === "Tutorials")
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
