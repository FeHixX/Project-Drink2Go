const yandexMapScript = document.createElement('script');
yandexMapScript.src = 'https://api-maps.yandex.ru/2.1/?apikey=&lang=ru_RU';

yandexMapScript.onload = () => {
  document.querySelector('#map').querySelector('picture').remove();

  const CENTER = [59.9685, 30.3174];

  ymaps.ready(() => {
    const map = new ymaps.Map('map', {
      center: CENTER,
      zoom: 17.68,
      controls: [],
    });

    const placemark = new ymaps.Placemark(
      CENTER,
      {
        balloonContentHeader: 'Адрес',
        balloonContentBody: 'г. Санкт-Петербург, набережная реки Карповки, дом 5',
        balloonContentOffset: [-4, -25]
      },
      {
        iconLayout: 'default#image',
        iconImageHref: '../img/icons/stack.svg#icon-map-pin',
        iconImageSize: [38, 50],
        iconImageOffset: [-19, -50]
      }
    );

    map.geoObjects.add(placemark);
  });
};

console.log(scrollY);
const scrollWindowHanlder = () => {
  console.log(scrollY)
  if (window.scrollY > 1000) {
    document.head.append(yandexMapScript);

    document.removeEventListener('scroll', scrollWindowHanlder);
  }
};

document.addEventListener('scroll', scrollWindowHanlder);
