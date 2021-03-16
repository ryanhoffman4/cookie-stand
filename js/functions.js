

//array for business hours
new hour_open['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];



//generate random number of customers for hour
function customersInHour() 
{
  //initialize array
  new hourly_customers(hour_open.length); 

  //loop over business hours, assign each hour number of customers
  for (let i = 0; i < hour_open.length; i++)
  {
    hourly_customers[i] = Math.floor(Math.random() * 100);//number constrained from 0 to 100
  }

  //return the array
  return hourly_customers;
}



//generate random number of cookies for hour
function cookiesInHour(hour_customers) 
{
  //initialize array
  new hourly_cookies(hour_open.length); 

  //loop over business hours, assign each hour number of customers
  for (let i = 0; i < hour_open.length; i++)
  {
    cookies_for_person[i] = Math.floor(Math.random() * 20);//number constrained from 0 to 20

    //return the array
    return hour_customers[i] * cookies_for_person[i];
  }

  //return the array
  return 
}



//calculate minumum customers
function get_minimum(array) //passing array as argument?????
{
  let minimum = array[0];
  for (let i = 0; i < array.length; i++)
  {
    if (minimum > array[i])
    {
      minimum = array[i];
    }
  }
  return minimum;
}



//calculate maximum customers
function get_maximum(array) //passing array as argument?????
{
  let maximum = array[0];
  for (let i = 0; i < array.length; i++)
  {
    if (maximum < array[i])
    {
      maximum = array[i];
    }
  }
  return maximum;
}



function get_total(array) //passing array as argument?????
{
  let sum = 0;
  for (let i = 0; i < array.length; i++)
  {
    sum = sum + array[i];
  }
  return sum;
}



//calculate average cookies per hour
function get_average(cookies, customer)
{
  let average = cookies/customer;
  return average;
}