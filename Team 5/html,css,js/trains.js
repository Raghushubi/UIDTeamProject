const urlParams = new URLSearchParams(window.location.search);
const fromStation = urlParams.get('from');
const toStation = urlParams.get('to');
const date = urlParams.get('date');

const schedulesData = [
    { "train_name": "Royal Rajdhani", "station_code": "DEL", "destination_code": "NDLS", "day": 1, "departure": "08:00 AM", "arrival": "6:30 PM"},
    { "train_name": "Golden Chariot", "station_code": "MUM", "destination_code": "BCT", "day": 1, "departure": "10:00 AM", "arrival": "05:00 PM" },
    { "train_name": "Himalayan Explorer", "station_code": "SRI", "destination_code": "JU", "day": 1, "departure": "6:00 PM", "arrival": "04:00 PM" },
    { "train_name": "Southern Spice Express", "station_code": "HYD", "destination_code": "MAS", "day": 1, "departure": "09:00 AM", "arrival": "01:00 PM" },
    { "train_name": "Mughal Express", "station_code": "LKO", "destination_code": "NDLS", "day": 1, "departure": "11:00 AM", "arrival": "03:00 PM" },
    { "train_name": "Goa Carnival Express", "station_code": "PNQ", "destination_code": "MAO", "day": 1, "departure": "12:30 AM", "arrival": "02:30 PM" },
    { "train_name": "Tiger Trail Express", "station_code": "BHO", "destination_code": "MAS", "day": 1, "departure": "02:30 AM", "arrival": "11:30 AM" },
    { "train_name": "Lotus Express", "station_code": "PAT", "destination_code": "MAS", "day": 1, "departure": "11:45 AM", "arrival": "03:45 PM" },
    { "train_name": "Rajputana Royal", "station_code": "JAI", "destination_code": "NDLS", "day": 1, "departure": "04:15 AM", "arrival": "12:15 PM" },
    { "train_name": "Kolkata Shatabdi", "station_code": "CCU", "destination_code": "NDLS", "day": 1, "departure": "05:45 AM", "arrival": "01:45 PM" },
    { "train_name": "Ganga Queen", "station_code": "PAT", "destination_code": "MAS", "day": 1, "departure": "10:30 AM", "arrival": "02:30 PM" },
    { "train_name": "Kashmir Paradise", "station_code": "SRI", "destination_code": "NDLS", "day": 1, "departure": "07:00 AM", "arrival": "11:00 AM" },
    { "train_name": "Assam Tea Express", "station_code": "GND", "destination_code": "NDLS", "day": 1, "departure": "08:30 AM", "arrival": "12:30 PM" },
    { "train_name": "Vibrant Gujarat Express", "station_code": "AMR", "destination_code": "NDLS", "day": 1, "departure": "10:15 AM", "arrival": "02:15 PM" },
    { "train_name": "Punjabi Express", "station_code": "AGR", "destination_code": "NDLS", "day": 1, "departure": "12:45 PM", "arrival": "04:45 PM" },
    { "train_name": "Konkan Coastal", "station_code": "NDLS", "destination_code": "MAS", "day": 1, "departure": "08:30 AM", "arrival": "12:30 PM" },
    { "train_name": "Malabar Magic", "station_code": "DEL", "destination_code": "MAS", "day": 1, "departure": "10:45 AM", "arrival": "02:45 PM" },
    { "train_name": "Bengal Tiger", "station_code": "HYD", "destination_code": "MAS", "day": 1, "departure": "11:00 AM", "arrival": "03:00 PM" },
    { "train_name": "Gujarat Lion", "station_code": "SRI", "destination_code": "NDLS", "day": 1, "departure": "09:15 AM", "arrival": "09:55 PM" },
    { "train_name": "Nepal Himalaya Express", "station_code": "AMR", "destination_code": "HYD", "day": 1, "departure": "07:45 AM", "arrival": "11:45 AM" },
    { "train_name": "Tamil Nadu Express", "station_code": "MAS", "destination_code": "NDLS", "day": 1, "departure": "10:30 AM", "arrival": "02:30 PM" },
    { "train_name": "Telangana Tiger", "station_code": "HYD", "destination_code": "NDLS", "day": 1, "departure": "09:30 AM", "arrival": "01:30 PM" },
    { "train_name": "Bihar Mahotsav", "station_code": "PNBE", "destination_code": "HYD", "day": 1, "departure": "08:00 AM", "arrival": "11:00 PM" },
    { "train_name": "Goan Carnival", "station_code": "RAI", "destination_code": "HYD", "day": 1, "departure": "11:15 AM", "arrival": "03:15 PM" },
    { "train_name": "Rajasthan Desert Queen", "station_code": "JU", "destination_code": "NDLS", "day": 1, "departure": "08:45 AM", "arrival": "12:45 PM" },
    { "train_name": "Himalayan Odyssey", "station_code": "KNU", "destination_code": "NDLS", "day": 1, "departure": "09:15 AM", "arrival": "01:15 PM" },
    { "train_name": "Mumbai Meri Jaan", "station_code": "BCT", "destination_code": "NDLS", "day": 1, "departure": "10:00 AM", "arrival": "02:00 PM" },
    { "train_name": "Kolkata Express", "station_code": "HWH", "destination_code": "MAS", "day": 1, "departure": "11:30 AM", "arrival": "03:30 PM" },
    { "train_name": "Chennai Superstar", "station_code": "MAS", "destination_code": "NDLS", "day": 1, "departure": "12:15 PM", "arrival": "04:15 PM" },
    { "train_name": "Hyderabad Humsafar", "station_code": "HYB", "destination_code": "MAS", "day": 1, "departure": "09:00 AM", "arrival": "01:00 PM" },
    { "train_name": "Delhi Duronto", "station_code": "NDLS", "destination_code": "MAS", "day": 1, "departure": "12:30 AM", "arrival": "02:30 PM" },
    { "train_name": "Jaipur Jodhpur Joyride", "station_code": "JU", "destination_code": "NDLS", "day": 1, "departure": "08:30 PM", "arrival": "04:30 PM" },
    { "train_name": "Pune Express", "station_code": "RAI", "destination_code": "NDLS", "day": 1, "departure": "04:30 AM", "arrival": "11:30 AM" },
    { "train_name": "Lucknow Express", "station_code": "LKO", "destination_code": "NDLS", "day": 1, "departure": "08:45 AM", "arrival": "01:45 PM" },
    { "train_name": "Varanasi Voyager", "station_code": "BLR", "destination_code": "NDLS", "day": 1, "departure": "1:00 AM", "arrival": "03:00 PM" },
    { "train_name": "Ahmedabad Adventure", "station_code": "ADI", "destination_code": "NDLS", "day": 1, "departure": "2:15 PM", "arrival": "04:15 PM" },
    { "train_name": "Kerala Konnect", "station_code": "ERS", "destination_code": "NDLS", "day": 1, "departure": "08:30 AM", "arrival": "12:30 PM" },
    { "train_name": "Madras Marvel", "station_code": "RAI", "destination_code": "MAS", "day": 1, "departure": "09:00 AM", "arrival": "01:00 PM" },
    { "train_name": "Karnataka Express", "station_code": "BLR", "destination_code": "NDLS", "day": 1, "departure": "10:45 AM", "arrival": "02:45 PM" },
    { "train_name": "Gujarat Glory", "station_code": "ADI", "destination_code": "NDLS", "day": 1, "departure": "11:30 AM", "arrival": "03:30 PM" },
    { "train_name": "Rajasthani Rendezvous", "station_code": "JU", "destination_code": "NDLS", "day": 1, "departure": "12:45 PM", "arrival": "04:45 PM" },
    { "train_name": "Uttar Pradesh Utsav", "station_code": "LKO", "destination_code": "NDLS", "day": 1, "departure": "08:15 AM", "arrival": "12:15 PM" },
    { "train_name": "Bengaluru Bonanza", "station_code": "SBC", "destination_code": "NDLS", "day": 1, "departure": "09:30 AM", "arrival": "01:30 PM" },
    { "train_name": "Chandigarh Chariot", "station_code": "CDG", "destination_code": "NDLS", "day": 1, "departure": "12:45 AM", "arrival": "03:45 PM" },
    { "train_name": "Goan Gala", "station_code": "MAO", "destination_code": "NDLS", "day": 1, "departure": "12:00 PM", "arrival": "04:00 PM" },
    { "train_name": "Mysore Majesty", "station_code": "MYS", "destination_code": "NDLS", "day": 1, "departure": "10:00 AM", "arrival": "02:00 PM" },
    { "train_name": "Kerala Kanyakumari Express", "station_code": "TVC", "destination_code": "NDLS", "day": 1, "departure": "11:30 AM", "arrival": "03:30 PM" },
    { "train_name": "Puri Pinnacle", "station_code": "PAN", "destination_code": "LKO", "day": 1, "departure": "09:15 AM", "arrival": "01:15 PM" },
    { "train_name": "Agra Aerial", "station_code": "AMR", "destination_code": "NDLS", "day": 1, "departure": "12:30 PM", "arrival": "04:30 PM" },
    { "train_name": "Kolkata Konnect", "station_code": "AGR", "destination_code": "NDLS", "day": 1, "departure": "08:45 AM", "arrival": "12:45 PM" },
    { "train_name": "Rajasthan Royal", "station_code": "JU", "destination_code": "AGR", "day": 1, "departure": "10:15 AM", "arrival": "02:15 PM" },
    { "train_name": "Chennai Coastal", "station_code": "MAS", "destination_code": "DEL", "day": 1, "departure": "11:00 AM", "arrival": "03:00 PM" },
    { "train_name": "Vizag Voyager", "station_code": "AGR", "destination_code": "MAS", "day": 1, "departure": "07:30 AM", "arrival": "11:30 AM" },
    { "train_name": "Ahmedabad Adventure", "station_code": "ADI", "destination_code": "HYD", "day": 1, "departure": "09:45 AM", "arrival": "01:45 PM" },
    { "train_name": "Assam Ascent", "station_code": "LKO", "destination_code": "HYD", "day": 1, "departure": "10:30 AM", "arrival": "02:30 PM" }
];

