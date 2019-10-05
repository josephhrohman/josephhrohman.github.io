window.onload = function () {

  document.getElementById('navAbout').addEventListener('click', function(){
    document.getElementById('aboutSection').classList.add('about');
    document.getElementById('aboutSection').classList.remove('section-none');
    document.getElementById('webSection').classList.add('section-none');
    document.getElementById('webSection').classList.remove('web');
    document.getElementById('productSection').classList.add('section-none');
    document.getElementById('productSection').classList.remove('product');
    document.getElementById('graphicSection').classList.add('section-none');
    document.getElementById('graphicSection').classList.remove('graphic');
  });

  document.getElementById('navWeb').addEventListener('click', function(){
    document.getElementById('webSection').classList.add('web');
    document.getElementById('webSection').classList.remove('section-none');
    document.getElementById('aboutSection').classList.add('section-none');
    document.getElementById('aboutSection').classList.remove('about');
    document.getElementById('productSection').classList.add('section-none');
    document.getElementById('productSection').classList.remove('product');
    document.getElementById('graphicSection').classList.add('section-none');
    document.getElementById('graphicSection').classList.remove('graphic');
  });

  document.getElementById('navProduct').addEventListener('click', function(){
    document.getElementById('productSection').classList.add('product');
    document.getElementById('productSection').classList.remove('section-none');
    document.getElementById('aboutSection').classList.add('section-none');
    document.getElementById('aboutSection').classList.remove('about');
    document.getElementById('webSection').classList.add('section-none');
    document.getElementById('webSection').classList.remove('web');
    document.getElementById('graphicSection').classList.add('section-none');
    document.getElementById('graphicSection').classList.remove('graphic');
  });

  document.getElementById('navGraphic').addEventListener('click', function(){
    document.getElementById('graphicSection').classList.add('graphic');
    document.getElementById('graphicSection').classList.remove('section-none');
    document.getElementById('aboutSection').classList.add('section-none');
    document.getElementById('aboutSection').classList.remove('about');
    document.getElementById('webSection').classList.add('section-none');
    document.getElementById('webSection').classList.remove('web');
    document.getElementById('productSection').classList.add('section-none');
    document.getElementById('productSection').classList.remove('product');
  });

  // popOutUpdate

};
