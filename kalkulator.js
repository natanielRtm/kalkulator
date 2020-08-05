var bilangan1;
var bilangan2;
var hasil;
var cek;
var cek_seleksi = false;
function btn(angka) {
	var display = document.getElementById("output").value;
	if (display == "0") {
		display = angka; 
	} else {
		display += angka;
	}
	document.getElementById("output").value = display;
}

function clr() {
	document.getElementById("output").value = "0";
	bilangan1 = 0;
	bilangan2 = 0;
	opr_seleksi = false;
}

function koma() {
	var display = document.getElementById("output").value;
	if (display.includes(".") == false) {
		display += ".";
	}
	document.getElementById("output").value = display;	
}

function btn_cek(o) {
	cek_seleksi = true;
	bilangan1 = parseFloat(document.getElementById("output").value);
	cek = o;
	document.getElementById("output").value = "0";
}

function hitung() {
	if (cek_seleksi == true) {
		bilangan2 = parseFloat(document.getElementById("output").value);
		switch(cek){
			case 1 :
				hasil = bilangan1 * bilangan2;
				document.getElementById("output").value = hasil;			
				break;
			case 2 :
				hasil = bilangan1 / bilangan2;
				document.getElementById("output").value = hasil;
				break;
			case 3 :
				hasil = bilangan1 - bilangan2;
				document.getElementById("output").value = hasil;
				break;
			case 4 :
				hasil = bilangan1 + bilangan2;
				document.getElementById("output").value = hasil;
				break;
		}
		cek_seleksi = false
		hasil = 0;
		bilangan1 = 0;
		bilangan2 = 0;
	}
}