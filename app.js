document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  console.log("on");
  let numbers = document.getElementById("number").value;
  console.log(numbers);
  let name=document.getElementById("name").value;

  const xhr = new XMLHttpRequest();
  xhr.open("GET", `http://api.icndb.com/jokes/random/${numbers}?firstName=${name}&lastName=`, true); //http://api.icndb.com/jokes/random?firstName=John&lastName=Doe
  //console.log(`http://api.icndb.com/jokes/random/${numbers}`);
 xhr.onprogress=function(){
     console.log("loading");
 }
  xhr.onload = function () {
    if (this.status === 200) {
      const datas = JSON.parse(this.responseText);
      let ulContent = "";
      if (datas.type === "success") {
        datas.value.forEach((data) => {
          ulContent += `
                    <li>${data.joke}</li>
                    
                    `;
        });
      } else {
        ulContent += `<li>Something Went Wrong...</li>`;
      }
      document.querySelector(".jokes").innerHTML = ulContent;
    }
    
  };
  xhr.send();


  e.preventDefault();
}
