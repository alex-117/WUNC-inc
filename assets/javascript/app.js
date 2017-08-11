//Sign up page, "submit profile" opens the Home Page "Task ++"(only if we have time to html)

//Home Page Task++ --------------------------
	//MANAGE TASKS
		//onclick to opens modal **with passcode?**
			//modal contents
				//CURRENT DATE PRINT
				//user tabs(to select which child to add task to)
				//add new user
				//table linked to firebase(to append tasks)
				//add task +(onclick to show add task form with apply button)
					//apply appends table with new task and adds task to user profile through firebase)
				//  close button onclick (will close the modal)
				


	





//html js
$( document ).ready(function(){
	$(".button-collapse").sideNav();
//for the modal
	 $('.modal').modal();
})
// lines 26-30 can go//////////

//task form - dropdown btns
$(document).ready(function() {
	$('select').material_select();
});

//task form - time picker
$('.timepicker').pickatime({
	default: 'now', // Set default time: 'now', '1:30AM', '16:30'
	fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
	twelvehour: true, // Use AM/PM or 24-hour format
	donetext: 'OK', // text for done-button
	cleartext: 'Clear', // text for clear-button
	canceltext: 'Cancel', // Text for cancel-button
	autoclose: false, // automatic close timepicker
	ampmclickable: true, // make AM PM clickable
	aftershow: function(){} //Function for after opening timepicker
});


//task form - date picker
$('.datepicker').pickadate({
	selectMonths: true, // Creates a dropdown to control month
	selectYears: 15, // Creates a dropdown of 15 years to control year,
	today: 'Today',
	clear: 'Clear',
	close: 'Ok',
	closeOnSelect: false // Close upon selecting a date,
});


// $(document).ready(function() {
// 	$('#wrapper').hide();
// });

//show add task forms on button click...still not working
$('.modal-trigger').on('click', function() {
	$('#add-task-wrapper').hide();
})

var addTask;

$('.addTaskBtn').on('click', function() {
	console.log("clicked");
	if(!addTask) {
		$('.test').hide();
		$('.add-task-wrapper').show();
		addTask = true;
	} else if(addTask) {
		$('.test').show();
		$('.add-task-wrapper').hide();
		addTask = false;
	}
});






	//profile child 
		//firebase link to add tasks from parent modal to child card div
		//including check box that displays congrats gif.
		

	//profile child
	





















// // open parent model on homepage
// $('...').on('click', function(){
// 	//open modal
// 	//tabs and other text shoud be html coded in
// 	//print to page a table of tasks added through firebase below
// })



// Initialize Firebase. using wunc.inc's gmail account
  var config = {
    apiKey: "AIzaSyC_Mml0KH_ufwPGoCj9idwXceIQqnmTihQ",
    authDomain: "task-d136a.firebaseapp.com",
    databaseURL: "https://task-d136a.firebaseio.com",
    projectId: "task-d136a",
    storageBucket: "task-d136a.appspot.com",
    messagingSenderId: "720922787934"
  };
  firebase.initializeApp(config);

  var database = firebase.database();


//----------------Adding tasks to the task list


//when the modal is open and user selects add task
$('#addTask').on('click', function(){
	//task input panel is now .show()
	$('#taskPanel').show();
});


//User has entered in text for a new task and clicks apply. changes are registerest and pushed to firebase and back to html page
$('#applyTask').on("click", function (event) {
	event.preventDefault(); 

	// Grabs user input
	var userNames = [];
	var taskName = $("#userTaskDescription").val().trim();
	var taskReward = $("#userTaskReward").val().trim();
	var taskTimeDueBy = $("#userTaskTimeDueBy").val().trim();
	var taskDateDueBy = $("#userTaskDateDueBy").val().trim();
	for (var i = 0; i < $('select[name="userName"]').val().length; i++) {
		userNames.push($('select[name="userName"]').val()[i].trim())
	}
	//var userName = $('select[name="userName"]').val()[0].trim();
	//console.log($('select[name="userName"]').val())

		console.log(userNames);
	// Create object to hold task data this links to firebase as the data in firebase is in object format
	for (var i = 0; i < userNames.length; i++) {
		var newTask = {
		user: userNames[i],
		name: taskName,
		reward: taskReward,
		timeDueBy: taskTimeDueBy,
		dateDueBy: taskDateDueBy
	};

	// Uploads task data to the database. pushes task data into the object above
	database.ref().push(newTask);

	  $('#' + userNames[i] +' > tbody').append("<tr><td><i class='material-icons lef'>check_box_outline_blank</i>" + taskName + "</td><td>" + newTask.dateDueBy  + " @ " + newTask.timeDueBy +  "</td></tr>");
	}
	

	// test to make sure it works
	console.log("User Name: " + newTask.user);
	console.log("Task Name: " + newTask.name);
	console.log("Task Reward: " + newTask.reward);
	console.log("Task Due By: " + newTask.timeDueBy);
	console.log("Task date: " + newTask.dateDueBy)

	// Clears all of the input boxes
	$('select[name="userName"]').val("");
	$("#userTaskDescription").val("");
	$("#userTaskReward").val("");
	$("#userTaskTimeDueBy").val("");
	$("#userTaskDateDueBy").val("");
});



//-------Create Firebase event for adding tasks to the database and a row in the html when a user adds an entry

database.ref().on("child_added", function (snapshot) {

	console.log(snapshot.val());

	// Store user task input data into a variable. This is for firebase.
	var taskName = snapshot.val().name;
	var taskReward = snapshot.val().reward;
	var taskDueBy = snapshot.val().timeDueBy;
	var dateDueBy = snapshot.val().dateDueBy;

	// test to make sure it works
	console.log(taskName);
	console.log(taskReward);
	console.log(taskDueBy);



//add reload to keep data on cards here


	$('.parent-task-table > tbody').append("<tr><td><i class='material-icons lef'>check_box_outline_blank</i> " + taskName + "</td><td>" + taskReward + "</td><td>" +
	dateDueBy + " @ " + taskDueBy + "</td><td>");
});

//------ click check boxes
$('body').on('click', '#checkbox', function() {
	var state = $(this).attr('checkState');
	if (state === 'un-checked') {
		$(this).replaceWith("<i class='material-icons left' checkState='checked' id='checkbox'>check_box</i>");
	} else {
		$(this).replaceWith("<i class='material-icons left' checkState='un-checked' id='checkbox'>check_box_outline_blank</i>")
	}

});




/**********************************************/
/*************child-modal.html*****************/
/**********************************************/
function displayGif() {
	var queryURL = "https://api.giphy.com/v1/gifs/q5J2HfnH8mCvS?api_key=dc6zaTOxFJmzC";


	$.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {

    	var gifData = response.data;
    	var gifDiv = $("<div class='gifDiv'>");
    	var pImg = $("<img class='gif'>");
    	pImg.attr("src", gifData.images.downsized_medium.url);

    	gifDiv.append(pImg);
    	console.log(gifData);

    	$("#marcia").append(gifDiv);

    	setTimeout(function() {gifDiv.remove()}, 3000);

    });
}

$(".good-job-gif").on("click", function(event) {

	if($(this).text() === "check_box_outline_blank") {
		$(this).text("check_box")
		displayGif();
	} else {
		$(this).text("check_box_outline_blank");
	}
});
























