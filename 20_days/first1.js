

const Promises = fetch(`http://api.weatherapi.com/v1/current.json?key=763cafeb8eb941fead1135903251908&q=Kolkata&aqi=yes`);


Promises.then((response)=>{
  const pro2 = response.json();
  pro2.then((data)=>{
console.log(data)
  });
})