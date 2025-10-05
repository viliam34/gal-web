let podorys = "standard";
let strecha = "sedlova";



let previous_active_color = 'cervena';
let previous_metraz = '25';
let vykurovanie = "gas";
let typ_vyhotovenia = 'empty';
let typ_zakladov = "concrete";


let cena = 60000;
console.log("hovno");


const accessories = {
  garaz: 10000,
  terasa: 450,
  panely: 700,
  bazen: 6000,
  zaluzie: 750
};

function changePodorys(podorys_type){
    if(podorys_type === 'standard'){ // remove active from plocha, add active to sedlova
        document.getElementById(podorys_type).classList.remove("moznost-podorys");
        document.getElementById(podorys_type).classList.add("moznost-podorys-active");
        document.getElementById('elko').classList.remove("moznost-podorys-active");
        document.getElementById('elko').classList.add("moznost-podorys");        
    } else { // remove active from Standard, add active to Elko
        document.getElementById(podorys_type).classList.remove("moznost-podorys");
        document.getElementById(podorys_type).classList.add("moznost-podorys-active");
        document.getElementById('standard').classList.remove("moznost-podorys-active");
        document.getElementById('standard').classList.add("moznost-podorys"); 
        
}
    podorys = podorys_type;
    console.log(updatePrice());
}
function changeRoof(roof_type){
    if(roof_type === 'sedlova'){ // remove active from plocha, add active to sedlova
        document.getElementById(roof_type).classList.remove("moznost-doplnok");
        document.getElementById(roof_type).classList.remove("moznost-doplnok-clicked");
        document.getElementById(roof_type).classList.add("moznost-doplnok-clicked");
        
        document.getElementById('plocha').classList.remove("moznost-doplnok-clicked");
        document.getElementById(roof_type).classList.add("moznost-doplnok");
    } else { // remove active from sedlova, add active to plocha
        document.getElementById(roof_type).classList.remove("moznost-doplnok");
        document.getElementById(roof_type).classList.remove("moznost-doplnok-clicked");
        document.getElementById(roof_type).classList.add("moznost-doplnok-clicked");
        
        document.getElementById('sedlova').classList.remove("moznost-doplnok-clicked");
        document.getElementById(roof_type).classList.add("moznost-doplnok");
        
    }
    strecha = roof_type;
    console.log(updatePrice());
}



function changeMetraz(input_metraz){
    document.getElementById(previous_metraz).classList.remove('moznost-podorys-active');
    document.getElementById(previous_metraz).classList.add('moznost-podorys');
    previous_metraz = input_metraz;
    document.getElementById(input_metraz).classList.remove('moznost-podorys');
    document.getElementById(input_metraz).classList.add('moznost-podorys-active');
    console.log(updatePrice());
}

function changeColor(input_color){
    document.getElementById(previous_active_color).classList.remove('moznost-podorys-active');
    document.getElementById(previous_active_color).classList.add('moznost-podorys');
    previous_active_color = input_color;
    document.getElementById(input_color).classList.remove('moznost-podorys');
    document.getElementById(input_color).classList.add('moznost-podorys-active');
    console.log(updatePrice());
}



function addAccessories(accessory_name) {
  let was_clicked =  document.getElementById(accessory_name).className;
  console.log(was_clicked);
  if (was_clicked === "moznost-doplnok-clicked"){
    document.getElementById(accessory_name).classList.remove("moznost-doplnok-clicked");
    document.getElementById(accessory_name).classList.add("moznost-doplnok");
  } else{
    document.getElementById(accessory_name).classList.remove("moznost-doplnok");
    document.getElementById(accessory_name).classList.add("moznost-doplnok-clicked");
  }
  console.log(updatePrice());
}
function addHeating(heating_type){
    if(heating_type === 'electric'){ // remove active from gas, add active to electric
        document.getElementById(heating_type).classList.remove("moznost-doplnok");
        document.getElementById(heating_type).classList.remove("moznost-doplnok-clicked");
        document.getElementById(heating_type).classList.add("moznost-doplnok-clicked");
        
        document.getElementById('gas').classList.remove("moznost-doplnok-clicked");
        document.getElementById(heating_type).classList.add("moznost-doplnok");
    } else { // remove active from electric, add active to gas
        document.getElementById(heating_type).classList.remove("moznost-doplnok");
        document.getElementById(heating_type).classList.remove("moznost-doplnok-clicked");
        document.getElementById(heating_type).classList.add("moznost-doplnok-clicked");
        
        document.getElementById('electric').classList.remove("moznost-doplnok-clicked");
        document.getElementById(heating_type).classList.add("moznost-doplnok");
        
    }
    vykurovanie = heating_type;
    console.log(updatePrice());
}

