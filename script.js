function getFormvalue(event) {
    event.preventDefault(); // Prevent form from submitting

    const form = document.getElementById("form1");

    // Get and trim input values
    const fname = form.fname.value.trim();
    const lname = form.lname.value.trim();

    // Optional: Handle empty input case
    if (!fname && !lname) {
        alert("Please enter your first and last name.");
        return;
    }

    // Display full name
    alert(`${fname} ${lname}`.trim());
}
