for (let i = 1; i < 20; i++) {
  var div = document.createElement('div');
  div.onclick = function(){
    alert("You clicked on #" + i );
  };
  document.getElementsByTagName('section')[0].appendChild(div);
};
