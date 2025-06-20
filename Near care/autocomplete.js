let availablecities = [
'Delhi', 'Mumbai', 'Ghaziabad', 'Lucknow', 'Bangalore', 'Hyderabad', 'Kanpur',
 'Jodhpur', 'Jaipur', 'Prayagraj', 'Indore', 'Pune', 'Goa', 'Chennai',
  'Vellore', 'Thiruvananthapuram', 'Kolkata', 'Ahmedabad', 'Punjab', 'Nanital', 
  'Shimla', 'Patna'
];

const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availablecities.filter((keyword)=>{
           return keyword.toLocaleLowerCase().includes(input.toLocaleLowerCase())
        });
        console.log(result)
    }
    display(result);
    if(!result.length){
        resultBox.innerHTML = '';
    }
}
function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });
    resultBox.innerHTML = "<ul>" + content.join('') + "</ul>"
}
function selectInput(list){
    inputBox.value = list.innerHTML
    resultBox.innerHTML = '';
}

document.getElementById('search').onclick = function () {
    const city = inputBox.value.trim();
    if (city) {
      localStorage.setItem('searchText', city);
      window.location.href = `finddoc.html?query=${encodeURIComponent(city)}`;
    } else {
      alert("Please select or enter a valid city!");
    }
}
function myFunction(x) {
    document.getElementById("location").style.borderColor = "#0066ff";
}

function revertBack(){
    document.getElementById("location").style.borderColor = "black";
}