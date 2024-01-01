document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    //console.log(e)
    e.preventDefault();
    let todo = e.target.elements["new-task-description"].value;
    doList(todo);
    //form.reset();
  });
});

function doList(todo) {
  let list = document.createElement("li");
  list.textContent = todo;
  let taskList = document.getElementById("tasks");
  taskList.appendChild(list);

  console.log(todo);
}
