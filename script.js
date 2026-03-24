document.getElementById("ageForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const year = parseInt(document.getElementById("year").value);
    const month = parseInt(document.getElementById("month").value);
    const day = parseInt(document.getElementById("day").value);

    const today = new Date();
    const birthDate = new Date(year, month, day);

    const resultBox = document.getElementById("result");

    if (birthDate > today) {
        resultBox.innerHTML = `<p class="text-danger">Birth date cannot be in the future!</p>`;
        resultBox.classList.add("show");
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += previousMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    resultBox.innerHTML =
        `<h4 class="text-uppercase zen-dots-regular mb-4">${firstName} ${lastName}</h4>
         <p class="zen-dots-regular">You are</p>
         <p class="my-2 zen-dots-regular">
            <span class="age-number">${years}</span> YEARS 
            <span class="age-number">${months}</span> MONTHS 
            <span class="age-number">${days}</span> DAYS
         </p>
         <p class="zen-dots-regular"> old </p>`;

    // Restart animation
    resultBox.classList.remove("show");
    void resultBox.offsetWidth;
    resultBox.classList.add("show");
});