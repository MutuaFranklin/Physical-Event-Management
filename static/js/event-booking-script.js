function Customer (names, email, telNumber, location, packageOrdered){
    this.names = names;
    this.email = email;
    this.telNumber = telNumber;
    this.location = location;
    this.packageOrdered = packageOrdered;
}

$(document).ready(function(){

    $("form#eventBookingForm").submit(function(event){
        event.preventDefault();

        var namesInput = document.getElementById("nameUserInput").value;
        var emailInput = document.getElementById("emailUserInput").value;
        var telNumberInput = document.getElementById("phoneNumberInput").value;
        var locationInput = document.getElementById("locationUserInput").value;
        var attendanceInput = parseInt(document.getElementById("projectedAttendanceInput").value);

        var tentsSelect = document.getElementById("tentsSwitch");
        var audioSelect = document.getElementById("audioSwitch");
        var cateringSelect = document.getElementById("cateringSwitch");
        var photographySelect = document.getElementById("photographySwitch");

        var basicsSelect = document.getElementById("basicsSwitch");
        var premiumSelect = document.getElementById("premiumSwitch");
        var proSelect = document.getElementById("proSwitch");


        var total = 0;

        if (tentsSelect.checked == true && audioSelect == true && cateringSelect == true && photographySelect.checked == true){
            if (attendanceInput > 1000){
                total = ((attendanceInput / 15) * 2000) + 60000 + (attendanceInput * 750) + 10000;
            } else if (attendanceInput <= 1000) {
                total = ((attendanceInput / 15) * 2000) + 40000 + (attendanceInput * 750) + 10000;
            } else if (attendanceInput <= 500 ){
                total = ((attendanceInput / 15) * 2000) + 25000 + (attendanceInput * 750) + 10000;
            } else if (attendanceInput <= 100) {
                total = ((attendanceInput / 15) * 2000) + 15000 + (attendanceInput * 750) + 10000;
            } else if (attendanceInput <= 50) {
                total = ((attendanceInput / 15) * 2000) + 10000 + (attendanceInput * 750) + 10000;
            }
        } else if (tentsSelect.checked == true && audioSelect == true && cateringSelect == true){
            if (attendanceInput > 1000) {
                total = ((attendanceInput / 15) * 2000) + 60000 + (attendanceInput * 750);
            } else if (attendanceInput <= 1000) {
                total = ((attendanceInput / 15) * 2000) + 40000 + (attendanceInput * 750);
            } else if (attendanceInput <= 500) {
                total = ((attendanceInput / 15) * 2000) + 25000 + (attendanceInput * 750);
            } else if (attendanceInput <= 100) {
                total = ((attendanceInput / 15) * 2000) + 15000 + (attendanceInput * 750);
            } else if (attendanceInput <= 50) {
                total = ((attendanceInput / 15) * 2000) + 10000 + (attendanceInput * 750);
            }
        } else if (tentsSelect.checked == true && audioSelect == true) {
            if (attendanceInput > 1000) {
                total = ((attendanceInput / 15) * 2000) + 60000;
            } else if (attendanceInput <= 1000) {
                total = ((attendanceInput / 15) * 2000) + 40000;
            } else if (attendanceInput <= 500) {
                total = ((attendanceInput / 15) * 2000) + 25000;
            } else if (attendanceInput <= 100) {
                total = ((attendanceInput / 15) * 2000) + 15000;
            } else if (attendanceInput <= 50) {
                total = ((attendanceInput / 15) * 2000) + 10000;
            }
        } else if (tentsSelect.checked == true && cateringSelect.checked == true){
            total = ((attendanceInput / 15) * 2000) + (attendanceInput * 750);
        } else if (tentsSelect.checked == true && photographySelect.checked == true){
            total = ((attendanceInput / 15) * 2000) + 10000;
        } else if (audioSelect == true && cateringSelect == true && photographySelect.checked == true) {
            if (attendanceInput > 1000) {
                total = 60000 + (attendanceInput * 750) + 10000;
            } else if (attendanceInput <= 1000) {
                total =  40000 + (attendanceInput * 750) + 10000;
            } else if (attendanceInput <= 500) {
                total = 25000 + (attendanceInput * 750) + 10000;
            } else if (attendanceInput <= 100) {
                total = 15000 + (attendanceInput * 750) + 10000;
            } else if (attendanceInput <= 50) {
                total = 10000 + (attendanceInput * 750) + 10000;
            }
        } else if (audioSelect == true && cateringSelect == true) {
            if (attendanceInput > 1000) {
                total = 60000 + (attendanceInput * 750);
            } else if (attendanceInput <= 1000) {
                total =  40000 + (attendanceInput * 750);
            } else if (attendanceInput <= 500) {
                total = 25000 + (attendanceInput * 750);
            } else if (attendanceInput <= 100) {
                total = 15000 + (attendanceInput * 750);
            } else if (attendanceInput <= 50) {
                total =  10000 + (attendanceInput * 750);
            }
        } else if (audioSelect == true && photographySelect.checked == true) {
            if (attendanceInput > 1000) {
                total = 60000 + 10000;
            } else if (attendanceInput <= 1000) {
                total = 40000 + 10000;
            } else if (attendanceInput <= 500) {
                total = 25000 + 10000;
            } else if (attendanceInput <= 100) {
                total = 15000 + 10000;
            } else if (attendanceInput <= 50) {
                total = 10000 + 10000;
            }
        } else if (cateringSelect.checked == true && photographySelect.checked == true){
            total = (attendanceInput * 750) + 10000;
        } else if (tentsSelect.checked == true){
            total = ((attendanceInput / 15) * 2000);
        } else if (audioSelect.checked == true) {
            if (attendanceInput > 1000) {
                total = ((attendanceInput / 15) * 2000) + 60000 + (attendanceInput * 750) + 10000;
            } else if (attendanceInput <= 1000) {
                total = ((attendanceInput / 15) * 2000) + 40000 + (attendanceInput * 750) + 10000;
            } else if (attendanceInput <= 500) {
                total = ((attendanceInput / 15) * 2000) + 25000 + (attendanceInput * 750) + 10000;
            } else if (attendanceInput <= 100) {
                total = ((attendanceInput / 15) * 2000) + 15000 + (attendanceInput * 750) + 10000;
            } else if (attendanceInput <= 50) {
                total = ((attendanceInput / 15) * 2000) + 10000 + (attendanceInput * 750) + 10000;
            }
        } else if (cateringSelect == true) {
            total = (attendanceInput * 750);
        } else if (photographySelect == true) {
            total = 10000;
        } else if (basicsSelect.checked == true) {
            if (attendanceInput > 1000) {
                total = ((attendanceInput / 15) * 2000) + 60000 + (attendanceInput * 500);
            } else if (attendanceInput <= 1000) {
                total = ((attendanceInput / 15) * 2000) + 40000 + (attendanceInput * 500);
            } else if (attendanceInput <= 500) {
                total = ((attendanceInput / 15) * 2000) + 25000 + (attendanceInput * 500);
            } else if (attendanceInput <= 100) {
                total = ((attendanceInput / 15) * 2000) + 15000 + (attendanceInput * 500);
            } else if (attendanceInput <= 50) {
                total = ((attendanceInput / 15) * 2000) + 10000 + (attendanceInput * 500);
            }
        } else if (premiumSelect.checked == true) {
            if (attendanceInput > 1000) {
                total = ((attendanceInput / 15) * 4000) + 60000 + (attendanceInput * 1000) + 70000 + 25000 + 10000;
            } else if (attendanceInput <= 1000) {
                total = ((attendanceInput / 15) * 4000) + 40000 + (attendanceInput * 1000)+ 70000 + 25000 + 10000;
            } else if (attendanceInput <= 500) {
                total = ((attendanceInput / 15) * 4000) + 25000 + (attendanceInput * 1000)+ 70000 + 25000 + 10000;
            } else if (attendanceInput <= 100) {
                total = ((attendanceInput / 15) * 4000) + 15000 + (attendanceInput * 1000)+ 70000 + 25000 + 10000;
            } else if (attendanceInput <= 50) {
                total = ((attendanceInput / 15) * 4000) + 10000 + (attendanceInput * 1000)+ 70000 + 25000 + 10000;
            }        
        } else if (proSelect.checked == true) {
            if (attendanceInput > 1000) {
                total = ((attendanceInput / 15) * 6000) + 60000 + (attendanceInput * 2500) + 100000 + 50000 + 75000;
            } else if (attendanceInput <= 1000) {
                total = ((attendanceInput / 15) * 6000) + 40000 + (attendanceInput * 2500) + 100000 + 50000 + 75000;
            } else if (attendanceInput <= 500) {
                total = ((attendanceInput / 15) * 6000) + 25000 + (attendanceInput * 2500) + 100000 + 50000 + 75000;
            } else if (attendanceInput <= 100) {
                total = ((attendanceInput / 15) * 6000) + 15000 + (attendanceInput * 2500) + 100000 + 50000 + 75000;
            } else if (attendanceInput <= 50) {
                total = ((attendanceInput / 15) * 6000) + 10000 + (attendanceInput * 2500) + 100000 + 50000 + 75000;
            }         
        } else {
            alert("Please choose a package that you require. You may browse the page for more options");
        }
        
        var grandTotal = parseInt(total)
        alert("Your total is " + grandTotal);
        console.log(attendanceInput);
        $("#packageSelectionTotal").text(grandTotal);
        $("#singleSelectionTotal").text(grandTotal);


    })

});