const trainTable = document.getElementById('trainTable');

function getRandomAvailability() {
    const randomNumber = Math.floor(Math.random() * 100) + 1; 
    if (randomNumber <= 50) {
        return `<span style="color: green;">Available ${randomNumber}</span>`;
    } else if (randomNumber <= 80) {
        return `<span style="color: orange;">RAC ${randomNumber}</span>`;
    } else {
        return `<span style="color: red;">WL ${randomNumber}</span>`;
    }
}

function handleBookNowClick(trainDetails) {
  document.getElementById("trainName").innerText = trainDetails.train_name;
  document.getElementById("departureTime").innerText = trainDetails.departure;
  document.getElementById("arrivalTime").innerText = trainDetails.arrival;
  $('#bookingModal').modal('show');
}

document.getElementById('confirmBooking').addEventListener('click', () => {
  const passengerName = document.getElementById('passengerName').value;
  const passengerAge = document.getElementById('passengerAge').value;
  const passengerGender = document.getElementById('passengerGender').value;
  const berthPreference = document.getElementById('berthPreference').value;

  if (!passengerName || !passengerAge || !passengerGender || !berthPreference) {
      alert('Please fill out all fields.');
      return;
  }

  if (passengerAge <= 0 || passengerAge > 120) {
      alert('Please enter a valid age.');
      return;
  }

  const bookingDetails = {
      trainName: document.getElementById('trainName').innerText,
      departureTime: document.getElementById('departureTime').innerText,
      arrivalTime: document.getElementById('arrivalTime').innerText,
      passengerName,
      passengerAge,
      passengerGender,
      berthPreference,
  };

  const queryString = new URLSearchParams(bookingDetails).toString();
  window.location.href = `webpage4.html?${queryString}`;
});

schedulesData.forEach(schedule => {
  if (schedule.station_code === fromStation && schedule.day === 1) {
      const row = trainTable.insertRow();
      row.innerHTML = `
          <td>${schedule.train_name}</td>
          <td>${schedule.departure}</td>
          <td>${schedule.arrival}</td>
          <td>${getRandomAvailability()}</td>
          <td><button class="btn btn-primary book-now">Book Now</button></td>
      `;
      const bookNowButton = row.querySelector('.book-now');
      bookNowButton.addEventListener('click', () => handleBookNowClick(schedule));
  }
});