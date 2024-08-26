$(document).ready(function() {
    // AOS 초기화
    try {
        AOS.init({
            duration: 3000 
        });
    } catch (error) {
        console.error("AOS init error:", error); 
    }



    // 네비게이션 바의 링크 클릭 시 부드럽게 스크롤
    try {
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' }); 
                }
            });
        });
    } catch (error) {
        console.error("Smooth scroll error:", error); 
    }



    // work 영역 hover 애니메이션
    document.addEventListener('DOMContentLoaded', function() {
        var hoverIndicator = document.querySelector('.hover-indicator');
        setTimeout(function() {
            hoverIndicator.style.display = 'none';
        }, 5000); 
    });


    
   // 커서 애니메이션
   const cursor = document.querySelector('.cursor');

   document.addEventListener('mousemove', (e) => {
       cursor.style.left = e.pageX + 'px';
       cursor.style.top = e.pageY + 'px';

       const trail = document.createElement('div');
       trail.className = 'trail';
       trail.style.left = e.pageX + 'px';
       trail.style.top = e.pageY + 'px';
       document.body.appendChild(trail);

       setTimeout(() => {
           trail.remove();
       }, 500); 
   });

   document.addEventListener('mousedown', () => {
       cursor.style.transform = 'scale(0.8)';
   });

   document.addEventListener('mouseup', () => {
       cursor.style.transform = 'scale(1)';
   });



    // 초기 화면 설정 및 works 섹션 
    $('.bwrap > div').hide(); // 모든 프로젝트 섹션 숨김
    $('.category-btn').removeClass('active'); // 모든 카테고리 버튼의 'active' 클래스 제거
    $('.category-btn[data-category="team"]').addClass('active'); // Team Project 카테고리 버튼에 'active' 클래스 추가
    $('.bwrap .team').fadeIn(0); // Team Project 섹션 표시

    // 카테고리 버튼 클릭 이벤트
    $('.category-btn').click(function() {
        var category = $(this).data('category');
        $('.category-btn').removeClass('active'); // 모든 카테고리 버튼의 'active' 클래스 제거
        $(this).addClass('active'); // 클릭한 카테고리 버튼에 'active' 클래스 추가
        $('.bwrap > div').hide(); // 모든 프로젝트 섹션 숨김
        $('.bwrap .' + category).fadeIn(300); // 클릭한 카테고리에 해당하는 프로젝트 섹션 표시
    });

    
    $('.category-btn[data-category="team"]').addClass('active');
    $('.projects.team').addClass('active');


    // Works 영역 카테고리 버튼 클릭 이벤트
    $('.category-btn').click(function() {
        var category = $(this).data('category');
        $('.category-btn').removeClass('active'); 
        $(this).addClass('active'); 

        $('.projects').removeClass('active'); 
        $('.projects.' + category).addClass('active'); 

        
        $('.projects.' + category).find('.works-item').hide(); 
        $('.projects.' + category).find('.works-item').first().show(); 
    });

    // Works 영역 왼쪽 화살표 클릭 이벤트
    $('.works-arrow.left-icon').click(function() {
        var parent = $(this).closest('.projects'); 
        var currentItem = parent.find('.works-item:visible'); 
        var prevItem = currentItem.prev('.works-item'); 

        if (prevItem.length) {
            currentItem.hide(); // 현재 아이템 숨김
            prevItem.show(); // 이전 아이템 표시
        } else {
            currentItem.hide(); // 현재 아이템 숨김
            parent.find('.works-item').last().show(); 
        }
    });


    // Works 영역 오른쪽 화살표 클릭 이벤트
    $('.works-arrow.right-icon').click(function() {
        var parent = $(this).closest('.projects'); 
        var currentItem = parent.find('.works-item:visible'); 
        var nextItem = currentItem.next('.works-item'); 

        if (nextItem.length) {
            currentItem.hide(); // 현재 아이템 숨김
            nextItem.show(); // 다음 아이템 표시
        } else {
            currentItem.hide(); // 현재 아이템 숨김
            parent.find('.works-item').first().show(); 
        }
    });


    // 각 카테고리의 첫 번째 프로젝트 초기화
    $('.projects').each(function() {
        $(this).find('.works-item').hide(); 
        $(this).find('.works-item').first().show(); 
    });
});



