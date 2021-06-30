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

        if (tentsSelect.checked == true && audioSelect == true && cateringSelect == true){
            total = ((attendanceInput/15) * 2000) + 5000 + (attendanceInput * 750);
        } else if (tentsSelect.checked == true){
            total = ((attendanceInput / 15) * 2000);
        } else if (audioSelect == true){
            total = 5000;
        } else if (cateringSelect == true){
            total = (attendanceInput * 750);
        } else {
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