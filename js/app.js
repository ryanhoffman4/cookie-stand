

//Stores the min/max hourly customers, and the average cookies per customer, in object properties
let Seattle = 
{
  //customers per hour, along with minimum, maximum, and total
  hourCust: customersInHour(),
  minCust: get_minimum(hourCust),
  maxCust: get_maximum(hourCust),
  totalCust: get_total(hourCust),

  //cookies per hour, and total
  hourCook: cookiesInHour(hourCust),
  totalCook: get_total(hourCook),

  //average cookies per hour: total cookies

  aveCook: get_average(totalCook, totalCust) //can't really follow assignment????????
};


//Display the values of each array as unordered lists in the browser






//Other Cities
let Tokyo = 
{
  hourCust: customersInHour(),
  minCust: get_minimum(hourCust),
  maxCust: get_maximum(hourCust),
  totalCust: get_total(hourCust),
  hourCook: cookiesInHour(hourCust),
  totalCook: get_total(hourCook),
  aveCook: get_average(totalCook, totalCust)
};


let Dubai = 
{
  hourCust: customersInHour(),
  minCust: get_minimum(hourCust),
  maxCust: get_maximum(hourCust),
  totalCust: get_total(hourCust),
  hourCook: cookiesInHour(hourCust),
  totalCook: get_total(hourCook),
  aveCook: get_average(totalCook, totalCust)
};


let Paris = 
{
  hourCust: customersInHour(),
  minCust: get_minimum(hourCust),
  maxCust: get_maximum(hourCust),
  totalCust: get_total(hourCust),
  hourCook: cookiesInHour(hourCust),
  totalCook: get_total(hourCook),
  aveCook: get_average(totalCook, totalCust)
};


let Lima = 
{
  hourCust: customersInHour(),
  minCust: get_minimum(hourCust),
  maxCust: get_maximum(hourCust),
  totalCust: get_total(hourCust),
  hourCook: cookiesInHour(hourCust),
  totalCook: get_total(hourCook),
  aveCook: get_average(totalCook, totalCust)
};