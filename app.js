function checkbox() {
  event.preventDefault();
  // alert('click detected');
  var currentClass = this.getAttribute('class');
  if (currentClass === 'checked') {
    this.className = 'unchecked';
  } else {
    this.className = 'checked';
  }
}

var li = document.getElementsByTagName('li');
// li.addEventListener('click', checkbox);
for(var i = 0;i<li.length;i++){
  li[i].addEventListener('click', checkbox);
}
