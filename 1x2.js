//ინფუთების ჩეინჯზე გადავწყვა ლესენერბით, ღილაკბზე მქონდა თავიდან
var sasurvelimosagebitanxainput=document.getElementById("sasurvelimosagebitanxa").addEventListener("input", sasurvelimosagebitanxafunc);
var input =document.getElementById("inputField").addEventListener("input", calculate);
var input2 =document.getElementById("input2").addEventListener("input", calculate2);
var input3 =document.getElementById("input3").addEventListener("input", calculate3);


console.log(sasurvelimosagebitanxa,"garedan")

function sasurvelimosagebitanxafunc(){
    var sasurvelimosagebitanxaval=document.getElementById("sasurvelimosagebitanxa").value
    console.log(sasurvelimosagebitanxaval,"esa veliu")
    return sasurvelimosagebitanxaval
}
function calculate() {
   console.log(sasurvelimosagebitanxa,"shignida")
    var inputvalue =document.getElementById("inputField").value;
    // input მნიშნვლობის აღება ცვლადში
    var result= sasurvelimosagebitanxafunc() / inputvalue
    // Display the result
    document.getElementById("pirveliresult").innerText = "უნდა დადო: " + result+ "  ლარი";
    return result
    
}

function calculate2() {
    var x = document.getElementById("input2").value;
    var result2= sasurvelimosagebitanxafunc() / x
    
    var result22=document.getElementById("xresult")
    result22.innerText = "უნდა დადო: "+result2+ " - ლარი";
    return result2
}

function calculate3() {
    var x = document.getElementById("input3").value;
  
    // input მნიშნვლობის აღება ცვლადში
    var result3= sasurvelimosagebitanxafunc() / x
   
    // Display the result
    document.getElementById("meoreresult").innerText = "უნდა დადო " + result3 + " - ლარი";
    return result3
}

//შეკრების და ფერების დადება
function jami(){
    var summ= calculate() + calculate2()+calculate3()
    document.querySelector(".jami").innerText ="ჯამში დადებულია: " + summ+ " ლარის";
    document.querySelector('.moigeb01').innerText = " მოიგებ : " + sasurvelimosagebitanxafunc() +" ლარს"
    var jawmiwrapper=document.querySelector('.jamiwrapper')
    if(summ<sasurvelimosagebitanxafunc()){
        jawmiwrapper.style.backgroundColor = "green";
        
        document.querySelector('.prognozi').innerHTML = "კარგია, დადე ბილეთი"
    }
    else{
        jawmiwrapper.style.backgroundColor = "red";
        document.querySelector('.prognozi').innerText = " ცუდია, სხვა ნახე"
    }
    return summ
}


//სატაურის მოძრავი ფეები ანიმაცია
const colorChangingText = document.getElementById('colorChangingText');

let colorIndex = 0;
const colors = ['red', 'black', 'green', ];

function changeColor() {
  colorChangingText.style.color = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}

setInterval(changeColor, 1000);
