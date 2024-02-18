// Define variables to hold the donation count and total amount
let donationCount = 0; // Example initial count
let totalAmount = 0; // Example initial total amount

// Function to update the donation count and total amount
function updateDonationStats() {
    document.getElementById('donor-count').textContent = donationCount;
    document.getElementById('total-amount').textContent = totalAmount;

}

// Function to add a new donation
function addDonation(name, amount) {
    // Increment donation count
    donationCount++;
    // Add amount to total
    totalAmount += amount;
    // Update UI
    updateDonationStats();
    // Add new donor to the list
    const donorList = document.getElementById('donor-list');
    const newDonation = document.createElement('li');
    newDonation.textContent = ` ${name} - ${amount} دينار`;
    donorList.appendChild(newDonation);
}

// Update the UI with initial values
updateDonationStats();

// Example usage:
// Add a new donation
addDonation('فراس الميلادي', 200); // Example donation
addDonation('محمد النايلي', 200); // Example donation
addDonation('على الزياتي', 200); // Example donation
addDonation('إسكندر البصلي', 200); // Example donation
addDonation('على حمد', 50); // Example donation
addDonation('حسين التومية', 100); // Example donation
addDonation('توفيق البصلي', 100); // Example donation
addDonation('حسام عمارة', 165); // Example donation
addDonation('زين كشيدة', 100); // Example donation
addDonation('وليد صالح', 50); // Example donation
addDonation('مروان الممي', 50); // Example donation
addDonation('امين السوسي',20);
addDonation('امحمد الشملي',80);
addDonation('سفيان الناقس',150);
addDonation('امين السوسي',100);
addDonation('فهمي الدوس',50);
addDonation('نبيل القيلوزي',300);
addDonation('يوسف الديماسي',100);
addDonation('بدر الدين الصيد',100);
addDonation('عبد المجيد الصيد',50);
addDonation('علاع الديماسي',100);
addDonation('وسيم العربي',100);
addDonation('الياس العربي',50);
addDonation('اكرم المعلال',50);
addDonation('عبد الله الحذيري',40);
addDonation('فرح الدوس',30);
addDonation('خالد بوزیر',100);
addDonation('مراد بوزير', 100);
addDonation('قيس القصاب', 100);
addDonation('مروان الهدار', 100);
addDonation('معز الزنقاح', 100);
addDonation('ايمن لحول', 100);
addDonation('فادي القصاب', 100);
addDonation('حاتم الحاج خليفة', 100);
addDonation('حاتم عبد الله', 50);
addDonation('مراد النافض', 50);
addDonation('الياس رضوان', 50);
addDonation('منتصر قارة', 50);
addDonation('محمد سامي المعلال', 50);
addDonation('سيف الدين المعلال', 40);
addDonation('احمد الفلي', 100);
addDonation('زيدان بهتة', 10);
addDonation('امير المعلال', 20);
addDonation('نجم الدين المكسى', 15);
addDonation('الصحبي الحمامي', 50);
addDonation('ايمن الزراد', 15);
addDonation('شكرى الوكال', 20);
addDonation('ناضم الوكال', 10);
addDonation('مروان حمزية', 100);
addDonation('محمد امين الغربي', 100);
addDonation('منير مغيث', 100);
addDonation('فارس الهاني', 30);
addDonation('محمد على حمزة', 50);
addDonation('اشرف بن براهيم', 50);
addDonation('نجيب القرديو', 100);





