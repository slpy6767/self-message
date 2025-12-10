const sections = [
    { section: "section1", detail: "detail-section1" },
    { section: "section2", detail: "detail-section2" },
    { section: "section3", detail: "detail-section3" },
    { section: "section4", detail: "detail-section4" },
    { section: "section5", detail: "detail-section5" },
];

sections.forEach(item => {
    const sectionDiv = document.getElementById(item.section);
    const detailDiv = document.getElementById(item.detail);

    sectionDiv.addEventListener("click", () => {
        // Check if the detail section is already visible
        const isVisible = detailDiv.style.display === "flex";

        // Hide all detail sections
        sections.forEach(s => {
            document.getElementById(s.detail).style.display = "none";
        });

        // Toggle visibility: only show if it was hidden
        if (!isVisible) {
            detailDiv.style.display = "flex";
            detailDiv.style.flexWrap = "wrap";
            detailDiv.style.justifyContent = "space-around";
            detailDiv.style.gap = "2%";
        }
    });
});

// Function to handle Enter key press
function handleInputEnter(inputId, outputId) {
    const input = document.getElementById(inputId);
    const output = document.getElementById(outputId);

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); // prevent page reload
            output.textContent = input.value;
            input.value = "";
        }
    });
}

const inputs = [
    { input: "input-thesis", output: "output-thesis" },
    { input: "input-clinical", output: "output-clinical" },
    { input: "input-important", output: "output-important" },
    { input: "input-network", output: "output-network" },
    { input: "input-identity", output: "output-identity" }
];

inputs.forEach(item => handleInputEnter(item.input, item.output));