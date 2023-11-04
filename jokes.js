let btnEl = document.getElementById('btn')
let jokeEl = document.getElementById('joke')
const apikey = "Xie3WF+vOHDu0IUWSbkraw==dzuWNzJXhXBlFQ1O";
  const option  = {
    method :"GET",
    headers :{
        "X-Api-Key":apikey,
    },
  };
  const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit= 1";
 async function getjoke(){

try {
  jokeEl.innerText = "Updating......";
  btnEl.disabled = true;
  btnEl.innerText = "Loading...";
    const response = await fetch(apiURL,option);
    const data =  await response.json();
    btnEl.disabled = false;
    btnEl.innerText = "tell me a joke";
    jokeEl.innerText = data[0].joke;
  } catch (error) {
    jokeEl.innerText = "An Error Occure ,Try again ";
    btnEl.disabled = false;
    btnEl.innerText = "tell me a joke";
}
}

btnEl.addEventListener('click',getjoke)