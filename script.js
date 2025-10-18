 
    var form = document.getElementById("myForm");
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
   
    var dobInput = document.getElementById("dob");
    var courseSelect = document.getElementById("course");

    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
   
    var genderError = document.getElementById("genderError");
    var dobError = document.getElementById("dobError");
    var courseError = document.getElementById("courseError");

    form.addEventListener("submit", function(event) {
      event.preventDefault(); // stop form default action

      var isValid = true;

      // Name
      if (nameInput.value === "") {
        nameError.textContent = "Please enter your name";
        isValid = false;
      } else {
        nameError.textContent = "";
      }

      // Email
      if (!emailInput.value.includes("@") || !emailInput.value.includes(".")) {
        emailError.textContent = "Please enter a valid email";
        isValid = false;
      } else {
        emailError.textContent = "";
      }

     

      // Gender
      const genderSelected = document.querySelector('input[name="gender"]:checked');
      if (!genderSelected) {
        genderError.textContent = "Please select your gender";
        isValid = false;
      } else {
        genderError.textContent = "";
      }

      // Date of Birth
      if (dobInput.value === "") {
        dobError.textContent = "Please select your date of birth";
        isValid = false;
      } else {
        dobError.textContent = "";
      }

      // Course
      if (courseSelect.value === "") {
        courseError.textContent = "Please select a course";
        isValid = false;
      } else {
        courseError.textContent = "";
      }

      // Final success
      if (isValid) {
        alert("Form submitted successfully! ☺️ Hope you enjoy learning with Error Makes Clever Academy 🚀🌟");
        form.reset();
      }
    });
 