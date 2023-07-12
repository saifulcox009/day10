const createTodoButton = document.querySelector(".todo .add-new-todo button");

const createTodoInput = document.querySelector(".todo .add-new-todo input");

const todoList = document.querySelector(".todo ul");
// show todo data

const showTodos = () => {
  let content = "";

  todos.forEach((item, index) => {
    content += ` <li>
                <p><i class="fa fa-check"></i>${item} </p>
                <button onclick="deleteTodo('${item}' )" ><i class="fa fa-trash"></i></button>
  </li>`;
  });
  todoList.innerHTML = content;
};
showTodos();

// create a new todo

createTodoButton.onclick = () => {
  const todo = createTodoInput.value;

  // add validation
  if (todo) {
    todos.push(todo);
    createTodoInput.value = "";
  } else {
    alert("Todo must not empty");
  }

  showTodos();
};
// delete todo

const deleteTodo = (item) => {
  const updateTodos = todos.filter((data) => data != item);
  todos = updateTodos;
  showTodos();
};
