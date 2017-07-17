var todos = ["buy new turtle"];

var input = prompt("what would you like to do?");

while(input !== "quit"){
	//handle input
if(input === "list") {
	listTodos();
	} else if(input === "new") {
	newTodo();
} else if(input === "delete") {
	deleteTodo();
}
	
input = prompt("what would you like to do?");

}
console.log("ok, you quit the app");

function listTodos() {
	console.log("**********")
	todos.forEach(function(todo, i) {
		console.log(i +": " + todo);
		});
	console.log("**********");
}

function newTodo {
		//ask for new todo
	var newTodo = prompt("Enter new todo");
	//add to todos array
	todos.push(newTodo);
}

function deleteTodo {
	var index = prompt("Enter index of item to delete");
		todos.splice(index,1);
		console.log("Deleted ToDo");
}