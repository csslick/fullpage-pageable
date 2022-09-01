// main.js

const pageable = new Pageable("#container", {
  onFinish: function(data) {
    // 스크롤 완료
    console.log('scroll finish ', data.index)

    // 전체 page aos 요소 애니메이션 초기화
    let pages = document.querySelectorAll('section');
    pages.forEach(page => {
      const h1 = page.querySelector('div h1')
      h1.classList.remove('aos-animate')
    })

    // 현재 page의 요소 애니메이션
    const h1 = pages[data.index].querySelector(`div h1`)
    h1.classList.add('aois-init', 'aos-animate')

},
});

