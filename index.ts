document.getElementById("Form")?.addEventListener(`submit`, function (event: Event) {
    event.preventDefault();

    // Input sections
    const name_InputElement = document.getElementById("Name") as HTMLInputElement;
    const email_InputElement = document.getElementById("Email") as HTMLInputElement;
    const phone_InputElement = document.getElementById("Phone") as HTMLInputElement;
    const address_InputElement = document.getElementById("Address") as HTMLInputElement;
    const education_InputElement = document.getElementById("Education") as HTMLInputElement;
    const skills_InputElement = document.getElementById(`Skills_Input`) as HTMLInputElement;
    const file_InputElement = document.getElementById("file") as HTMLInputElement;

    // Read input values
    if (name_InputElement && email_InputElement && phone_InputElement && address_InputElement && education_InputElement && skills_InputElement && file_InputElement) {
        const Your_name = name_InputElement.value;
        const Your_email = email_InputElement.value;
        const Your_phone = phone_InputElement.value;
        const Your_Adress = address_InputElement.value;
        const Your_Education = education_InputElement.value;
        const Your_skill = skills_InputElement.value;

        // Display input values
        document.getElementById("display-name")!.innerText = Your_name;
        document.getElementById("display-email")!.innerText = Your_email;
        document.getElementById("display-phone")!.innerText = Your_phone;
        document.getElementById("display-address")!.innerText = Your_Adress;
        document.getElementById("display-education")!.innerText = Your_Education;
        document.getElementById(`display-skills`)!.innerText = Your_skill;

        // Handle image input
        const file = file_InputElement.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const imgElement = document.querySelector("header img") as HTMLImageElement;
                if (e.target) {
                    imgElement.src = e.target.result as string;
                }
            };
            reader.readAsDataURL(file);
        }

        // Show the resume output section
        const resumeOutput = document.getElementById("Resume_output") as HTMLDivElement;
        resumeOutput.style.display = "block";
        const Form = document.getElementById("Form") as HTMLDivElement;
        Form.style.display = "none";

        // for edit button
        document.getElementById("edit_btn")?.addEventListener(`click`, function () {
            Form.style.display = "block";
            resumeOutput.style.display = "none";
        });
    }
});
