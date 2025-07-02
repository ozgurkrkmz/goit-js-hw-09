// 🎯 Galerideki görseller başka bir dosyadan içe aktarılıyor – bu, resim koleksiyonunun geldiği yer
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
import { images } from "./03-images.js";

// 🖼️ Galeri alanı seçiliyor – sergi bu alana yerleştirilecek
const gallery = document.querySelector(".gallery");

// 🧱 Her bir görsel için çerçeve hazırlanıyor – küçük görsel, büyük versiyona bağlı şekilde oluşturuluyor
const galleryMarkup = images.map(({ preview, original, description }) => 
    `<li class="gallery-item">
        <a class="gallery-link" href="${original}">
            <img class="gallery-image" src="${preview}" alt="${description}" data-source="${original}"/>
        </a></li>`).join("");

// 🎨 Hazırlanan çerçeveler galeriye yerleştiriliyor – HTML içerisine aktarım
gallery.innerHTML = galleryMarkup;

// ✨ Galeriye ışıklı görüntüleme özelliği ekleniyor – açıklamalar alt metinden alınıyor, geçiş efektleri belirleniyor
new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250, download: "Click for Download", animationSpeed: 350, fadeSpeed: 1000 });

// 🎭 Aşağıdaki bölüm devre dışı – elle tetiklenen galeri açılımı burada tanımlı
// gallery.addEventListener("click", (event) => { // 🖱️ Galeride bir öğeye tıklandığında tetiklenecek olaylar
//     event.preventDefault(); // ⛔ Bağlantının varsayılan davranışı engelleniyor
//     const target = event.target; // 🎯 Tıklanan hedef öğe seçiliyor

//     if (target.nodeName !== "IMG") { // ❌ Tıklanan öğe bir görsel değilse, işlem iptal ediliyor
//         return;
//     }

//     const largeImageURL = target.dataset.source; // 🔍 Tıklanan görselin büyük versiyonunun adresi alınıyor

//     const instance = basicLightbox.create(`
//         <img src="${largeImageURL}" width="800" height="600">
//     `); // 🪄 Büyük görsel için özel bir pencere (modal) oluşturuluyor

//     instance.show(); // 🌟 Oluşturulan pencere açılıyor ve görsel gösteriliyor

//     document.addEventListener("keydown", (event) => { // ⌨️ Klavyeden bir tuşa basıldığında kontrol ediliyor
//         if (event.key === "Escape") { // 🔓 ESC tuşuna basılırsa modal pencere kapanıyor
//             instance.close();
//         }
//     });
// })