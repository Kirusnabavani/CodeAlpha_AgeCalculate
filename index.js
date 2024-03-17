
var calculate = document.getElementById('calculate');
var calculateAge = document.getElementById('calculateAge');

calculate.addEventListener('click', function(){
    
    var birthDate = new Date(document.getElementById('birth_date').value);
    var todayDate = new Date();
    
    var ageYear = todayDate.getFullYear() - birthDate.getFullYear();
    var ageMonth = todayDate.getMonth() - birthDate.getMonth();
    var ageDay = todayDate.getDate() - birthDate.getDate();


    if (ageDay < 0) {
        var lastMonth = new Date(todayDate.getFullYear(), todayDate.getMonth() - 1, 0);
        ageDay += lastMonth.getDate();
        ageMonth--;
    }

    if (ageMonth < 0 || (ageMonth === 0 && todayDate.getDate() < birthDate.getDate())) {
        ageYear--;
        ageMonth += 12;
    }

    

    calculateAge.innerHTML = ageYear + " Years, " + ageMonth + " Months, " + ageDay + " Days";
});
