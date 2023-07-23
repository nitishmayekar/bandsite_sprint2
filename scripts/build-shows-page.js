
const container = document.getElementById('concerts-container');

const table = document.createElement('table');
table.classList.add('concerts-table');

const headerRow = document.createElement('tr');

const headerDate = document.createElement('th');
headerDate.textContent = 'DATE';
headerRow.appendChild(headerDate);

const headerVenue = document.createElement('th');
headerVenue.textContent = 'VENUE';
headerRow.appendChild(headerVenue);

const headerLocation = document.createElement('th');
headerLocation.textContent = 'LOCATION';
headerRow.appendChild(headerLocation);

const headerAction = document.createElement('th');
headerAction.textContent = '';
headerRow.appendChild(headerAction);

table.appendChild(headerRow);


fetch('https://project-1-api.herokuapp.com/showdates?api_key=${result.data.api_key}')
  .then(response => response.json())
  .then(data => {
    data.forEach(function(concert) {
      const row = document.createElement('tr');

      const dateCell = document.createElement('td');
      dateCell.textContent = new Date(concert.date).toDateString();
      dateCell.classList.add('concert-date');
      row.appendChild(dateCell);

      const venueCell = document.createElement('td');
      venueCell.textContent = concert.place;
      venueCell.classList.add('concert-venue'); 
      row.appendChild(venueCell);

      const locationCell = document.createElement('td');
      locationCell.textContent = concert.location;
      locationCell.classList.add('concert-location'); 
      row.appendChild(locationCell);

      const actionCell = document.createElement('td');
      const buyButton = document.createElement('button');
      buyButton.textContent = 'BUY TICKETS';
      buyButton.classList.add('buy-ticket-button');
      actionCell.appendChild(buyButton);
      row.appendChild(actionCell);

      table.appendChild(row);
    });

    container.appendChild(table);
  })
  .catch(error => {
    console.log('Error fetching concert data:', error);
  });

