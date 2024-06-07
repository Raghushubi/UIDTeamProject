// Parse the query string to get booking details
const urlParams = new URLSearchParams(window.location.search);
const bookingDetails = {
    trainName: urlParams.get('trainName'),
    departureTime: urlParams.get('departureTime'),
    arrivalTime: urlParams.get('arrivalTime'),
    passengerName: urlParams.get('passengerName'),
    passengerAge: urlParams.get('passengerAge'),
    passengerGender: urlParams.get('passengerGender'),
    berthPreference: urlParams.get('berthPreference')
};

function displayBookingDetails(details) {
    const bookingDetailsDiv = document.getElementById('bookingDetails');
    bookingDetailsDiv.innerHTML = `
        <p><strong>Train Name:</strong> ${details.trainName}</p>
        <p><strong>Departure Time:</strong> ${details.departureTime}</p>
        <p><strong>Arrival Time:</strong> ${details.arrivalTime}</p>
        <p><strong>Passenger Name:</strong> ${details.passengerName}</p>
        <p><strong>Passenger Age:</strong> ${details.passengerAge}</p>
        <p><strong>Passenger Gender:</strong> ${details.passengerGender}</p>
        <p><strong>Berth Preference:</strong> ${details.berthPreference}</p>
    `;
}

document.getElementById('paymentMethod').addEventListener('change', function() {
    const paymentMethod = this.value;
    if (paymentMethod === 'creditCard') {
        document.getElementById('creditCardDetails').style.display = 'block';
        document.getElementById('upiDetails').style.display = 'none';
    } else if (paymentMethod === 'upi') {
        document.getElementById('creditCardDetails').style.display = 'none';
        document.getElementById('upiDetails').style.display = 'block';
    } else {
        document.getElementById('creditCardDetails').style.display = 'none';
        document.getElementById('upiDetails').style.display = 'none';
    }
});

document.getElementById('confirmPayment').addEventListener('click', function() {
    const paymentMethod = document.getElementById('paymentMethod').value;

    if (!paymentMethod) {
        alert('Please select a payment method.');
        return;
    }

    if (paymentMethod === 'creditCard') {
        const cardNumber = document.getElementById('cardNumber').value;
        const cardHolderName = document.getElementById('cardHolderName').value;
        const cvv = document.getElementById('cvv').value;

        if (!cardNumber || !cardHolderName || !cvv) {
            alert('Please fill in all credit card details.');
            return;
        }

        if (cardNumber.length !== 16 || isNaN(cardNumber)) {
            alert('Please enter a valid 16-digit card number.');
            return;
        }

        if (cvv.length !== 3 || isNaN(cvv)) {
            alert('Please enter a valid 3-digit CVV.');
            return;
        }
    }

    if (paymentMethod === 'upi') {
        const upiId = document.getElementById('upiId').value;
        if (!upiId) {
            alert('Please enter your UPI ID.');
            return;
        }
    }

    $('#confirmationModal').modal('show');
});


displayBookingDetails(bookingDetails);
