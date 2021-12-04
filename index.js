async function renderDynamicContent() {
  const arr = [
    {
      name: "India",
      population: 130000000,
      capital: "New Delhi",
      url: "https://images.news18.com/ibnlive/uploads/2021/08/national-flag-16289133273x2.jpg?impolicy=website&width=510&height=356",
    },
    {
        name: "India",
        population: 130000000,
        capital: "New Delhi",
        url: "https://images.news18.com/ibnlive/uploads/2021/08/national-flag-16289133273x2.jpg?impolicy=website&width=510&height=356",
      }
  ];
  //document.getElementById('dynamic-content').innerHTML = "Dynamic content"
 const res=await fetch("https://codejudge-question-artifacts-dev.s3.amazonaws.com/q-1709/data.json")
    data= await res.json();
    console.log(data)
    data.forEach(element => {
        let div=document.createElement('div');
        let img=document.createElement('img');
        let name=document.createElement('h3');
        name.textContent=element.name;
        let Population=document.createElement('h6');
        Population.innerHTML=`<div><h5>Population :</h5><p>${element.population}</p></div>`;
        let Region=document.createElement('h6');
        Region.innerHTML=`<div><h5>Region :</h5><p>${element.region}</p></div>`
        let Capital=document.createElement('h6');
        Capital.innerHTML=`<div><h5>Capital :</h5><p>${element.capital}</p></div>`
        img.src=element.flag;
        div.append(img,name,Population,Region,Capital);
        document.getElementById('dynamic-content').append(div)

    });
}

async function search(){
    const search=document.getElementById('search-box').value;
    const res=await fetch("https://codejudge-question-artifacts-dev.s3.amazonaws.com/q-1709/data.json")
    data= await res.json();
    const result=data.filter((element)=>{
        if(element.name==search){
            return element;
        }
    })
    console.log(result);
    if(result.length==0){
        document.getElementById('dynamic-content').innerHTML=`No country found!`;
    }
    result.forEach(element => {
        let div=document.createElement('div');
        let img=document.createElement('img');
        let name=document.createElement('h3');
        name.textContent=element.name;
        let Population=document.createElement('h6');
        Population.innerHTML=`<div><h5>Population :</h5><p>${element.population}</p></div>`;
        let Region=document.createElement('h6');
        Region.innerHTML=`<div><h5>Region :</h5><p>${element.region}</p></div>`
        let Capital=document.createElement('h6');
        Capital.innerHTML=`<div><h5>Capital :</h5><p>${element.capital}</p></div>`
        img.src=element.flag;
        div.append(img,name,Population,Region,Capital);
        document.getElementById('dynamic-content').innerHTML=null;
        document.getElementById('dynamic-content').append(div)


    });
}
