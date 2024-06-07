const stationsData = {
    "features": [
        { "properties": { "code": "AMR", "name": "Amaravati" } }, 
        { "properties": { "code": "AGR", "name": "Agartala" } },
        { "properties": { "code": "AIZ", "name": "Aizawl" } }, 
        { "properties": { "code": "BLR", "name": "Bengaluru" } }, 
        { "properties": { "code": "BHO", "name": "Bhopal" } },
        { "properties": { "code": "BCT", "name": "Mumbai Central" } }, 
        { "properties": { "code": "BHJ", "name": "Bhubaneswar" } }, 
        { "properties": { "code": "CHD", "name": "Chandigarh" } },  
        { "properties": { "code": "DIS", "name": "Dispur" } },
        { "properties": { "code": "DEL", "name": "New Delhi" } },
        { "properties": { "code": "DHD", "name": "Dehradun" } },
        { "properties": { "code": "GND", "name": "Gandhinagar" } },
        { "properties": { "code": "HYD", "name": "Hyderabad" } },
        { "properties": { "code": "HDK", "name": "Kolkata" } },
        { "properties": { "code": "HPR", "name": "Gangtok" } },
        { "properties": { "code": "NDLS", "name": "New Delhi Main" } },
        { "properties": { "code": "ITP", "name": "Itanagar" } },
        { "properties": { "code": "IMP", "name": "Imphal" } },
        { "properties": { "code": "JU", "name": "Jodhpur" } }, 
        { "properties": { "code": "JAI", "name": "Jaipur" } }, 
        { "properties": { "code": "PAT", "name": "Patna" } }, 
        { "properties": { "code": "RAI", "name": "Raipur" } },
        { "properties": { "code": "PAN", "name": "Panaji" } }, 
        { "properties": { "code": "SHM", "name": "Shimla" } }, 
        { "properties": { "code": "SRN", "name": "Srinagar" } },
        { "properties": { "code": "SRI", "name": "Srirangam" } },
        { "properties": { "code": "RNC", "name": "Ranchi" } }, 
        { "properties": { "code": "TVM", "name": "Thiruvananthapuram" } }, 
        { "properties": { "code": "MUM", "name": "Mumbai" } }, 
        { "properties": { "code": "SHL", "name": "Shillong" } },
        { "properties": { "code": "NLD", "name": "Kohima" } }, 
        { "properties": { "code": "MAS", "name": "Madras" } }, 
        { "properties": { "code": "LKO", "name": "Lucknow" } },
    ]
};
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fromStation = document.getElementById('fromStation').value;
    const toStation = document.getElementById('toStation').value;
    const date = document.getElementById('date').value;
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

    // Validate the form inputs
    if (!fromStation || !toStation || !date) {
        alert('Please select both the departure and destination stations and a date.');
        return;
    }

    if (date < today) {
        alert('The travel date cannot be in the past.');
        return;
    }

    // If validation passes, redirect to the trains.html page
    window.location.href = `trains.html?from=${fromStation}&to=${toStation}&date=${date}`;
});

// Event listener for input on 'fromStation'
document.getElementById('fromStation').addEventListener('input', function(event) {
    const input = event.target.value.toLowerCase();
    const excludeStation = document.getElementById('toStation').value;
    populateOptions(input, 'fromStations', excludeStation);
});

// Event listener for input on 'toStation'
document.getElementById('toStation').addEventListener('input', function(event) {
    const input = event.target.value.toLowerCase();
    const excludeStation = document.getElementById('fromStation').value;
    populateOptions(input, 'toStations', excludeStation);
});


function populateOptions(input, dataListId, excludeStation) {
    const dataList = document.getElementById(dataListId);
    dataList.innerHTML = ''; 
    stationsData.features.forEach(station => {
        const stationName = station.properties.name.toLowerCase();
        const stationCode = station.properties.code;
        if (stationName.startsWith(input) && stationCode !== excludeStation && stationCode !== document.getElementById('fromStation').value && stationCode !== document.getElementById('toStation').value) {
            const option = document.createElement('option');
            option.text = station.properties.name;
            option.value = station.properties.code;
            dataList.appendChild(option);
        }
    });
}

document.getElementById('fromStation').addEventListener('change', clearOtherDatalist);
document.getElementById('toStation').addEventListener('change', clearOtherDatalist);

function clearOtherDatalist(event) {
    const targetId = event.target.id;
    const otherDatalistId = targetId === 'fromStation' ? 'toStations' : 'fromStations';
    document.getElementById(otherDatalistId).innerHTML = '';
}
