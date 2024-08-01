document.getElementById('shellSwapButton').addEventListener('click', function() {
    document.getElementById('inputContainer').style.display = 'flex';
});

document.getElementById('generateButton').addEventListener('click', function() {
    let userName = document.getElementById('userName').value;
    let oldLaptopSerial = document.getElementById('oldLaptopSerial').value;
    let newLaptopSerial = document.getElementById('newLaptopSerial').value;
    let employeeId = document.getElementById('employeeId').value;
    let issue = document.getElementById('issue').value;
    let email = document.getElementById('email').value;

    generateEmailTemplates(userName, oldLaptopSerial, newLaptopSerial, employeeId, issue, email);
});

function generateEmailTemplates(userName, oldLaptopSerial, newLaptopSerial, employeeId, issue, email) {
    let emailTemplatesDiv = document.getElementById('emailTemplates');
    emailTemplatesDiv.innerHTML = ''; // Clear previous templates

    let template1 = `
        <div class="email-template">
            <h3><button style="padding: 5px 10px; border: none; border-radius: 4px; background-color: #007BFF; color: white; font-size: 12px; cursor: pointer; font-family: 'Be Vietnam Pro', sans-serif;" onclick="openInOutlook('rohan@example.com', 'abc@gmail.com', 'Laptop Issue', 'Hello ${userName},\\n\\nPlease log a call for this laptop issue.\\nWe have already shared the details with you.\\nLaptop Serial Number: ${oldLaptopSerial}')">Send this Mail to Rohan</button></h3>
            <p>Hello Rohan,</p>
            <p>Please log a call for this laptop issue.</p>
            <p>We have already shared the details with you.</p>
            <p>Laptop Serial Number: ${oldLaptopSerial}</p>
        </div>
    `;

    let template2 = `
        <div class="email-template">
            <h3><button style="padding: 5px 10px; border: none; border-radius: 4px; background-color: #007BFF; color: white; font-size: 12px; cursor: pointer; font-family: 'Be Vietnam Pro', sans-serif;" onclick="openInOutlook('${email}', 'abc@gmail.com', 'Laptop Replacement', 'Hello ${userName},\\n\\nWe have replaced your laptop with a new shell.\\nCheck and let us know in case of any issues or concerns.\\nNew Serial Number: ${newLaptopSerial}')">Send this Mail to User</button></h3>
            <p>Hello ${userName},</p>
            <p>We have replaced your laptop with a new shell.</p>
            <p>Check and let us know in case of any issues or concerns.</p>
            <p>New Serial Number: ${newLaptopSerial}</p>
        </div>
    `;

    let template3 = `
        <div class="email-template">
            <h3><button style="padding: 5px 10px; border: none; border-radius: 4px; background-color: #007BFF; color: white; font-size: 12px; cursor: pointer; font-family: 'Be Vietnam Pro', sans-serif;" onclick="openInOutlook('jayant@example.com', 'abc@gmail.com', 'Shell Swap || ${employeeId} || ${issue}', 'Hello Jayant,\\n\\nPlease update your record as we have done a shell swap.\\n\\nName: ${userName}\\nOld Serial Number: ${oldLaptopSerial}\\nNew Serial Number: ${newLaptopSerial}\\nIssue: ${issue}\\nEmployee ID: ${employeeId}')">Send this Mail to Jayant</button></h3>
            <p>Hello Jayant,</p>
            <p>Please update your record as we have done a shell swap.</p>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Old Serial Number</th>
                    <th>New Serial Number</th>
                    <th>Issue</th>
                    <th>Employee ID</th>
                </tr>
                <tr>
                    <td>${userName}</td>
                    <td>${oldLaptopSerial}</td>
                    <td>${newLaptopSerial}</td>
                    <td>${issue}</td>
                    <td>${employeeId}</td>
                </tr>
            </table>
        </div>
    `;

    emailTemplatesDiv.innerHTML += template1;
    emailTemplatesDiv.innerHTML += template2;
    emailTemplatesDiv.innerHTML += template3;
}

function openInOutlook(to, cc, subject, body) {
    let mailtoLink = `mailto:${to}?cc=${cc}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}
