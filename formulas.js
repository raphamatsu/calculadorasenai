function somar() {
    document.getElementById("resultado").value = 
    Number(document.getElementById("num1_id").value) + 
    Number(document.getElementById("num2_id").value);

    document.getElementById("num1_id").value="";
    document.getElementById("num2_id").value="";
 }