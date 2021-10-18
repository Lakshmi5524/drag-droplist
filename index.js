var p = document.getElementsByTagName('p')
var choice = document.getElementsByClassName('choice');
var dragItem = null;
for (var i of p) {
	i.addEventListener('dragstart', dragStart)
	i.addEventListener('dragend', dragEnd)
}
function dragStart() {
	dragItem = this;
	setTimeout(() => this.style.display = "none", 0)
}

function dragEnd() {
	dragItem = this;
	setTimeout(() => this.style.display = "block", 0)
	dragItem = null
}
for (j of choice) {
	j.addEventListener('dragover', dragOver)
	j.addEventListener('dragenter', dragEnter)
	j.addEventListener('dragleave', dragLeave)
	j.addEventListener('drop', Drop)
}
function Drop() {
	this.append(dragItem)
}
function dragOver(e) {
	e.preventDefault();
}
function dragEnter(e) {
	e.preventDefault();
}
function dragLeave(e) {
	e.preventDefault();
}


// filter

function filter() {
	var input, ul, filter, li, a, i, txtValue;
	input = document.getElementById("search");
	filter = input.value.toUpperCase();
	ul = document.getElementById("choice");
	li = ul.getElementsByTagName("p");
	for (i = 0; i < li.length; i++) {
		a = p[i].getElementsByTagName("p")[i];
		txtValue = p[i].innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			p[i].style.display = "";
		} else {
			p[i].style.display = "none";
		}

	}

}
