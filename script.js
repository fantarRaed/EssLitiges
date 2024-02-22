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

console.log("Raeed " + totalAmount);

// Update the UI with initial values
updateDonationStats();




// Example usage:
// Add a new donation

/* 17/02 */ 
addDonation('محمد علي القاتي', 500); 

/* 22/02*/
addDonation('وسيم الزياتي', 500);
addDonation('علاء الزياتي', 500);
addDonation('ضياء القفصي (شناب)', 500);


/*17/02*/ 
addDonation('فراس الميلادي', 200); 
addDonation('محمد النايلي', 200); 
addDonation('على الزياتي', 200); 
addDonation('إسكندر البصلي', 200); 
/*20/02*/
addDonation("سامي بن رمضان", 200);
addDonation("خميس الزياتي", 100);
addDonation("لمجد بلحاج خليفة", 100);
/* 17/02*/
addDonation('على حمد', 50); 
addDonation('حسين التومية', 100); 
addDonation('توفيق البصلي', 100); 
addDonation('حسام عمارة', 165); 
addDonation('زين كشيدة', 100); 
addDonation('وليد صالح', 50); 
addDonation('مروان الممي', 50); 
addDonation('امين السوسي',20);
addDonation('امحمد الشملي',80);
addDonation('سفيان الناقس',150);
addDonation('امين السوسي',100);
addDonation('فهمي الدوس',50);
addDonation('نبيل القيلوزي',300);
addDonation('يوسف الديماسي',100);
addDonation('بدر الدين الصيد',105);
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

/* 18/02 */

addDonation('محمد كوزانة', 20);
addDonation('محمد العوام', 20);
addDonation('محمد الحاج خليفة', 20);
addDonation('فاروق الغربي', 20);
addDonation('ايمن الكعلى', 200);
addDonation('رحمة فضلون', 50);
addDonation('توفيق العارم', 20);
addDonation('احمد ساسی', 50);
addDonation('اياد الميلادي', 20);
addDonation('حسين الغربي', 20);
addDonation('عبد الرحيم بوغزالة', 100); 
addDonation('ازر مغیث', 50); 
addDonation('ضياء الصوفارجي', 20); 
addDonation('انيس منصور', 150); 
addDonation('احمد الاشهب', 100); 
addDonation('محمود الدردوري', 100);
addDonation('مروان الشرفي', 60);
addDonation('رائد فنطر', 100);

/* 20/02*/

// Add a new donation with the Arabic names

addDonation("سيف الديماسي", 50);
addDonation("محمد الشبيل", 40);
addDonation("آدم قفصية", 50);
addDonation("اسكندر الغربي", 50);
addDonation("وجدي حسين", 30);
addDonation("لطفي الصيد", 30);
addDonation("أشرف New Look", 20);
addDonation("صالح قم", 30);
addDonation("مهدي بوغزالة", 10);
addDonation("مراد محرز", 30);
addDonation("الناصر الخروبي", 30);
addDonation(" نجيب بوفروة", 50);

/* 22/02*/
addDonation('مروان نطاط', 30);
addDonation('صالح قرن', 80);
addDonation('أحمد المعلال', 150);
addDonation('سهيل التركي', 20);
addDonation('عزيز الزياتي (روتانا)', 50);
addDonation('نزار غويلة', 20);
addDonation('حبيب الحذيري', 10);
addDonation('محمد النافض', 50);
addDonation('أحمد ماما', 20);
addDonation('وائل الزارد', 30);
addDonation('أمين المعلال', 10);
addDonation('أحمد ماما عادل', 60);
addDonation('حسين الذوادي', 40);
addDonation('رفيق ماضي', 60);
addDonation(' محمد الميلادي ', 20);

// Function to calculate and display the percentage
function calculateAndDisplayPercentage() {
    const totalPercentage = (totalAmount / 20000) * 100; // Calculate the percentage
    const roundedPercentage = totalPercentage.toFixed(2); // Round the percentage to two decimal places
    document.getElementById('percentage').textContent = `(${roundedPercentage}%)`; // Display the percentage in the element
}
calculateAndDisplayPercentage();

















