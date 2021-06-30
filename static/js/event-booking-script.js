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

        var namesInput = document.getElementById("nameInput").value;
        var emailInput = document.getElementById("emailInput").value;
        var telNumberInput = document.getElementById("telNumberInput").value;
        var locationInput = document.getElementById("locationInput").value;
        var attendanceInput = document.getElementById("attendanceInput").value;

        var tentsSelect = document.getElementById("tentsSwitch");
        var audioSelect = document.getElementById("audioSwitch");
        var cateringSelect = document.getElementById("cateringSwitch");
        var photographySelect = document.getElementById("photographySwitch");

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
                total = ((attendanceInput / 15) * 2000) + 60000 + (attendanceInput * 750) ;
            } else if (attendanceInput <= 1000) {
                total = ((attendanceInput / 15) * 2000) + 40000 + (attendanceInput * 750);
            } else if (attendanceInput <= 500) {
                total = ((attendanceInput / 15) * 2000) + 25000 + (attendanceInput * 750);
            } else if (attendanceInput <= 100) {
                total = ((attendanceInput / 15) * 2000) + 15000 + (attendanceInput * 750) + 10000;
            } else if (attendanceInput <= 50) {
                total = ((attendanceInput / 15) * 2000) + 10000 + (attendanceInput * 750) + 10000;
            }
        } else if (tentsSelect.checked == true && audioSelect == true) {
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
        } else if (tentsSelect.checked == true && cateringSelect.checked == true){
            total =0;
        } else if (tentsSelect.checked == true && photographySelect.checked == true){
            total = 0;
        } else if (audioSelect == true && cateringSelect == true && photographySelect.checked == true) {
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
        } else if (audioSelect == true && cateringSelect == true) {
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
        } else if (audioSelect == true && photographySelect.checked == true) {
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
        } else if (cateringSelect == true && photographySelect.checked == true){
            total = 5000;
        } else if (tentSelect == true){
            total = (attendanceInput * 750);
        } else if (audioSelect == true) {
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
            total = (attendanceInput * 750);
        }else {
            alert("Please choose a service that you require. You may browse the page for more options")
        }

        if (tentsSelect.checked == true && audioSelect == true && cateringSelect == true) {
            total = ((attendanceInput / 15) * 2000) + 5000 + (attendanceInput * 750);
        } else if (tentsSelect.checked == true && audioSelect == true && cateringSelect == true) {
            total = ((attendanceInput / 15) * 2000) + 5000 + (attendanceInput * 750);
        } else if (tentsSelect.checked == true && audioSelect == true && cateringSelect == true) {
            total = ((attendanceInput / 15) * 2000) + 5000 + (attendanceInput * 750);
        } else {
            alert("Please choose a package that you require. You may browse the page for more options")
        }
    })

});