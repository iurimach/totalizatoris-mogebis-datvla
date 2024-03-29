var input4 =document.getElementById("input4").addEventListener("input", calculate4);
var input5 =document.getElementById("input5").addEventListener("input", calculate5);

function calculate4() {
   
    var inputvalue =document.getElementById("input4").value;
    // input მნიშნვლობის აღება ცვლადში
    var result= 100 / inputvalue  //100ამაც ცვლი თუ გინდა სხვა თანხზე დაგითვალოს
    // Display the result
    document.getElementById("frezegayraresult").innerText = "უნდა დადო: " + result+ "  ლარი";
    return result
    
}

function calculate5() {
   
    var inputvalue =document.getElementById("input5").value;
    // input მნიშნვლობის აღება ცვლადში
    var result= 100 / inputvalue  //100 ამაც ცვლი თუ გინდა სხვა თანხზე დაგითვალოს
    // Display the result
    document.getElementById("frezegayraresult2").innerText = "უნდა დადო: " + result+ " - ლარი";
    return result
    
}


//შეკრების და ფერების დადება
function jami2(){
    var summ= calculate4() + calculate5()
    document.querySelector(".jami2").innerText ="ჯამში დადებულია: " + summ+ " ლარი";
    document.querySelector('.prognozi2').innerText = " კარგია დადე ბილეთი"
    var jawmiwrapper=document.querySelector('.jamiwrapper2')
    if(summ<=99.9){  //100 ამაც ცვლი თუ გინდა სხვა თანხზე დაგითვალოს
        jawmiwrapper.style.backgroundColor = "green";
        document.querySelector('.prognozi2').innerText = " კარგია დადე ბილეთი"
    }
    else{
        jawmiwrapper.style.backgroundColor = "red";
        document.querySelector('.prognozi2').innerText = " ცუდია, სხვა ნახე"
    }
    
}