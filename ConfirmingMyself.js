<!DOCTYPE html>
<html>
<body>

<p>Are you John?</p>

<button onclick="myFunction()">Please Confirm Identity</button>

<p id="John"></p>

<script>
function myFunction()
{
var x;

var person=prompt("Please enter your name");

if (person == "John Arndt")
  {
  x="Hello John! How are you today?";
  document.getElementById("John").innerHTML=x;
  }

if (person != "John Arndt")
  {
  x="You are not John you fool!!";
  document.getElementById("John").innerHTML=x;
}
}


</script>

</body>
</html>
