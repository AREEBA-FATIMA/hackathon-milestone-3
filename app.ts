document.addEventListener("DOMContentLoaded", function () {
  // Form Inputs
  const firstNameInput = document.querySelector<HTMLInputElement>(".firstname");
  const middleNameInput = document.querySelector<HTMLInputElement>(".middlename");
  const lastNameInput = document.querySelector<HTMLInputElement>(".lastname");
  const jobTitleInput = document.querySelector<HTMLInputElement>(".job-title");
  const phoneNoInput = document.querySelector<HTMLInputElement>(".phoneno");
  const emailInput = document.querySelector<HTMLInputElement>(".email");
  const addressInput = document.querySelector<HTMLInputElement>(".address");
  const summaryInput = document.querySelector<HTMLTextAreaElement>(".summary");
  const imageInput = document.querySelector<HTMLInputElement>(".image");

  // Dropdown Elements
  const achievement1Dropdown = document.getElementById("achievement1") as HTMLSelectElement;
  const achievement2Dropdown = document.getElementById("achievement2") as HTMLSelectElement;
  const achievement3Dropdown = document.getElementById("achievement3") as HTMLSelectElement;

  const experience1Dropdown = document.getElementById("experience1") as HTMLSelectElement;
  const experience2Dropdown = document.getElementById("experience2") as HTMLSelectElement;
  const experience3Dropdown = document.getElementById("experience3") as HTMLSelectElement;

  const education1Dropdown = document.getElementById("education1") as HTMLSelectElement;
  const education2Dropdown = document.getElementById("education2") as HTMLSelectElement;
  const education3Dropdown = document.getElementById("education3") as HTMLSelectElement;

  const project1Dropdown = document.getElementById("project1") as HTMLSelectElement;
  const project2Dropdown = document.getElementById("project2") as HTMLSelectElement;
  const project3Dropdown = document.getElementById("project3") as HTMLSelectElement;

  const skills1Dropdown = document.getElementById("skills-dropdown1") as HTMLSelectElement;
  const skills2Dropdown = document.getElementById("skills-dropdown2") as HTMLSelectElement;
  const skills3Dropdown = document.getElementById("skills-dropdown3") as HTMLSelectElement;

  // Display Areas
  const fullNameDisplay = document.getElementById("fullname_dsp") as HTMLDivElement;
  const jobTitleDisplay = document.getElementById("designation_dsp") as HTMLDivElement;
  const phoneNoDisplay = document.getElementById("phoneno_dsp") as HTMLDivElement;
  const emailDisplay = document.getElementById("email_dsp") as HTMLDivElement;
  const addressDisplay = document.getElementById("address_dsp") as HTMLDivElement;
  const summaryDisplay = document.getElementById("summary_dsp") as HTMLDivElement;
  const imageDisplay = document.getElementById("image_dsp") as HTMLImageElement;

  const achievementsDisplay = document.getElementById("achievements_dsp") as HTMLDivElement;
  const experiencesDisplay = document.getElementById("experiences_dsp") as HTMLDivElement;
  const educationDisplay = document.getElementById("educations_dsp") as HTMLDivElement;
  const projectsDisplay = document.getElementById("projects_dsp") as HTMLDivElement;
  const skillsDisplay = document.getElementById("skills_dsp") as HTMLDivElement;

  // Validation Functions
  function isValidEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  function isValidPhoneNumber(phoneNo: string): boolean {
    const phonePattern = /^[0-9]{10}$/; // Adjust as needed for your phone number format
    return phonePattern.test(phoneNo);
  }

  function validateForm(): boolean {
    let isValid = true;

    if (!firstNameInput?.value.trim() || !lastNameInput?.value.trim()) {
      isValid = false;
      alert("First Name and Last Name are required.");
    }

    if (!jobTitleInput?.value.trim()) {
      isValid = false;
      alert("Job Title is required.");
    }

    if (!phoneNoInput?.value.trim() || !isValidPhoneNumber(phoneNoInput.value)) {
      isValid = false;
      alert("Valid Phone Number is required.");
    }

    if (!emailInput?.value.trim() || !isValidEmail(emailInput.value)) {
      isValid = false;
      alert("Valid Email is required.");
    }

    if (!addressInput?.value.trim()) {
      isValid = false;
      alert("Address is required.");
    }

    if (!summaryInput?.value.trim()) {
      isValid = false;
      alert("Summary is required.");
    }

    return isValid;
  }

  // Update Functions (with validation)
  function updateFullName(): void {
    if (validateForm()) {
      const firstName = firstNameInput?.value || "";
      const middleName = middleNameInput?.value || "";
      const lastName = lastNameInput?.value || "";
      fullNameDisplay.textContent = `${firstName} ${middleName} ${lastName}`.trim();
    }
  }

  function updateJobTitle(): void {
    if (validateForm()) {
      jobTitleDisplay.textContent = jobTitleInput?.value || "";
    }
  }

  function updatePhoneNo(): void {
    if (validateForm()) {
      phoneNoDisplay.textContent = phoneNoInput?.value || "";
    }
  }

  function updateEmail(): void {
    if (validateForm()) {
      emailDisplay.textContent = emailInput?.value || "";
    }
  }

  function updateAddress(): void {
    if (validateForm()) {
      addressDisplay.textContent = addressInput?.value || "";
    }
  }

  function updateSummary(): void {
    if (validateForm()) {
      summaryDisplay.textContent = summaryInput?.value || "";
    }
  }

  function updateImage(): void {
    const file = imageInput?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        if (imageDisplay) {
          imageDisplay.src = e.target?.result as string;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  // Update Achievements, Experiences, Education, Projects, Skills (with validation)
  function updateAchievements(): void {
    const selectedAchievements: string[] = [];

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

  function updateExperiences(): void {
    const selectedExperiences: string[] = [];

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

  function updateEducation(): void {
    const selectedEducation: string[] = [];

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

  function updateProjects(): void {
    const selectedProjects: string[] = [];

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

  function updateSkills(): void {
    const selectedSkills: string[] = [];

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
  firstNameInput?.addEventListener("input", updateFullName);
  middleNameInput?.addEventListener("input", updateFullName);
  lastNameInput?.addEventListener("input", updateFullName);
  jobTitleInput?.addEventListener("input", updateJobTitle);
  phoneNoInput?.addEventListener("input", updatePhoneNo);
  emailInput?.addEventListener("input", updateEmail);
  addressInput?.addEventListener("input", updateAddress);
  summaryInput?.addEventListener("input", updateSummary);
  imageInput?.addEventListener("change", updateImage);

  // Attach event listeners to dropdowns
  achievement1Dropdown?.addEventListener("change", updateAchievements);
  achievement2Dropdown?.addEventListener("change", updateAchievements);
  achievement3Dropdown?.addEventListener("change", updateAchievements);

  experience1Dropdown?.addEventListener("change", updateExperiences);
  experience2Dropdown?.addEventListener("change", updateExperiences);
  experience3Dropdown?.addEventListener("change", updateExperiences);

  education1Dropdown?.addEventListener("change", updateEducation);
  education2Dropdown?.addEventListener("change", updateEducation);
  education3Dropdown?.addEventListener("change", updateEducation);

  project1Dropdown?.addEventListener("change", updateProjects);
  project2Dropdown?.addEventListener("change", updateProjects);
  project3Dropdown?.addEventListener("change", updateProjects);

  skills1Dropdown?.addEventListener("change", updateSkills);
  skills2Dropdown?.addEventListener("change", updateSkills);
  skills3Dropdown?.addEventListener("change", updateSkills);
});
