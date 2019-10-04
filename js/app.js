window.onload = function () {

  document.getElementById('webPageSelector1').addEventListener('click', function(){
    document.getElementById('webPageSelector1').classList.add('web-page-selector-focused');
    document.getElementById('webPageSelector1').classList.remove('web-page-selector-unfocused');
    document.getElementById('webPageSelector2').classList.add('web-page-selector-unfocused');
    document.getElementById('webPageSelector2').classList.remove('web-page-selector-focused');
    document.getElementById('webPageSelector3').classList.add('web-page-selector-unfocused');
    document.getElementById('webPageSelector3').classList.remove('web-page-selector-focused');
    document.getElementById('webPage1').classList.remove('web-page-unfocused');
    document.getElementById('webPage1').classList.add('web-page-focused');
    document.getElementById('webPage2').classList.add('web-page-unfocused');
    document.getElementById('webPage3').classList.add('web-page-unfocused');
  });

  document.getElementById('webPageSelector2').addEventListener('click', function(){
    document.getElementById('webPageSelector2').classList.add('web-page-selector-focused');
    document.getElementById('webPageSelector2').classList.remove('web-page-selector-unfocused');
    document.getElementById('webPageSelector1').classList.add('web-page-selector-unfocused');
    document.getElementById('webPageSelector1').classList.remove('web-page-selector-focused');
    document.getElementById('webPageSelector3').classList.add('web-page-selector-unfocused');
    document.getElementById('webPageSelector3').classList.remove('web-page-selector-focused');
    document.getElementById('webPage2').classList.remove('web-page-unfocused');
    document.getElementById('webPage2').classList.add('web-page-focused');
    document.getElementById('webPage1').classList.add('web-page-unfocused');
    document.getElementById('webPage3').classList.add('web-page-unfocused');
  });

  document.getElementById('webPageSelector3').addEventListener('click', function(){
    document.getElementById('webPageSelector3').classList.add('web-page-selector-focused');
    document.getElementById('webPageSelector3').classList.remove('web-page-selector-unfocused');
    document.getElementById('webPageSelector2').classList.add('web-page-selector-unfocused');
    document.getElementById('webPageSelector2').classList.remove('web-page-selector-focused');
    document.getElementById('webPageSelector1').classList.add('web-page-selector-unfocused');
    document.getElementById('webPageSelector1').classList.remove('web-page-selector-focused');
    document.getElementById('webPage3').classList.remove('web-page-unfocused');
    document.getElementById('webPage3').classList.add('web-page-focused');
    document.getElementById('webPage1').classList.add('web-page-unfocused');
    document.getElementById('webPage2').classList.add('web-page-unfocused');
  });

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

};
