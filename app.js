document.addEventListener("DOMContentLoaded", function () {
    // Form Inputs
    var firstNameInput = document.querySelector(".firstname");
    var middleNameInput = document.querySelector(".middlename");
    var lastNameInput = document.querySelector(".lastname");
    var jobTitleInput = document.querySelector(".job-title");
    var phoneNoInput = document.querySelector(".phoneno");
    var emailInput = document.querySelector(".email");
    var addressInput = document.querySelector(".address");
    var summaryInput = document.querySelector(".summary");
    var imageInput = document.querySelector(".image");
    // Dropdown Elements
    var achievement1Dropdown = document.getElementById("achievement1");
    var achievement2Dropdown = document.getElementById("achievement2");
    var achievement3Dropdown = document.getElementById("achievement3");
    var experience1Dropdown = document.getElementById("experience1");
    var experience2Dropdown = document.getElementById("experience2");
    var experience3Dropdown = document.getElementById("experience3");
    var education1Dropdown = document.getElementById("education1");
    var education2Dropdown = document.getElementById("education2");
    var education3Dropdown = document.getElementById("education3");
    var project1Dropdown = document.getElementById("project1");
    var project2Dropdown = document.getElementById("project2");
    var project3Dropdown = document.getElementById("project3");
    var skills1Dropdown = document.getElementById("skills-dropdown1");
    var skills2Dropdown = document.getElementById("skills-dropdown2");
    var skills3Dropdown = document.getElementById("skills-dropdown3");
    // Display Areas
    var fullNameDisplay = document.getElementById("fullname_dsp");
    var jobTitleDisplay = document.getElementById("designation_dsp");
    var phoneNoDisplay = document.getElementById("phoneno_dsp");
    var emailDisplay = document.getElementById("email_dsp");
    var addressDisplay = document.getElementById("address_dsp");
    var summaryDisplay = document.getElementById("summary_dsp");
    var imageDisplay = document.getElementById("image_dsp");
    var achievementsDisplay = document.getElementById("achievements_dsp");
    var experiencesDisplay = document.getElementById("experiences_dsp");
    var educationDisplay = document.getElementById("educations_dsp");
    var projectsDisplay = document.getElementById("projects_dsp");
    var skillsDisplay = document.getElementById("skills_dsp");
    // Function to update full name
    function updateFullName() {
        var firstName = (firstNameInput === null || firstNameInput === void 0 ? void 0 : firstNameInput.value) || "";
        var middleName = (middleNameInput === null || middleNameInput === void 0 ? void 0 : middleNameInput.value) || "";
        var lastName = (lastNameInput === null || lastNameInput === void 0 ? void 0 : lastNameInput.value) || "";
        fullNameDisplay.textContent = "".concat(firstName, " ").concat(middleName, " ").concat(lastName).trim();
    }
    // Function to update job title
    function updateJobTitle() {
        jobTitleDisplay.textContent = (jobTitleInput === null || jobTitleInput === void 0 ? void 0 : jobTitleInput.value) || "";
    }
    // Function to update phone number
    function updatePhoneNo() {
        phoneNoDisplay.textContent = (phoneNoInput === null || phoneNoInput === void 0 ? void 0 : phoneNoInput.value) || "";
    }
    // Function to update email
    function updateEmail() {
        emailDisplay.textContent = (emailInput === null || emailInput === void 0 ? void 0 : emailInput.value) || "";
    }
    // Function to update address
    function updateAddress() {
        addressDisplay.textContent = (addressInput === null || addressInput === void 0 ? void 0 : addressInput.value) || "";
    }
    // Function to update summary
    function updateSummary() {
        summaryDisplay.textContent = (summaryInput === null || summaryInput === void 0 ? void 0 : summaryInput.value) || "";
    }
    // Function to handle image upload
    function updateImage() {
        var _a;
        var file = (_a = imageInput === null || imageInput === void 0 ? void 0 : imageInput.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                if (imageDisplay) {
                    imageDisplay.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                }
            };
            reader.readAsDataURL(file);
        }
    }
    // Function to update achievements
    function updateAchievements() {
        var selectedAchievements = [];
        if (achievement1Dropdown.value !== "Select") {
            selectedAchievements.push(achievement1Dropdown.value);
        }
        if (achievement2Dropdown.value !== "Select") {
            selectedAchievements.push(achievement2Dropdown.value);
        }
        if (achievement3Dropdown.value !== "Select") {
            selectedAchievements.push(achievement3Dropdown.value);
        }
        achievementsDisplay.textContent = selectedAchievements.length > 0
            ? selectedAchievements.join(', ')
            : "";
    }
    // Function to update experiences
    function updateExperiences() {
        var selectedExperiences = [];
        if (experience1Dropdown.value !== "Select") {
            selectedExperiences.push(experience1Dropdown.value);
        }
        if (experience2Dropdown.value !== "Select") {
            selectedExperiences.push(experience2Dropdown.value);
        }
        if (experience3Dropdown.value !== "Select") {
            selectedExperiences.push(experience3Dropdown.value);
        }
        experiencesDisplay.textContent = selectedExperiences.length > 0
            ? selectedExperiences.join(', ')
            : "";
    }
    // Function to update education
    function updateEducation() {
        var selectedEducation = [];
        if (education1Dropdown.value !== "Select") {
            selectedEducation.push(education1Dropdown.value);
        }
        if (education2Dropdown.value !== "Select") {
            selectedEducation.push(education2Dropdown.value);
        }
        if (education3Dropdown.value !== "Select") {
            selectedEducation.push(education3Dropdown.value);
        }
        educationDisplay.textContent = selectedEducation.length > 0
            ? selectedEducation.join(', ')
            : "";
    }
    // Function to update projects
    function updateProjects() {
        var selectedProjects = [];
        if (project1Dropdown.value !== "Select") {
            selectedProjects.push(project1Dropdown.value);
        }
        if (project2Dropdown.value !== "Select") {
            selectedProjects.push(project2Dropdown.value);
        }
        if (project3Dropdown.value !== "Select") {
            selectedProjects.push(project3Dropdown.value);
        }
        projectsDisplay.textContent = selectedProjects.length > 0
            ? selectedProjects.join(', ')
            : "";
    }
    // Function to update skills
    function updateSkills() {
        var selectedSkills = [];
        if (skills1Dropdown.value !== "Select") {
            selectedSkills.push(skills1Dropdown.value);
        }
        if (skills2Dropdown.value !== "Select") {
            selectedSkills.push(skills2Dropdown.value);
        }
        if (skills3Dropdown.value !== "Select") {
            selectedSkills.push(skills3Dropdown.value);
        }
        skillsDisplay.textContent = selectedSkills.length > 0
            ? selectedSkills.join(', ')
            : "";
    }
    // Attach event listeners to form inputs
    firstNameInput === null || firstNameInput === void 0 ? void 0 : firstNameInput.addEventListener("input", updateFullName);
    middleNameInput === null || middleNameInput === void 0 ? void 0 : middleNameInput.addEventListener("input", updateFullName);
    lastNameInput === null || lastNameInput === void 0 ? void 0 : lastNameInput.addEventListener("input", updateFullName);
    jobTitleInput === null || jobTitleInput === void 0 ? void 0 : jobTitleInput.addEventListener("input", updateJobTitle);
    phoneNoInput === null || phoneNoInput === void 0 ? void 0 : phoneNoInput.addEventListener("input", updatePhoneNo);
    emailInput === null || emailInput === void 0 ? void 0 : emailInput.addEventListener("input", updateEmail);
    addressInput === null || addressInput === void 0 ? void 0 : addressInput.addEventListener("input", updateAddress);
    summaryInput === null || summaryInput === void 0 ? void 0 : summaryInput.addEventListener("input", updateSummary);
    imageInput === null || imageInput === void 0 ? void 0 : imageInput.addEventListener("change", updateImage);
    // Attach event listeners to dropdowns
    achievement1Dropdown === null || achievement1Dropdown === void 0 ? void 0 : achievement1Dropdown.addEventListener("change", updateAchievements);
    achievement2Dropdown === null || achievement2Dropdown === void 0 ? void 0 : achievement2Dropdown.addEventListener("change", updateAchievements);
    achievement3Dropdown === null || achievement3Dropdown === void 0 ? void 0 : achievement3Dropdown.addEventListener("change", updateAchievements);
    experience1Dropdown === null || experience1Dropdown === void 0 ? void 0 : experience1Dropdown.addEventListener("change", updateExperiences);
    experience2Dropdown === null || experience2Dropdown === void 0 ? void 0 : experience2Dropdown.addEventListener("change", updateExperiences);
    experience3Dropdown === null || experience3Dropdown === void 0 ? void 0 : experience3Dropdown.addEventListener("change", updateExperiences);
    education1Dropdown === null || education1Dropdown === void 0 ? void 0 : education1Dropdown.addEventListener("change", updateEducation);
    education2Dropdown === null || education2Dropdown === void 0 ? void 0 : education2Dropdown.addEventListener("change", updateEducation);
    education3Dropdown === null || education3Dropdown === void 0 ? void 0 : education3Dropdown.addEventListener("change", updateEducation);
    project1Dropdown === null || project1Dropdown === void 0 ? void 0 : project1Dropdown.addEventListener("change", updateProjects);
    project2Dropdown === null || project2Dropdown === void 0 ? void 0 : project2Dropdown.addEventListener("change", updateProjects);
    project3Dropdown === null || project3Dropdown === void 0 ? void 0 : project3Dropdown.addEventListener("change", updateProjects);
    skills1Dropdown === null || skills1Dropdown === void 0 ? void 0 : skills1Dropdown.addEventListener("change", updateSkills);
    skills2Dropdown === null || skills2Dropdown === void 0 ? void 0 : skills2Dropdown.addEventListener("change", updateSkills);
    skills3Dropdown === null || skills3Dropdown === void 0 ? void 0 : skills3Dropdown.addEventListener("change", updateSkills);
});
