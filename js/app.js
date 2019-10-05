window.onload = function () {

  document.getElementById('updateButtonOn').addEventListener('click', function(){
    document.getElementById('updateModal').classList.add('update-on');
    document.getElementById('updateModal').classList.remove('update-on-load');
    document.getElementById('updateButtonOn').style.display = 'none';
    document.getElementById('updateButtonOff').style.display = 'block';
  });

  document.getElementById('updateButtonOff').addEventListener('click', function(){
    document.getElementById('updateModal').classList.add('update-off');
    document.getElementById('updateModal').classList.remove('update-on');
    document.getElementById('updateButtonOn').style.display = 'block';
    document.getElementById('updateButtonOff').style.display = 'none';
  });

  document.getElementById('updateButtonOn').addEventListener('click', function(){
    document.getElementById('updateModal').classList.add('update-on');
    document.getElementById('updateModal').classList.remove('update-off');
    document.getElementById('updateButtonOn').style.display = 'none';
    document.getElementById('updateButtonOff').style.display = 'block';
  });
  
};
