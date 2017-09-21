function searchPattern(){
	var exReg = new RegExp(document.getElementById("pattern").value);
	if(exReg.test(document.getElementById("paragraph").value)){
		alert("Patron encontrado!");
	}else{
		alert("No se encontró el patron!");
	}
}