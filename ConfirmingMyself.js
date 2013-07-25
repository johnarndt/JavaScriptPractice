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
//Shows promt to enter name
var person=prompt("Please enter your name");
//Must enter exact name of John Arndt
if (person == "John Arndt")
  {
  x="Hello John! How are you today?";
  document.getElementById("John").innerHTML=x;
  }
//Anything entered other than John Arndt 
if (person != "John Arndt")
  {
  x="You are not John you fool!!";
  document.getElementById("John").innerHTML=x;
}
}


</script>

</body>
</html>
