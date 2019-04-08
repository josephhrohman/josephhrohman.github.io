let a = 0;
let b = 0;
let c = 0;
let x = 0;
// Page reveal__________________________________________________________________________________________________
$('#unlock').click(function(){
        $('.path').css('display','block');
        $('.key').css('display','none');
})
// Interests reveal / hide__________________________________________________________________________________________________
$('#interests').click(function(){
    if(x === 0){
        $('.colInterests').css('display','block');
        $('#interests').css('background-color','#C4C4C4');
        x += 1;
    } else {
        $('.colInterests').css('display','none');
        $('#interests').css('background-color','white');
        x -= 1;
    }
})
// Projects reveal / hide__________________________________________________________________________________________________
$('#projects').click(function(){
    if(x === 0){
        $('.colProjects').css('display','block');
        // $('#projects').css('background-color','#C4C4C4');
        x += 1;
    } else{
        $('.colProjects').css('display','none');
        // $('#projects').css('background-color','#white');
        x -= 1;
        console.log(x);
    }
})
// Story reveal / hide__________________________________________________________________________________________________
$('#story').click(function(){
    if(x === 0){
        $('.colStory').css('display','block');
        // $('#story').css('background-color','#C4C4C4');
        x += 1;
    } else {
        $('.colStory').css('display','none');
        // $('#story').css('background-color','#white');
        x -= 1;
    }
})
// Contact reveal / hide__________________________________________________________________________________________________
$('#contact').click(function(){
    if(x === 0){
        $('.colContact').css('display','block');
        // $('#contact').css('background-color','#C4C4C4');
        x += 1;
    } else {
        $('.colContact').css('display','none');
        // $('#contact').css('background-color','#white');
        x -= 1;
    }
})

// Slider: Project__________________________________________________________________________________________________

// $('.slider').slider({
//     interval: 2000
//   })

$('#img1').click(function(){
    $('#img2').css('display', 'block');
    $('#img1').css('display', 'none');
    $('#img3').css('display', 'none');
    $('#img4').css('display', 'none');
    $('#img5').css('display', 'none');
    $('#img6').css('display', 'none');
    $('#img7').css('display', 'none');
})
$('#img2').click(function callImg2(){
    $('#img3').css('display', 'block');
    $('#img1').css('display', 'none');
    $('#img2').css('display', 'none');
    $('#img4').css('display', 'none');
    $('#img5').css('display', 'none');
    $('#img6').css('display', 'none');
    $('#img7').css('display', 'none');
})
$('#img3').click(function(){
    $('#img4').css('display', 'block');
    $('#img1').css('display', 'none');
    $('#img2').css('display', 'none');
    $('#img3').css('display', 'none');
    $('#img5').css('display', 'none');
    $('#img6').css('display', 'none');
    $('#img7').css('display', 'none');
})
$('#img4').click(function(){
    $('#img5').css('display', 'block');
    $('#img1').css('display', 'none');
    $('#img3').css('display', 'none');
    $('#img4').css('display', 'none');
    $('#img2').css('display', 'none');
    $('#img6').css('display', 'none');
    $('#img7').css('display', 'none');
})
$('#img5').click(function(){
    $('#img6').css('display', 'block');
    $('#img1').css('display', 'none');
    $('#img3').css('display', 'none');
    $('#img4').css('display', 'none');
    $('#img5').css('display', 'none');
    $('#img2').css('display', 'none');
    $('#img7').css('display', 'none');
})
$('#img6').click(function(){
    $('#img7').css('display', 'block');
    $('#img1').css('display', 'none');
    $('#img3').css('display', 'none');
    $('#img4').css('display', 'none');
    $('#img5').css('display', 'none');
    $('#img6').css('display', 'none');
    $('#img2').css('display', 'none');
})
$('#img7').click(function(){
    $('#img1').css('display', 'block');
    $('#img2').css('display', 'none');
    $('#img3').css('display', 'none');
    $('#img4').css('display', 'none');
    $('#img5').css('display', 'none');
    $('#img6').css('display', 'none');
    $('#img7').css('display', 'none');
})


$('#1').click(function(){
    $('#1').attr('class','layer1');
    $('#2').attr('class','layer2');
    $('#3').attr('class','layer2');
    $('#4').attr('class','layer2');
    $('#5').attr('class','layer2');
    $('#6').attr('class','layer2');
    $('#7').attr('class','layer2');
})
$('#2').click(function(){
    $('#2').attr('class','layer1');
    $('#1').attr('class','layer2');
    $('#3').attr('class','layer2');
    $('#4').attr('class','layer2');
    $('#5').attr('class','layer2');
    $('#6').attr('class','layer2');
    $('#7').attr('class','layer2');
})
$('#3').click(function(){
    $('#3').attr('class','layer1');
    $('#2').attr('class','layer2');
    $('#1').attr('class','layer2');
    $('#4').attr('class','layer2');
    $('#5').attr('class','layer2');
    $('#6').attr('class','layer2');
    $('#7').attr('class','layer2');
})
$('#4').click(function(){
    $('#4').attr('class','layer1');
    $('#2').attr('class','layer2');
    $('#3').attr('class','layer2');
    $('#1').attr('class','layer2');
    $('#5').attr('class','layer2');
    $('#6').attr('class','layer2');
    $('#7').attr('class','layer2');
})
$('#5').click(function(){
    $('#5').attr('class','layer1');
    $('#2').attr('class','layer2');
    $('#3').attr('class','layer2');
    $('#4').attr('class','layer2');
    $('#1').attr('class','layer2');
    $('#6').attr('class','layer2');
    $('#7').attr('class','layer2');
})
$('#6').click(function(){
    $('#6').attr('class','layer1');
    $('#2').attr('class','layer2');
    $('#3').attr('class','layer2');
    $('#4').attr('class','layer2');
    $('#5').attr('class','layer2');
    $('#1').attr('class','layer2');
    $('#7').attr('class','layer2');
})
$('#7').click(function(){
    $('#7').attr('class','layer1');
    $('#2').attr('class','layer2');
    $('#3').attr('class','layer2');
    $('#4').attr('class','layer2');
    $('#5').attr('class','layer2');
    $('#6').attr('class','layer2');
    $('#1').attr('class','layer2');
})

// 

// Nav: Animations__________________________________________________________________________________________________
// document.getElementById("target").animate([
//     { transform: 'translate3D(0, 0, 0)' }, 
//     { transform: 'translate3D(0, -300px, 0)' }
//     ], {
//     duration: 1000,
//     })
