// Open Member Access Modal
document.getElementById('loginBtn').addEventListener('click', function() {
    document.getElementById('privateDashboardModal').style.display = 'flex';
});

// Close Modal
function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

// Verify Key for Access
function verifyAccessKey() {
    const key = document.getElementById('accessKeyInput').value;
    if (key === "12345" || key.trim() !== "") {
        document.getElementById('privateData').classList.remove('hidden');
        alert("Access Granted! Kikundi private records loaded.");
    } else {
        alert("Invalid Access Key. Please enter a valid key.");
    }
}

// Toggle Interactions (Seen, Joined, Attending)
function toggleInteraction(btn, type) {
    const span = btn.querySelector('span');
    let count = parseInt(span.innerText);
    if (btn.classList.contains('active')) {
        btn.classList.remove('active');
        btn.style.background = 'white';
        btn.style.color = '#334155';
        span.innerText = count - 1;
    } else {
        btn.classList.add('active');
        btn.style.background = '#2563eb';
        btn.style.color = 'white';
        span.innerText = count + 1;
    }
}

// Contribution Modal simulation
function openContributionModal(title) {
    alert("Contribution workflow for: " + title + "\n\nPlease send payments to Kikundi Admin Mobile Number: +255 700 000 002 with reference '" + title + "'");
}

// PDF Upload Handling Simulation
function handlePDFUpload(event) {
    const file = event.target.files[0];
    if (file) {
        if (file.type !== "application/pdf") {
            alert("Please upload a PDF document.");
            return;
        }
        
        const pdfList = document.getElementById('pdfList');
        const newCard = document.createElement('div');
        newCard.className = 'card pdf-card';
        newCard.innerHTML = `
            <i class="fa-solid fa-file-pdf pdf-icon"></i>
            <h3>${file.name}</h3>
            <p>Uploaded by: Current Member | Size: ${(file.size / (1024*1024)).toFixed(1)} MB</p>
            <button class="btn btn-sm btn-primary" onclick="viewPDF('${file.name}')"><i class="fa-solid fa-eye"></i> View PDF</button>
        `;
        pdfList.appendChild(newCard);
        alert("PDF story uploaded successfully!");
    }
}

// View PDF Simulation
function viewPDF() {
    window.open("wasifu.pdf", "_blank");
}
