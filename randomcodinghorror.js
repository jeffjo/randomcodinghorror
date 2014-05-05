var Random = {};

Random.pageCount = (function() {
  // TODO get this dynamically
  return 277;
}());


Random.gotoRandomPage = function() {
  var page = Math.random() * (Random.pageCount - 1) + 1
  document.getElementById('blogFrame').src = 'http://blog.codinghorror.com/page/' + page;
};

document.getElementById('randomButton').addEventListener('click', Random.gotoRandomPage);

Random.gotoRandomPage();
