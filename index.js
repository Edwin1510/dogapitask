const apiUrl = "https://random.dog/woof.json"

const imageArea = document.getElementById("dog-image");
const overlay = document.getElementById("overlay");



const loaddogImage = ({ url }) => {
  imageArea.innerHTML = "";
   const imgElement = document.createElement("img");
   imgElement.src = url;
   imageArea.appendChild(imgElement);
   overlay.style.display = "none";
 
};



const getRandomdog = async () => {
 overlay.style.display = "flex";
  const response = await fetch(apiUrl);
  const data = await response.json();

  loaddogImage(data);
  
};

getRandomdog();