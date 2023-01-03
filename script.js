window.onload = function () {
  let menu = document.getElementById("menu");
  let menuBottom = 100; // пограничное значения отступа от верхнего края при прокрутке
  let array = document.getElementById("up");
  window.onscroll = function () {
    if (document.documentElement.scrollTop < menuBottom) {
      // или document.body.scrollTop > menuBottom
      menu.classList.remove("fixed"); // удаляем класс 'fixed'
    } else {
      menu.classList.add("fixed"); // добавляем класс 'fixed'
    }

    if (document.documentElement.scrollTop < menuBottom) {
      array.classList.add("fade");
    } else {
      array.classList.remove("fade");
    }
  };
};
