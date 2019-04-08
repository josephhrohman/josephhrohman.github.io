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
        x += 1;
    } else {
        $('.colInterests').css('display','none');
        x -= 1;
    }
})
// Projects reveal / hide__________________________________________________________________________________________________
$('#projects').click(function(){
    if(x === 0){
        $('.colProjects').css('display','block');
        x += 1;
    } else {
        $('.colProjects').css('display','none');
        x -= 1;
    }
})
// Story reveal / hide__________________________________________________________________________________________________
$('#story').click(function(){
    if(x === 0){
        $('.colStory').css('display','block');
        x += 1;
    } else {
        $('.colStory').css('display','none');
        x -= 1;
    }
})
// Contact reveal / hide__________________________________________________________________________________________________
$('#contact').click(function(){
    if(x === 0){
        $('.colContact').css('display','block');
        x += 1;
    } else {
        $('.colContact').css('display','none');
        x -= 1;
    }
})

// Carousel: Project__________________________________________________________________________________________________

$('#1').click(function(){
    $('#1').attr('class','layer1');
    $('#2').attr('class','layer2');
    $('#3').attr('class','layer2');
})
$('#2').click(function(){
    $('#2').attr('class','layer1');
    $('#1').attr('class','layer2');
    $('#3').attr('class','layer2');
})
$('#3').click(function(){
    $('#3').attr('class','layer1');
    $('#2').attr('class','layer2');
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
