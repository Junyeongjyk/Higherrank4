$(document).ready(function(){
    // 스크롤 길이가 300 이상일때 .top on 클래스 추가, 적으면 on 클래스 삭제
      $(window).scroll(function(){
        if ($(this).scrollTop() > 300){
            $('.top').addClass('on');
        } else{
            $('.top').removeClass('on');
        }
    });
    // .top 클릭시 스크롤 길이 0으로 스무스하게 이동
    $(".top").click(function(){
      window.scrollTo({top : 0, behavior: 'smooth'}); 
    });
    //family site button 클릭시 ul이 슬라이드 되는 on 클래스 토글
    $('.footer_right .family_site').click(function(){
      $('.footer_right ul').toggleClass('on');
    });
    //botto 버튼 클릭시 하단으로 
    $(".contacts").click(function(){
      window.scrollTo({top : document.body.scrollHeight, behavior: 'smooth'}); 
    });
    //main visual fadein,out
    var currentIndex = 0;
        
    setInterval(function(){
        if(currentIndex < 3) {
            currentIndex ++;
        } else {
            currentIndex = 0;
        } 
        
        $(".slide").eq(currentIndex).siblings().fadeOut();
        $(".slide").eq(currentIndex).fadeIn();
        
    },4000);
    // mpr 영역까지 스크롤시 show 클래스 추가
    $(window).scroll(function(){
      let TOP = $(window).scrollTop();
      console.log(TOP);
      if(TOP > 950){
        $('.mpr .box_1 img').addClass('show');
      }
      if(TOP > 1950){
        $('.mpr .box_2 img').addClass('show');
      }
      if(TOP > 2450){
        $('.mpr .box_3 img').addClass('show');
      }
    });
    //portfolio tab
    const btnList = document.querySelectorAll('.tab .btn_list li');
    const contents = document.querySelectorAll('.tab .con_list .con')
    let activeCont = ''; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)
    
    for(var i = 0; i < btnList.length; i++){
      btnList[i].querySelector('.btn').addEventListener('click', function(e){
        e.preventDefault();
        for(var j = 0; j < btnList.length; j++){
          // 나머지 버튼 클래스 제거
          btnList[j].classList.remove('on');
    
          // 나머지 컨텐츠 display:none 처리
          contents[j].style.display = 'none';
        }
    
        // 버튼 관련 이벤트
        this.parentNode.classList.add('on');
    
        // 버튼 클릭시 컨텐츠 전환
        activeCont = this.getAttribute('href');
        document.querySelector(activeCont).style.display = 'block';
      });
    }
    })
    