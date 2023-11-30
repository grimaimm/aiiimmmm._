// $(document).ready(function() {
//   var prevScrollPos = window.pageYOffset;
//   var paddingTop = 150; // Padding-top value in pixels

//   $(window).scroll(function() {
//     var currentScrollPos = window.pageYOffset;

//     if (currentScrollPos > paddingTop) {
//       // If scrolled more than 100px, show the navbar id=scroll
//       $('#scroll').css('top', '0');
//       $('#notScroll').css('top', '-100px');
//     } else {
//       // If scrolled less than 100px, show the navbar id=notScroll
//       $('#scroll').css('top', '-100px');
//       $('#notScroll').css('top', '0');
//     }

//     prevScrollPos = currentScrollPos;
//   });
// });

$(document).ready(function() {
  var prevScrollPos = window.pageYOffset;
  var paddingTop = 0; // Padding-top value in pixels

  // Function to set the initial state based on the scroll position
  function setInitialState() {
    var currentScrollPos = window.pageYOffset;

    if (currentScrollPos > paddingTop) {
      // If scrolled more than paddingTop, show the navbar id=scroll
      $('#scroll').css('top', '0');
      $('#notScroll').css('top', '-100px');
    } else {
      // If scrolled less than paddingTop, show the navbar id=notScroll
      $('#scroll').css('top', '-100px');
      $('#notScroll').css('top', '0');
    }
  }

  // Call the function to set the initial state when the page is ready
  setInitialState();

  $(window).scroll(function() {
    var currentScrollPos = window.pageYOffset;

    if (currentScrollPos > paddingTop) {
      // If scrolled more than paddingTop, show the navbar id=scroll
      $('#scroll').css('top', '0');
      $('#notScroll').css('top', '-100px');
    } else {
      // If scrolled less than paddingTop, show the navbar id=notScroll
      $('#scroll').css('top', '-100px');
      $('#notScroll').css('top', '0');
    }

    prevScrollPos = currentScrollPos;
  });
});





function shareOrCopyLink() {
  // Mengambil URL saat ini
  var currentUrl = window.location.href;

  // Memeriksa apakah API berbagi didukung oleh peramban
  if (navigator.share) {
      navigator.share({
          title: document.title,
          text: 'Check out this link!',
          url: currentUrl
      })
      .then(() => console.log('Link berhasil dibagikan!'))
      .catch(() => copyLinkManually(currentUrl)); // Jika berbagi gagal, salin link secara manual
  } else {
      // Jika berbagi tidak didukung, salin link secara manual
      copyLinkManually(currentUrl);
  }
}

function copyLinkManually(link) {
  // Membuat elemen textarea untuk menyimpan URL
  var tempInput = document.createElement("textarea");
  tempInput.value = link;

  // Menambahkan elemen textarea ke dalam dokumen
  document.body.appendChild(tempInput);

  // Memilih teks dalam textarea
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); // Untuk mendukung peramban yang berbeda

  // Menyalin teks ke clipboard
  document.execCommand("copy");

  // Menghapus elemen textarea yang sudah tidak dibutuhkan
  document.body.removeChild(tempInput);

  // Memberi umpan balik kepada pengguna (opsional)
  alert("Link berhasil disalin!");
}