//Sign up page, "submit profile" opens the Home Page "Task ++"

//Home Page Task++
	//Profile parent

	//profile child 


	





















// open parent model on homepage
$('...').on('click', function(){
	//open modal
	//tabs and other text shoud be html coded in
	//print to page a table of tasks added through firebase below
})



// Initialize Firebase. using jweber's account
var config = {
	apiKey: "AIzaSyAK-qjUvGITwuDH2saZ_RItobLK_VLWuBY",
	authDomain: "task-app-300e2.firebaseapp.com",
	databaseURL: "https://task-app-300e2.firebaseio.com",
	projectId: "task-app-300e2",
	storageBucket: "task-app-300e2.appspot.com",
	messagingSenderId: "612765168866"
};

firebase.initializeApp(config);

var database = firebase.database();


// ----------------Adding tasks to the task list


//when the modal is open and user selects add task
$('#addTask').on('click', function(){
	//task inout panel is now .show()
	$('#taskPanel').show();
});


//User has entered in text for a new task and clicks apply. changes are registerest and pushed to firebase and back to html page
$('#applyTask').on("click", function (event) {
	event.preventDefault(); 

	// Grabs user input
	var taskName = $("...").val().trim();
	var taskReward = $("...").val().trim();
	var taskDueBy = $("...").val().trim();
		
	// Create object to hold task data this links to firebase as the data in firebase is in object format
	var newTask = {
		name: taskName,
		reward: taskReward,
		dueBy: taskDueBy,
	};

	// Uploads task data to the database. pushes task data into the object above
	database.ref().push(newTask);

	// test to make sure it works
	console.log("Task Name: " + newTask.name);
	console.log("Task Reward: " + newTask.reward);
	console.log("Task Due By: " + newTask.dueBy);

	// Clears all of the input boxes
	$("...").val("");
	$("...").val("");
	$("...").val("");
});



// -------Create Firebase event for adding tasks to the database and a row in the html when a user adds an entry

	database.ref().on("child_added", function (snapshot) {

	console.log(snapshot.val());

	// Store user task input data into a variable. This is for firebase.
	var taskName = snapshot.val().name;
	var taskReward = snapshot.val().reward;
	var taskDueBy = snapshot.val().dueBy;

	// test to make sure it works
	console.log(taskName);
	console.log(taskReward);
	console.log(taskDueBy);

	//append data to parent page
	$('...').append("<tr><td>" + taskName + "</td><td>" + taskReward + "</td><td>" +
	taskDueBy + (edit icon) + (trach icon) + "</td></tr>");

	//append data to child page
	$('...').append("<tr><td>" + (check box icon) + taskName + "</td><td>" + "</td><td>" +
	taskDueBy + (more info icon) +"</td></tr>");
});