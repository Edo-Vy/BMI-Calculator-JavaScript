/**Chỉ số BMI : cân nặng / chiều cao * chiều cao
 *  - Cân nặng :kg, Chiều cao : m
 *    + Chỉ số BMI của bạn dưới 18,5: Bạn đang gặp phải tình trạng thiếu cân
 *    + Chỉ số BMI của bạn là 18,5 đến 24,9: Bạn đang sở hữu cân nặng khỏe mạnh
 *    + Chỉ số BMI của bạn là 25 đến 29,9: Bạn đang trong tình trạng thừa cân
 *    + Chỉ số BMI của bạn từ 30 trở lên: Bạn đang bị béo phì 
 *       + Béo phì độ I 30 - 34,9
 *       + Béo phì độ II 35 - 39,9
 *       + Béo phì độ III ≥ 40
 */


var height = 0;
var weight = 0;
var calBMI = 0;
var imgOut = document.getElementById('img__des');
var result = document.getElementById('title_des');

document.getElementById('btnCalculate').onclick = function () {
    calculateBMI();
}

var heightStatus = false;
var weightStatus = false;

function calculateBMI() { // input : height, weight

    height = Number(document.getElementById('height').value);
    weight = Number(document.getElementById('weight').value);

    calBMI =(weight /(height*height/10000)).toFixed(2); // cm -> m 
    //------------//
    if( height == '' || isNaN(height) && height <= 0){
         alert(("Please provide a valid height"));
    } else{
        heightStatus = true;
    }
    if( weight == '' || isNaN(weight) && weight <= 0){
        alert(("Please provide a valid weight"));
   } else{
       weightStatus = true;
   }
    document.getElementById('result__des').style.display = 'none';
    if( calBMI <= 18.5){

        imgOut.src = '../img/body-1.png';
        result.innerHTML = 'Under weight : ' + calBMI;
    }else if (calBMI > 18.5 && calBMI <= 24.9){

        imgOut.src = '../img/body-2.png';
        result.innerHTML = 'Normal : ' + calBMI;
    }else if ( calBMI >= 25 && calBMI <= 29.9){
        imgOut.src = '../img/body-3.png';
        result.innerHTML = 'Over weight : ' + calBMI;
    }else if (calBMI >= 30 && calBMI <= 34.9){
        imgOut.src = '../img/body-4.png';
        result.innerHTML = 'Severe : ' + calBMI;
    }else if (calBMI >= 35 && calBMI <= 39.9){
        imgOut.src = '../img/body-5.png';
        result.innerHTML = 'Morbid : ' + calBMI;
    }else if (calBMI >= 40){
        imgOut.src = '../img/body-6.png';
        result.innerHTML = 'Super obesity : '+ calBMI;
    }
    setTimeout(function () {
        document.getElementById('result__des').style.display = 'block';
      }, 500)

}