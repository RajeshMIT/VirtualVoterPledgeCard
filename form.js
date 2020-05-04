
// Submits voter pledge card form
function submit_form() {
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    
    var entries = [name, address, city, state, zip, email, phone];
    console.log("entries", entries);

    var form = document.getElementById("pledge_form");
    form.reset();
}