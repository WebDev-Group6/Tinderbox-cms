function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (event.target.matches('.dropdown')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
jQuery('.views-field-name').on('click', function() {
          $parent_box = jQuery(this).closest('.views-row');
          $parent_box.siblings().find('.views-field-description__value').slideUp();
          $parent_box.find('.views-field-description__value').slideToggle(400, 'swing');
      });