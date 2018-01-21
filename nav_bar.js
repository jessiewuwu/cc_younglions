document.write('\
  \
  <div class="navbar-fixed">\
      <!-- Dropdown Structure -->\
      <ul id="about-dropdown" class="dropdown-content">\
        <li><a href="about.html#about-us-content">About Us</a></li>\
        <li><a href="about.html#programs">Programs</a></li>\
        <li><a href="about.html#community-service">Community Service</a></li>\
      </ul>\
      <ul id="gallery-dropdown" class="dropdown-content">\
        <li><a href="gallery/photos.html">Photos</a></li>\
        <li><a href="gallery/videos.html">Videos</a></li>\
      </ul>\
      <nav>\
         <div class="nav-wrapper">\
              <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>\
               <ul class="hide-on-med-and-down regular-nav">\
                 <li><a href="index.html" class="brand-logo center">\
                  <img src="./assets/img/logo_black.png" alt="Logo"></a>\
                  </li>\
                  <li><a href="index.html">home</a></li>\
                  <!-- Dropdown Trigger -->\
                  <li><a class="dropdown-button" href="#!" data-activates="about-dropdown">about<i class="material-icons right">arrow_drop_down</i></a></li>\
                  <li><a href="history.html">history</a></li>\
              </ul>\
              <ul class="right hide-on-med-and-down regular-nav">\
                 <!-- Dropdown Trigger -->\
                 <li><a class="dropdown-button" href="#!" data-activates="gallery-dropdown">gallery<i class="material-icons right">arrow_drop_down</i></a></li>\
                 <li><a href="support.html">support</a></li>\
                 <li><a href="contact.html">contact</a></li>\
              </ul>\
              <ul class="side-nav" id="mobile-demo">\
                 <li><a href="about.html#about-us-content">About Us</a></li>\
                 <li><a href="about.html#programs">Programs</a></li>\
                 <li><a href="about.html#community-service">Community Service</a></li>\
                 <li><a href="gallery/photos.html">Photos</a></li>\
                 <li><a href="gallery/videos.html">Videos</a></li>\
                 <li><a href="history.html">History</a></li>\
                 <li><a href="contact.html">Contact</a></li>\
                 <li><a href="support.html">Support</a></li>\
              </ul>\
          </div>\
      </nav>\
  </div>\
  \
');