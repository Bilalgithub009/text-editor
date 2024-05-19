var input = document.getElementById('input');
var bold = document.getElementById('bold');
var italic = document.getElementById('italic');
var underline = document.getElementById('underline');
var fonts = document.getElementById('fs');
var fontf = document.getElementById('ff');
var textc = document.getElementById('tc');
var lc = document.getElementById('lc');
var uc = document.getElementById('uc');
var dlt = document.getElementById('dlt');



bold.addEventListener('click' ,function(){
    input.style.fontWeight = 'bold'

    clearAll()
})



italic.addEventListener('click' ,function(){
    input.style.fontStyle = 'italic'
    
})



underline.addEventListener('click' ,function(){
    input.style.textDecoration = 'underline'
    
})




fonts.addEventListener('click' ,function(){
    input.style.fontSize = '40px';
    
})



fontf.addEventListener('click' ,function(){
    input.style.fontFamily = 'cursive'
    
})



textc.addEventListener('click' ,function(){
    input.style.color = 'green'
    
})




uc.addEventListener('click' ,function(){
    input.style.textTransform = 'uppercase'
    
})



lc.addEventListener('click' ,function(){
    input.style.textTransform = 'lowercase'

})
