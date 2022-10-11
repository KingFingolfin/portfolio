let slider = document.querySelector ('input');
const body = document.body;
const container = document.querySelector ('container');

function change(){
    const v = (slider.value|0).toString(8);
    body.className = 'b'+v; 
}
