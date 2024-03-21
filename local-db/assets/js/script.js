const inputKey = document.getElementById("inputKey");
const inputValue = document.getElementById("inputValue");
const inputImg = document.getElementById("inputImg");
//Inserting data
document.getElementById("btnInsert").onclick = function() {
    const key = inputKey.value;
     const values = inputImg.value;
     const valuess = inputValue.value;

   // const value =`${values}`.concat`${valuess}`
//generate random id
const getRandomId = () => {
    let randomId = Math.floor(Math.random() * 1000);
    return randomId;
};
let id = getRandomId();

//     var myObject = { id, name: `${values}`, email:`${valuess}` };
// localStorage.setItem(key, JSON.stringify(myObject));


    if(id){
        var myObject = { name:`${key}`, image: `${values}`, email:`${valuess}` };
    localStorage.setItem(id, JSON.stringify(myObject));
        window.location.reload();
        alert("user add successfully");
    }else{
        alert("Must enter value");
    }

    // if(key){
    //     var myObject = { id, name: `${values}`, email:`${valuess}` };
    // localStorage.setItem(key, JSON.stringify(myObject));
    //     window.location.reload();
    //     alert("user add successfully");
    // }else{
    //     alert("Must enter value");
    // }

    // if(key && value){
    //     localStorage.setItem(key, value);
    //     window.location.reload();
    // }else{
    //     alert("Must enter value");
    // }  
    
};




if(localStorage.length == 0){
    document.getElementById("autoFILL").innerHTML =
     `No User`;
    document.getElementById("avialRecords").style.display = "none";
};



//delete user 
// document.getElementById("btnDelete").onchange = function () {
 

//     if (key) {
//         localStorage.removeItem(`${value}` == id);
//         window.location.reload();
//         alert('user delete successfully');
//       }

    
// //     let storedValue = localStorage.getItem('key');

// // let storedData = JSON.parse(storedValue);

// // storedData = storedData.filter( (id) => value !== 'valueToRemove');

// // localStorage.setItem('key', JSON.stringify(storedData));

// };

// function deletedata(did){
//     //document.getElementById("art_"+did).remove();
//     localStorage.removeItem(did);
//     window.location.reload();
//     alert('user delete successfully');    
// }

function deletedata(key){
 if(key) {  localStorage.removeItem(key);
    window.location.reload();
    alert('user delete successfully');  }  
};