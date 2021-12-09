var pages = []
pages[1] = {

  items: [
    {type: 'link', page: 4, x: 20, y: 253, width: 210, height: 220, flip: true},
    {type: 'link', page: 6, x: 250, y: 253, width: 210, height: 220, flip: true},
    {type: 'link', page: 8, x: 480, y: 253, width: 210, height: 220, flip: true},


    {type: 'link', page: 10, x: 20, y: 498, width: 210, height: 220, flip: true},
    {type: 'link', page: 12, x: 250, y: 498, width: 210, height: 220, flip: true},
    {type: 'link', page: 14, x: 480, y: 498, width: 210, height: 220, flip: true},


    {type: 'link', page: 16, x: 20, y: 743, width: 210, height: 220, flip: true},
    {type: 'link', page: 18, x: 250, y: 743, width: 210, height: 220, flip: true},
    // {type: 'link', page: 22, x: 480, y: 743, width: 210, height: 220, flip: true},

  ]
}

// pages[2] = {

//   items: [

//     {type: 'link', page: 24, x: 20, y: 10, width: 210, height: 220, flip: true},
//     {type: 'link', page: 28, x: 250, y: 10, width: 210, height: 220, flip: true},
//     {type: 'link', page: 32, x: 480, y: 10, width: 210, height: 220, flip: true},

//     {type: 'link', page: 4, x: 20, y: 253, width: 210, height: 220, flip: true},
//     {type: 'link', page: 4, x: 250, y: 253, width: 210, height: 220, flip: true},
//     {type: 'link', page: 4, x: 480, y: 253, width: 210, height: 220, flip: true},


//     {type: 'link', page: 4, x: 20, y: 498, width: 210, height: 220, flip: true},
//     {type: 'link', page: 4, x: 250, y: 498, width: 210, height: 220, flip: true},
//     {type: 'link', page: 4, x: 480, y: 498, width: 210, height: 220, flip: true},


//     {type: 'link', page: 4, x: 20, y: 743, width: 210, height: 220, flip: true},
//     {type: 'link', page: 4, x: 250, y: 743, width: 210, height: 220, flip: true},
//     {type: 'link', page: 4, x: 480, y: 743, width: 210, height: 220, flip: true},

//   ]
// }


pages[12] = {
  htmlContent: '<video class="p1" controls poster="images/poster-5.png"><source src="video/Hemoflix Tanıtım Filmi_Türkçe_110821.mp4" type="video/mp4"></video><script>$(".flipbook-nav").click(function(event){$("video").trigger("pause");});</script>'

}

pages[22] = {
  htmlContent: '<video class="p2" controls poster="images/poster-3.png"><source src="video/Tolonun_Maceralari_TR_210716.mp4" type="video/mp4"></video><script>$(".flipbook-nav").click(function(event){$("video").trigger("pause");});</script>'
}

var options = {
  pages: pages,
  pdfUrl: 'pdf/mind.pdf',
  btnToc : false,
  btnShare :false,
  btnBookmark : false,
  btnSelect : false,
  btnSize:12,
  currentPage : {vAlign:'bottom', hAlign:'center'},
  sideMenuOverBook: false,
  icons: 'material',
  viewMode: '3d',
  linkColor: 'transparent',
  linkColorHover: 'transparent',
  deeplinkingEnabled: true
  }

    options.mobile = {
    btnSize:7,
  }

  $(document).ready(function () {
    $("#theme-default").flipBook(options);
  });

  $(document).ready(function () {

  //   $('body').click(function(){
  //     $('video')[0].play();
  // });
  

});





//console async problems fixed
$.ajaxPrefilter(function (options, original_Options, jqXHR) {
  options.async = true;
});

//mobile hover state none
function hasTouch() {
  return 'ontouchstart' in document.documentElement ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0;
}

if (hasTouch()) { // remove all the :hover stylesheets
  try { // prevent exception on browsers not supporting DOM styleSheets properly
    for (var si in document.styleSheets) {
      var styleSheet = document.styleSheets[si];
      if (!styleSheet.rules) continue;

      for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
        if (!styleSheet.rules[ri].selectorText) continue;

        if (styleSheet.rules[ri].selectorText.match(':hover')) {
          styleSheet.deleteRule(ri);
        }
      }
    }
  } catch (ex) {}
}


















