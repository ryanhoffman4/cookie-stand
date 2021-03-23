
//set cookie stand constructor
function Location (minCust, maxCust, avg_cook) 
{
  //set basic constructor parameters
  this.minimum_customers = minCust;
  this.maximum_customers = maxCust;
  this.average_cookies_per_sale = avg_cook;

  //randomly generate customers per hour
  this.customers_per_hour = function() {return Math.floor(Math.random() * 100)};

  //calculate average hourly cookies using randomly generated customers per hour and average cookies per sale
  //store average hourly cookies into an array
  this.array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  this.generate_hourly_cookies = function ()
  {
    for (let i = 0; i < 14; i++)
    {
      this.array[i] = Math.floor(this.customers_per_hour() * this.average_cookies_per_sale)
    }
  };

  //calculate daily total cookies sold
  //loop over hourly cookie array, add each element together
  this.daily_cookie_total = 0;
  this.calculate_daily_cookie_total = function ()
  {
    for (let i = 0; i < 14; i++)
    {
      this.daily_cookie_total += this.array[i];
    }
  };

  //print hourly and daily data onto HTML page
  //function prints data into table format
  this.render = function() 
  {
    for (let i = 0; i < 14; i++)
    {
      document.write('<td><script>document.write(' + this.array[i] + ');</script></td>');
    }
    
    document.write('<th><script>document.write(' + this.daily_cookie_total + ');</script></th>');
  };
}

//set array for business hours
//print function for head of table
let business_hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
print_hours = function()
{
  //empty top left table corner
  document.write('<th></th>');

  //display hours across head of table
  for (let i = 0; i < business_hours.length; i++)
  {
    document.write('<th>' + business_hours[i] + '</th>');
  }

  //display total in top right table corner 
  document.write('<th>Daily Total</th>');
};


//construct stand locations
let Seattle = new Location(23, 65, 6.3);
let Tokyo = new Location(3, 24, 1.2);
let Dubai = new Location(11, 38, 3.7);
let Paris = new Location(20, 38, 2.3);
let Lima = new Location(2, 16, 4.6);

//establish stand data
Seattle.generate_hourly_cookies();
Tokyo.generate_hourly_cookies();
Dubai.generate_hourly_cookies();
Paris.generate_hourly_cookies();
Lima.generate_hourly_cookies();

//calculate daily cookie total
Seattle.calculate_daily_cookie_total();
Tokyo.calculate_daily_cookie_total();
Dubai.calculate_daily_cookie_total();
Paris.calculate_daily_cookie_total();
Lima.calculate_daily_cookie_total();

//function to calculate and print company hourly total
company_hourly_total = function()
{
  let hourly_total = 0;
  for (let i = 0; i < 14; i++)
  {
    hourly_total = Seattle.array[i] + Tokyo.array[i] + Dubai.array[i] + Paris.array[i] + Lima.array[i];
    document.write('<th><script>document.write(' + hourly_total + ');</script></th>');
    hourly_total = 0;
  }
}