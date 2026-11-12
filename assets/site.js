/* Shared header + footer, so the five pages stay identical. */
(function () {
  var PAGES = [
    ["index.html", "Home"],
    ["schools.html", "Find your school"],
    ["gallery.html", "Gallery"],
    ["tickets.html", "Tickets"],
    ["info.html", "Event info"],
    ["faq.html", "FAQ"]
  ];
  var here = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  if (here === "") here = "index.html";
  if (here.indexOf("school-") === 0) here = "schools.html"; // a school's own page sits under "Find your school"

  var links = PAGES.map(function (p) {
    return '<a href="' + p[0] + '"' + (p[0] === here ? ' aria-current="page"' : "") + ">" + p[1] + "</a>";
  }).join("");

  var head = document.getElementById("site-head");
  if (head) {
    head.innerHTML =
      '<div class="wrap">' +
      '<a class="brand" href="index.html" aria-label="USA Welcome Week home"><img src="assets/logo.png" alt="USA Welcome Week" width="165" height="100"></a>' +
      '<button class="menu-btn" type="button" aria-label="Menu" aria-expanded="false"><span></span></button>' +
      '<nav class="nav" aria-label="Main">' + links + "</nav>" +
      "</div>";
    var btn = head.querySelector(".menu-btn");
    var nav = head.querySelector(".nav");
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var foot = document.getElementById("site-foot");
  if (foot) {
    foot.innerHTML =
      '<div class="wrap">' +
      '<img src="assets/logo.png" alt="USA Welcome Week" width="152" height="92">' +
      '<nav class="foot-nav" aria-label="Footer">' + links.replace(/ aria-current="page"/g, "") + "</nav>" +
      '<span class="label">USA Welcome Week</span>' +
      "</div>";
  }

  window.UWW = {
    thumb: function (id) { return "photos/t/" + id + ".webp"; },
    full: function (id) { return "photos/f/" + id + ".webp"; }
  };
})();
