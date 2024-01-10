var kiosk_link = document.querySelector('show-kiosk');
var kiosk_content = document.querySelector('.kiosk_hiden');

kiosk_link.addEventListener('click', function(e) {
  e.preventDefault(); // 링크의 기본 동작을 막음
  if (kiosk_content.style.display === 'none') {
    kiosk_content.style.display = 'block'; // kiosk_hiden 클래스를 가진 요소를 보이게 함
  } else {
    kiosk_content.style.display = 'none'; // kiosk_hiden 클래스를 가진 요소를 숨김
  }
});
document.querySelector('.nav-item:nth-child(3)').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.sent_hiden').style.display = 'block';
  });
  



