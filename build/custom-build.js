!function(){function e(e,n,t,o){"use strict";var a=window.document.createElement("link"),i=n||window.document.getElementsByTagName("script")[0],d=window.document.styleSheets;return a.rel="stylesheet",a.href=e,a.media="only x",o&&(a.onload=o),i.parentNode.insertBefore(a,i),a.onloadcssdefined=function(n){for(var t,o=0;o<d.length;o++)d[o].href&&d[o].href.indexOf(e)>-1&&(t=!0);t?n():setTimeout(function(){a.onloadcssdefined(n)})},a.onloadcssdefined(function(){a.media=t||"all"}),a}function n(e,n){e.onload=function(){e.onload=null,n&&n.call(e)},"isApplicationInstalled"in navigator&&"onloadcssdefined"in e&&e.onloadcssdefined(n)}!function(t){var o=function(a,i){"use strict";if(a&&3===a.length){var d=t.navigator,r=t.document,l=t.Image,s=!(!r.createElementNS||!r.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect||!r.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")||t.opera&&-1===d.userAgent.indexOf("Chrome")||-1!==d.userAgent.indexOf("Series40")),c=new l;c.onerror=function(){o.method="png",o.href=a[2],e(a[2])},c.onload=function(){var t=1===c.width&&1===c.height,d=a[t&&s?0:t?1:2];t&&s?o.method="svg":t?o.method="datapng":o.method="png",o.href=d,n(e(d),i)},c.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",r.documentElement.className+=" grunticon"}};o.loadCSS=e,o.onloadCSS=n,t.grunticon=o}(this)}();grunticon(["build/svg/icons.data.svg.css", "build/svg/icons.data.png.css", "build/svg/icons.fallback.css"], grunticon.svgLoadedCallback);
for (i = 1; i <= 30; i++) {
	 var isModulus = (i % 3);
     if (!isModulus) { console.log( i + " Fizz"); }
     else if (i % 5 === 0) { console.log( i + " Buzz"); }
     else if (i % 15 === 0)  { console.log( i + " Fizz-Buzz"); }
     else { console.log(i); }
}


$(document).ready(function(){
    $('.img-container').slick({
        autoplay: true,
        dots: true,
        infinite: false,
        edgeFriction: 1
    });
});



