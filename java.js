function add() {
    var addTask = document.getElementById('addTask');
    var workSheet = document.getElementById('workSheet');


    if(!addTask.value.trim ()){
        return alert("add task")
    }
     

    var li = document.createElement('li');
    li.textContent = addTask.value;


  var removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.className = 'Button';
  removeButton.onclick = function() {
    workSheet.removeChild(li)
  };
  li.onclick = function () {
    li.classList.toggle('completed')
  };

  li.appendChild('removeButton');


  workSheet.appendChild(li);


  addTask.value = '';




}