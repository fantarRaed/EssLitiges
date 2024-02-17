﻿// Define variables to hold the donation count and total amount
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
    newDonation.textContent = `${name} - $${amount}`;
    donorList.appendChild(newDonation);
}

// Update the UI with initial values
updateDonationStats();

// Example usage:
// Add a new donation
addDonation('John Doe', 50); // Example donation
addDonation('John Raed', 500); // Example donation
addDonation('Ali Raed', 50); // Example donation
addDonation('RAed ff', 5500); // Example donation

addDonation('Aziz Amara', 500); // Example donation
