var concerts = [
  {
    DATE: "Mon Sept 06 2021",
    VENUE: "Roland Lane",
    LOCATION: "San Francisco, CA"
  },
  {
    DATE: "Tue Sept 21 2021",
    VENUE: "Pier 3 East",
    LOCATION: "San Francisco, CA"
  },
  {
    DATE: "Fri Oct 15 2021",
    VENUE: "View Lounge",
    LOCATION: "San Francisco, CA"
  },
  {
    DATE: "Sat Nov 06 2021",
    VENUE: "Hyatt Agency",
    LOCATION: "San Francisco, CA"
  },
  {
    DATE: "Fri Nov 26 2021",
    VENUE: "Moscow Center",
    LOCATION: "San Francisco, CA"
  },
  {
    DATE: "Wed Dec 15 2021",
    VENUE: "Press Club",
    LOCATION: "San Francisco, CA"
  }
];

var container = document.getElementById('concerts-container');

var table = document.createElement('table');
table.classList.add('concerts-table');

var headerRow = document.createElement('tr');

var headerDate = document.createElement('th');
headerDate.textContent = 'DATE';
headerRow.appendChild(headerDate);

var headerVenue = document.createElement('th');
headerVenue.textContent = 'VENUE';
headerRow.appendChild(headerVenue);

var headerLocation = document.createElement('th');
headerLocation.textContent = 'LOCATION';
headerRow.appendChild(headerLocation);

var headerAction = document.createElement('th');
headerAction.textContent = '';
headerRow.appendChild(headerAction);

table.appendChild(headerRow);

concerts.forEach(function(concert) {
  var row = document.createElement('tr');

  var dateCell = document.createElement('td');
  dateCell.textContent = concert.DATE;
  dateCell.classList.add('concert-date');
  row.appendChild(dateCell);

  var venueCell = document.createElement('td');
  venueCell.textContent = concert.VENUE;
  venueCell.classList.add('concert-venue'); 
  row.appendChild(venueCell);

  var locationCell = document.createElement('td');
  locationCell.textContent = concert.LOCATION;
  locationCell.classList.add('concert-location'); 
  row.appendChild(locationCell);

  var actionCell = document.createElement('td');
  var buyButton = document.createElement('button');
  buyButton.textContent = 'BUY TICKETS';
  buyButton.classList.add('buy-ticket-button');
  actionCell.appendChild(buyButton);
  row.appendChild(actionCell);

  table.appendChild(row);
});

container.appendChild(table);