// 무신사 웹페이지 이동
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.view-website').addEventListener('click', function() {
        window.location.href = 'https://sdfsfsdfsdfs.github.io/musinsa/';
    });

});
  // mega figma 페이지 이동
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.view-website2').addEventListener('click', function() {
        window.location.href = 'https://www.figma.com/proto/IXOEnUQUbVQahfKuCmWqdx/%F0%9F%8D%802401UIUX_1%EC%B0%A8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_%ED%81%B4%EB%A1%9C%EB%B2%84%EC%8A%A4%ED%8C%80?node-id=1-21729&t=iHsHiw2gQnYqk6FT-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A13494&show-proto-sidebar=1';
    });

});
  // Oceans figma 페이지 이동
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.view-website3').addEventListener('click', function() {
        window.location.href = 'https://www.figma.com/proto/lj1sX39Fqhl2Xl0QwWH15n/%ED%94%BC%EA%B7%B8%EB%A7%88%EC%95%84%ED%8A%B8%EC%B5%9C%EC%A2%85%ED%8C%90?node-id=216-9300&t=nyUxCswcKeYR2fXX-0&scaling=scale-down&content-scaling=fixed&page-id=216%3A8844&starting-point-node-id=216%3A9074';
    });

});
  // Flavored bread figma 페이지 이동
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.view-website4').addEventListener('click', function() {
        window.location.href = 'https://www.figma.com/proto/klMpzFC3gyiEli2XG6nbRx/%EC%9A%B0%EC%A3%BC-%ED%9B%88%EB%A0%A8%EC%86%8C?node-id=4-30294&t=FiN4XaG9GnSCpP0s-0&scaling=scale-down&content-scaling=fixed&page-id=4%3A20798&starting-point-node-id=4%3A38958&show-proto-sidebar=1';
    });

});

  // Hankook tire페이지 이동
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.view-website5').addEventListener('click', function() {
        window.location.href = 'https://sdfsfsdfsdfs.github.io/hwanclon/';
    });

});





//musinsa pdf popup
function showPdf() {
    var viewer = document.getElementById('pdfViewer');
    viewer.style.display = viewer.style.display === 'none' ? 'block' : 'none';
}


document.addEventListener('DOMContentLoaded', function() {  FileReader
    var closePdfButton = document.getElementById('closePdfViewer');
    var pdfViewer = document.getElementById('pdfViewer');

    // 뒤로가기 버튼에 클릭 이벤트 리스너 추가
    closePdfButton.addEventListener('click', function() {
        pdfViewer.style.display = 'none'; 
    });
});

//megacoffee pdf popup
function showMegacoffeePdf() {
    var viewer = document.getElementById('megacoffeePdfViewer');
    viewer.style.display = viewer.style.display === 'none' ? 'block' : 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    var closeMegacoffeePdfButton = document.getElementById('closeMegacoffeePdfViewer');
    var megacoffeePdfViewer = document.getElementById('megacoffeePdfViewer');

   
    closeMegacoffeePdfButton.addEventListener('click', function() {
        megacoffeePdfViewer.style.display = 'none'; 
    });
});


// Oceans8 pdf popup
function showOceans8Pdf() {
    var viewer = document.getElementById('oceans8PdfViewer');
    viewer.style.display = viewer.style.display === 'none' ? 'block' : 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    var closeOceans8PdfButton = document.getElementById('closeoceans8PdfViewer');
    var oceans8PdfViewer = document.getElementById('oceans8PdfViewer');

    // Oceans8 PDF 뷰어 뒤로가기 버튼 이벤트
    closeOceans8PdfButton.addEventListener('click', function() {
        oceans8PdfViewer.style.display = 'none';
    });
});


// Flavored bread pdf popup
function showFlavaredPdf() {  // 
    var viewer = document.getElementById('flavaredPdfViewer');
    viewer.style.display = viewer.style.display === 'none' ? 'block' : 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    var closeFlavaredPdfButton = document.getElementById('closeflavaredPdfViewer');
    var flavaredPdfViewer = document.getElementById('flavaredPdfViewer');

    // Flavored 뒤로가기 버튼 이벤트
    closeFlavaredPdfButton.addEventListener('click', function() {
        flavaredPdfViewer.style.display = 'none';
    });
});

//모바일 디바이스 자동재생 제거
document.addEventListener('DOMContentLoaded', function() {
    var videos = document.querySelectorAll('video');-+
    videos.forEach(function(video) {
       
        if (window.innerWidth <= 480) {
           
            video.removeAttribute('autoplay');
           
            video.pause();
            
            video.onloadedmetadata = function() {
                video.pause();
            };
        }
    });
});

