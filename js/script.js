let item_wrapper = document.querySelector('[data-name="item-wrapper"]');

function childrenSize(val){
    //console.log(val)
     item_wrapper.innerHTML='';
     for(let i = 0; i < Number(val); i++){
         const randomNum = Math.round(Math.random() * 20);
         item_wrapper.innerHTML += `
         <span data-name="item_span" data-randomNum${randomNum}="true" class="p-1 border border-primary rounded-lg mr-1 my-2"> ${randomNum} </span>
      
         `
     }
}
childrenSize(10)
function ItemSize(val){
    childrenSize(val.value)
}


function inputControl(val){
    ItemChanging(val)

}
function ItemChanging(val){
    let item_span = document.querySelectorAll('[data-name="item_span"]')
    console.log(val.nodeName)
    switch(val.getAttribute('data-name')){
        case 'fontColor':
            item_span.forEach(v=> {
                v.style.color = val.value
            })
        break;
        case 'fontName':
            item_span.forEach(v=> {
                v.style.fontFamily = val.value
            })
        break;
        case 'fontSize':
            item_span.forEach(v=> {
                v.style.fontSize = val.value;
            })
        break;
        default:
            item_span.forEach(v=> {
                v.removeAttribute('style')
            })
            childrenSize(10);
           // console.log('default')
    }
    //item_span.forEach(v=> v.style.color=val.value)
    //item_span.forEach(v=> v.style.fontFamily = val.value)
    
}

function btnCalling(){
    let newSpan = document.createElement('span');
    let colorRandom = ['red','green','blue','orange','yellow','black','cyan','pink','hotpink','deeppink']
    const randomNum = Math.round(Math.random() * 20);
    newSpan.innerHTML = randomNum;

    newSpan.setAttribute('style', `color: ${colorRandom[Math.round(Math.random() * colorRandom.length)]}`)
    document.querySelector('[data-name="calling_span"]').appendChild(newSpan);
    ['p-1', 'd-inline-block', 'h5'].map(v=> newSpan.classList.add(v));

    let item_span = document.querySelectorAll(`[data-name='item_span']`);
    item_span.forEach((v,i,j)=> {
        if(v.hasAttribute(`data-randomNum${randomNum}`)){
            v.classList.add('selected');
        }
        if(i <= 4){
            console.log(i)
            if(item_span[0].classList.contains('selected') && 
            item_span[1].classList.contains('selected') &&
            item_span[2].classList.contains('selected') &&
            item_span[3].classList.contains('selected') &&
            item_span[4].classList.contains('selected')) {
                item_span[i].classList.add('selected_done');
            }
        }
    })
    
}