<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="css/style.css">
</head>
<body>
	<header>
		<h1>Project Taskrunner</h1>
		<p>A microtask SaaS project by Shelby Russ &amp; Anthony Ponzio</p>
	</header>
	<main>
		<header>
			<h2 class="list-name">Daily To-Dos</h2>
			<p class="author-information">Created By <a href="#">Shelby Russ</a> | 09.11.2017 </p>
		</header>
		<section class="task-area">
			<ul class="task-list" id="task-list">
				<li class="task">
					<input id="shelby-task-checkbox-1" name="shelby-task-1" value="empty" type="checkbox">
					<p class="task-description">Do the Dishes</p>
				</li>
				<li class="task task-alt">
					<input id="shelby-task-checkbox-2" name="shelby-task-2" value="empty" type="checkbox">
					<p class="task-description">Take out the trash</p>
				</li>
				<li class="task">
					<input id="shelby-task-checkbox-3" name="shelby-task-3" value="empty" type="checkbox">
					<p class="task-description">Create the Rest of this application.</p>
				</li>
			</ul>
		</section>
		<section class="task-controls">
			<input type="button" id="modify-list" value="Modify List">
			<input class="hidden list-controls" type="button" id="create-list-item" name="create-list-item" value="Create List Item">
			<input class="hidden list-controls" type="button" id="delete-list" name="delete-list" value="Delete List">
		</section>
		<div id="lightbox">
			<section id="lightbox-content">
				<div id="close-lightbox"> &times; </div>
				<h2>Add a new Task</h2>
				<input type="text" id="task-description-input" placeholder="enter task description">
				<input type="button" id="submit-new-task" value="submit">
			</section>
		</div>
	</main>
	<footer>
		
	</footer>
	<script src="//localhost:35729/livereload.js"></script>
	<script src="js/app.js"></script>
</body>
</html>