(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scripts"],{

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.onload = function () {
  var nav = document.querySelector('#menu');
  var navMenu = document.querySelector('#nav-menu');
  var mask = document.querySelector('#mask');
  nav.addEventListener('click', function () {
    navMenu.classList.toggle('visible');
    mask.classList.toggle('visible');
  });
  mask.addEventListener('click', function () {
    if (navMenu.classList.contains('visible')) {
      mask.classList.remove('visible');
      navMenu.classList.remove('visible');
    }
  });
};

/***/ })

},[["./src/js/main.js","runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJvbmxvYWQiLCJuYXYiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJuYXZNZW51IiwibWFzayIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjb250YWlucyIsInJlbW92ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQixZQUFZO0FBQ3hCLE1BQUlDLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQVY7QUFDQSxNQUFJQyxPQUFPLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixXQUF2QixDQUFkO0FBQ0EsTUFBSUUsSUFBSSxHQUFHSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBWDtBQUVBRixLQUFHLENBQUNLLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCLFlBQU07QUFDaENGLFdBQU8sQ0FBQ0csU0FBUixDQUFrQkMsTUFBbEIsQ0FBeUIsU0FBekI7QUFDQUgsUUFBSSxDQUFDRSxTQUFMLENBQWVDLE1BQWYsQ0FBc0IsU0FBdEI7QUFDSCxHQUhEO0FBS0FILE1BQUksQ0FBQ0MsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBTTtBQUNqQyxRQUFJRixPQUFPLENBQUNHLFNBQVIsQ0FBa0JFLFFBQWxCLENBQTJCLFNBQTNCLENBQUosRUFBMkM7QUFDdkNKLFVBQUksQ0FBQ0UsU0FBTCxDQUFlRyxNQUFmLENBQXNCLFNBQXRCO0FBQ0FOLGFBQU8sQ0FBQ0csU0FBUixDQUFrQkcsTUFBbEIsQ0FBeUIsU0FBekI7QUFDSDtBQUNKLEdBTEQ7QUFNSCxDQWhCRCxDIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51Jyk7XHJcbiAgICBsZXQgbmF2TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXYtbWVudScpO1xyXG4gICAgbGV0IG1hc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFzaycpO1xyXG5cclxuICAgIG5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBuYXZNZW51LmNsYXNzTGlzdC50b2dnbGUoJ3Zpc2libGUnKTtcclxuICAgICAgICBtYXNrLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc2libGUnKTtcclxuICAgIH0pXHJcblxyXG4gICAgbWFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBpZiAobmF2TWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ3Zpc2libGUnKSkge1xyXG4gICAgICAgICAgICBtYXNrLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcclxuICAgICAgICAgICAgbmF2TWVudS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSJdLCJzb3VyY2VSb290IjoiIn0=