$(function(){
  $('.language').on('click', function(){
   $('.language__item:last').toggleClass("language__item_active");
   $(this).toggleClass('language_active')
  });
 
  $('.number-type').on('input', function(){
   this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
   });
 
 
 
   $('.passport-input').on('click', function(e){
     e.preventDefault();
     $('#id-card').click();
   });
 
   $('.photo-input').on('click', function(e){
     e.preventDefault();
     $('#photo').click();
   });
 
   $('.diplom-input').on('click', function(e){
     e.preventDefault();
     $('#diplom').click();
   });
 
   $('.language-input').on('click', function(e){
     e.preventDefault();
     $('#language-upload').click();
   });
 
   $('.menu-btn').on('click', function(){
     $(this).toggleClass('menu-btn_active');
     $('.menu').toggleClass('menu_active');
     $('.menu-inner').toggleClass('menu-inner_active');
   });
 
   // password eye
 
   let password = $('.password-img');
 
   $(password).on('mousedown', function(){
     $('#password').attr('type', 'text');
   });
   $(password).on('mouseleave', function(){
     $('#password').attr('type', 'password');
   });
 
   // export slide
 
   $('.parts-export').on('click', function(){
     $('.parts-export-list').toggleClass('parts-export-list_active');
     $('.export-arrow').toggleClass('export-arrow_active');
   });
 
   // INPUT FOCUS
 
   $('.admin-enter__input').on('blur', function(){
     this.toggle('admin-enter__input_active');
   });

   
 
 });
 
 let dots = document.getElementsByClassName('etc-dots');
 let edit = document.querySelectorAll('.edit');
 let i;
 
 let dotsStatus = [];
 for(p = 0; p < dots.length; p++){
   dotsStatus.push(false);
 }
 
 for(i = 0; i < dots.length; i++){
   dots[i].addEventListener('click', function(e){
     for(j = 0; j < dots.length; j++){
         dots[j].classList.remove('etc-dots_active');
         dots[j].querySelector('.edit').classList.remove('edit_active');
     }
     
     if(!dotsStatus[i]){
       this.classList.add('etc-dots_active');
       this.querySelector('.edit').classList.add('edit_active');
       dotsStatus[i] = true;
     }else{
       this.classList.remove('etc-dots_active');
       this.querySelector('.edit').classList.remove('edit_active');
       dotsStatus[i] = false;
     }
     e.stopPropagation();
   })  
 }
 
 document.addEventListener('click', () => {
   for(j = 0; j < dots.length; j++){
       if(dots[j].classList.contains('etc-dots_active')){
         dots[j].classList.remove('etc-dots_active');
         dots[j].querySelector('.edit').classList.remove('edit_active');
         dotsStatus[j] = false;
       }
   }
 });
 
 let body = document.querySelector('body');
 let navbar = document.querySelector('.navbar');
 let wrapperActive = document.querySelector('.wrapper_active');
 let wrapper = document.querySelector('.wrapper');
 let config = document.querySelector('.admin-config');
 let list = document.querySelector('.admin-list');
 let listTwo = document.querySelector('.admin-content .admin-list');
 let navbarBtn = document.querySelector('.navbar-btn');
 let navbarClose = document.querySelector('.navbar-close');
 
 if(body.contains(navbar)){
 
   navbarBtn.onclick = function(){
     navbar.classList.toggle('navbar_active');
     wrapper.classList.toggle('wrapper_active');
     this.classList.toggle('active');
   }
 
   navbarClose.onclick = function(){
     navbar.classList.remove('navbar_active');
     wrapper.classList.remove('wrapper_active');
     navbarBtn.classList.remove('active');
   }
 
 }
 
 // CHECKBOX SELECT
 
 let checkbox = document.querySelectorAll('.admin-checkbox');
 let listAll = document.querySelector('.admin-content .admin-list');
 
 for(let i = 0; i < checkbox.length;i++){
 
   checkbox[i].addEventListener('click', function(){
     this.parentElement.parentElement.classList.toggle('admin-list_active');
   });
 
 }
 let modal = document.getElementById('modal');
 let modalClose = document.getElementById('close-modal');
 let close = document.getElementById('close');
 
 if(body.contains(modal)){
   modalClose.onclick = function(){
     modal.classList.remove('modal_active');
   }
   close.onclick = function(){
     modal.classList.remove('modal_active');
   }
 
   window.onclick = function(w){
     if(w.target == modal){
       modal.classList.remove('modal_active');
     }
   }
 }



//  MULTIPLE SELECT

let selectMultiple = document.getElementById('myselect');
if(body.contains(selectMultiple)){
  var select = new MSFmultiSelect(
    document.querySelector('#multiselect'),
    {
      theme: 'theme1',
      selectAll: true,
      searchBox: true,
      width: 250,
      height: 30,
      onChange:function(checked, value, instance) {
        //console.log(checked, value, instance);
      },
      //appendTo: '#myselect',
      //readOnly:true,
      placeholder: 'languages',
      //autoHide: false,
      afterSelectAll:function(checked, values, instance) {
        //console.log(checked, values, instance);
      }
    }
  );
  var select2 = new MSFmultiSelect(
    document.querySelector('#multiselect2'),
    {
      theme: 'theme2',
      selectAll: true,
      searchBox: true,
      width: '250px',
      height: '45px',
      // readOnly: true,
      onChange:function(checked, value, instance) {
        // console.log(checked, value, instance);
      },
      // appendTo: '#myselect',
      //readOnly:true,
      //autoHide: false
    }
  );
   
}