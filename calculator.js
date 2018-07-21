<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title></title>
<script>
function cal(num){
    calculator.inputText.value += num;
    console.log(num);
}	

function result(){
	calculator.inputText.value = eval(document.calculator.inputText.value);
}

function reset(){
    calculator.inputText.value = "";
}

</script>
</head>
<body>
	<form name="calculator" id="calculator">
		<table >
			<input type="text" id="inputText"> <br>
			<tr>
            <td><input type="button" value="1" onclick="cal('1')"></td>
			<td><input type="button" value="2" onclick="cal('2')"></td>
			<td><input type="button" value="3" onclick="cal('3')"></td>
			<td><input type="button" value="4" onclick="cal('4')"></td>
			</tr>
			<tr>
			<td><input type="button" value="5" onclick="cal('5')"></td>
			<td><input type="button" value="6" onclick="cal('6')"></td>
			<td><input type="button" value="7" onclick="cal('7')"></td>
			<td><input type="button" value="8" onclick="cal('8')"></td>
			</tr>
			<tr>
			<td ><input type="button" value="9" onclick="cal('9')"></td>
			<td ><input type="button" value="0" onclick="cal('0')"></td>
            <td ></td>
            <td ></td>
			</tr>
			<tr>
			<td><input type="button" value="-" onclick="cal('-')"></td>
			<td><input type="button" value="+" onclick="cal('+')"></td>
            <td><input type="button" value="=" onclick="result()"></td>
			<td><input type="button" value="C" onclick="reset()"></td>
			</tr>
		</table>
	</form>
</body>
</html>
