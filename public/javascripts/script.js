const api_url ='https://api.wheretheiss.at/v1/satellites'
getISS();

async function getISS(){
  const response = await fetch(api_url);
  const data = await response.json();
  console.log(data);
}