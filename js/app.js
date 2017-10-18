var button = document.querySelector("#modify-list");
var registerNewTask = document.querySelector("#create-list-item");
var closeLightBox = document.querySelector("#close-lightbox");
var lightbox = document.getElementById("lightbox");
var submitNewTask = document.querySelector("#submit-new-task");
var deleteList = document.querySelector("#delete-list");

function insertNewTask() {
	var div = document.createElement('li');
	div.setAttribute('class', 'task');
	div.innerHTML = '<input id="shelby-task-checkbox" name="shelby-task" value="empty" type="checkbox">';
	div.innerHTML += '<p class="task-description">' + document.getElementById("task-description-input").value + '</p>';
	document.getElementById('task-list').appendChild(div);
	//alert("the button has been clicked inside the add new task modal."); TEST
};

function toggleListControls() {
	var id = 'modify-list';
	var element = document.getElementById(id);


	element.onclick = function(){
		document.getElementById('delete-list').classList.toggle('hidden');
		document.getElementById('create-list-item').classList.toggle('hidden');
	};
};

button.addEventListener("click", toggleListControls());

registerNewTask.addEventListener("click", function() {
	lightbox.className = "open";
});

closeLightBox.addEventListener("click", function() {
	lightbox.className = "";
});

lightbox.addEventListener("click", function(e){
	if (e.target.id == "lightbox") {
		lightbox.className = "";
	}
});

submitNewTask.addEventListener("click", function(e) {
		if (e.target.id == "submit-new-task") {
			insertNewTask();
			document.getElementById("task-description-input").value = "";
			lightbox.className = "";	
		}
});

deleteList.addEventListener("click", function() {
	document.querySelector("#task-list").innerHTML = "";
});