function addFoundation(foundation_type){
    if(foundation_type === 'concrete'){ // remove active from gas, add active to electric
        document.getElementById(foundation_type).classList.remove("moznost-doplnok");
        document.getElementById(foundation_type).classList.remove("moznost-doplnok-clicked");
        document.getElementById(foundation_type).classList.add("moznost-doplnok-clicked");
        
        document.getElementById('steel').classList.remove("moznost-doplnok-clicked");
        document.getElementById(foundation_type).classList.add("moznost-doplnok");
    } else { // remove active from electric, add active to gas
        document.getElementById(foundation_type).classList.remove("moznost-doplnok");
        document.getElementById(foundation_type).classList.remove("moznost-doplnok-clicked");
        document.getElementById(foundation_type).classList.add("moznost-doplnok-clicked");
        
        document.getElementById('concrete').classList.remove("moznost-doplnok-clicked");
        document.getElementById(foundation_type).classList.add("moznost-doplnok");
        
    }
    typ_zakladov = foundation_type;
    console.log(updatePrice());
}
function addCompletion(completion_type){
    if(completion_type === 'complete'){ // remove active from gas, add active to electric
        document.getElementById(completion_type).classList.remove("moznost-doplnok");
        document.getElementById(completion_type).classList.remove("moznost-doplnok-clicked");
        document.getElementById(completion_type).classList.add("moznost-doplnok-clicked");
        
        document.getElementById('empty').classList.remove("moznost-doplnok-clicked");
        document.getElementById(completion_type).classList.add("moznost-doplnok");
    } else { // remove active from electric, add active to gas
        document.getElementById(completion_type).classList.remove("moznost-doplnok");
        document.getElementById(completion_type).classList.remove("moznost-doplnok-clicked");
        document.getElementById(completion_type).classList.add("moznost-doplnok-clicked");
        
        document.getElementById('complete').classList.remove("moznost-doplnok-clicked");
        document.getElementById(completion_type).classList.add("moznost-doplnok");
        
        
    }
    typ_vyhotovenia = completion_type;
    console.log(updatePrice());
}
function updatePrice(){ // updates price and picture of a
    let cena = 60000;
    if (previous_metraz === '25'){
        cena = cena;
    };
    if (previous_metraz === '35'){
        cena += 5000;
    }
    if (previous_metraz === '45'){
        cena += 10000;
    }
    if (previous_metraz === '60'){
        cena += 20000;
    }
    if (previous_metraz === '80'){
        cena += 30000;
    }
    if (vykurovanie === "gas"){
        cena = cena;
    };
    if (vykurovanie === "electric"){
        cena += 5000;
    };
    if(typ_vyhotovenia === 'empty'){
        cena = cena;
    };
    if(typ_vyhotovenia === 'complete'){
        cena += 10000;
    };
    if(typ_zakladov === "concrete"){
        cena = cena;
    };
    if(typ_zakladov === "steel"){
        cena += 3000;
    };

    if (document.getElementById("garaz").className === "moznost-doplnok-clicked") {
        cena += 10000;
    }
     if (document.getElementById("terasa").className === "moznost-doplnok-clicked") {
        cena += 450;
    }
     if (document.getElementById("zaluzie").className === "moznost-doplnok-clicked") {
        cena += 350;
    }
     if (document.getElementById("bazen").className === "moznost-doplnok-clicked") {
        cena += 6000;
    }
    if (strecha === "plocha") {
        cena += 2500;
    }
     if (strecha === "sedlova") {
        cena += 0;
    }



    document.getElementById("cena").innerHTML = "Konečná cena je "+ cena + "EUR s DPH";
    document.getElementById("main_img").src = "src/"+ podorys + "_" + strecha + "_" + previous_active_color + "_" + "cervene" + ".jpg"
    return cena;
}


let img_id = 1;
function changeBackgroundImg(btn_id){
    
    if (btn_id == 'left'){
        img_id -= 1;
    }
    if(btn_id == 'right'){
        img_id += 1;
    }
    if(img_id > 1){
        img_id = -1;
    }
    if(img_id<-1){
        img_id = 1;
    }
    let image_container = document.getElementsByClassName('.bgimg-1');
    if(img_id == 1){
        image_container.style.backgroundImage = "url('src/image_main_2.jpg')";
    }
    if(img_id == -1){
        image_container.style.backgroundImage = "url('src/image_main_3.jpg')";
    }
    if(img_id == 0){
        image_container.style.backgroundImage = "url('src/image_main_1.jpg')";
    }
}
