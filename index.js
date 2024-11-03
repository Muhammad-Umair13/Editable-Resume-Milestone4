var _a;
(_a = document.getElementById("Form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a, _b;
    event.preventDefault();
    // Input sections
    var name_InputElement = document.getElementById("Name");
    var email_InputElement = document.getElementById("Email");
    var phone_InputElement = document.getElementById("Phone");
    var address_InputElement = document.getElementById("Address");
    var education_InputElement = document.getElementById("Education");
    var skills_InputElement = document.getElementById("Skills_Input");
    var file_InputElement = document.getElementById("file");
    // Read input values
    if (name_InputElement && email_InputElement && phone_InputElement && address_InputElement && education_InputElement && skills_InputElement && file_InputElement) {
        var Your_name = name_InputElement.value;
        var Your_email = email_InputElement.value;
        var Your_phone = phone_InputElement.value;
        var Your_Adress = address_InputElement.value;
        var Your_Education = education_InputElement.value;
        var Your_skill = skills_InputElement.value;
        // Display input values
        document.getElementById("display-name").innerText = Your_name;
        document.getElementById("display-email").innerText = Your_email;
        document.getElementById("display-phone").innerText = Your_phone;
        document.getElementById("display-address").innerText = Your_Adress;
        document.getElementById("display-education").innerText = Your_Education;
        document.getElementById("display-skills").innerText = Your_skill;
        // Handle image input
        var file = (_a = file_InputElement.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var imgElement = document.querySelector("header img");
                if (e.target) {
                    imgElement.src = e.target.result;
                }
            };
            reader.readAsDataURL(file);
        }
        // Show the resume output section
        var resumeOutput_1 = document.getElementById("Resume_output");
        resumeOutput_1.style.display = "block";
        var Form_1 = document.getElementById("Form");
        Form_1.style.display = "none";
        // for edit button
        (_b = document.getElementById("edit_btn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
            Form_1.style.display = "block";
            resumeOutput_1.style.display = "none";
        });
    }
});
