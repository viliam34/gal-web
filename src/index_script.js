
let img_id = 0;
function changeBackgroundImg(btn_id){
    
    
    if (btn_id == 'left'){
        img_id -= 1;
    }
    if(btn_id == 'right'){
        img_id += 1;
    }


    /*Input from span. Change particular span to active and deactivate rest */
    if(btn_id == 0){
        img_id = 0;
        document.getElementById('span-2').style.backgroundColor = 'red !important';
    }
    if(btn_id == 1){
        img_id = 1;
         document.getElementById('span-3').style.backgroundColor =  'red !important';
    }
    if(btn_id == -1){
        img_id = -1;
         document.getElementById('span-1').style.backgroundColor =  'red !important';
    }



    if(img_id > 1){
        img_id = -1;
    }
    if(img_id<-1){
        img_id = 1;
    }
    let image_container = document.getElementById('home');
    if(img_id == 1){
        image_container.style.backgroundImage = "url('src/image_main_2.jpg')";
    }
    if(img_id == -1){
        image_container.style.backgroundImage = "url('src/image_main_3.jpg')";
    }
    if(img_id == 0){
        image_container.style.backgroundImage = "url('src/image_main_1.jpg')";
    }
    console.log(img_id);
}