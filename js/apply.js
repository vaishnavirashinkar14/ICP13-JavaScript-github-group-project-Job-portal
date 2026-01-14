const form = document.getElementById("jobForm");
const typeSelect = document.getElementById("applicationType");
const internshipSection = document.getElementById("internshipSection");
const experienceSection = document.getElementById("experience");
const message = document.getElementById("message");

typeSelect.addEventListener("change", function () {
    if (this.value === "internship") {
        internshipSection.style.display = "block";
        experienceSection.parentElement.style.display = "none";
    } else {
        internshipSection.style.display = "none";
        experienceSection.parentElement.style.display = "block";
    }
});

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const role = document.getElementById("jobRole").value;
    const skills = document.getElementById("skills").value.trim();

    if (name === "" || email === "" || phone === "" || role === "" || skills === "") {
        message.style.color = "red";
        message.textContent = "Please fill all required fields!";
        return;
    }

    if (typeSelect.value === "internship") {
        const duration = document.getElementById("duration").value;
        const college = document.getElementById("college").value.trim();

        if (duration === "" || college === "") {
            message.style.color = "red";
            message.textContent = "Please fill all internship details!";
            return;
        }
    }

    message.style.color = "green";
    message.textContent = "Application submitted successfully!";

    form.reset();
    internshipSection.style.display = "none";
    experienceSection.parentElement.style.display = "block";
});

function goToSuccess() {
    window.location.href = "success.html";
}