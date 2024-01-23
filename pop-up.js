function openClosePopup() {
  // Lấy phần tử popup
  var popup = document.getElementById("popup");

  // Thay đổi trạng thái của popup
  popup.style.display = (popup.style.display === "block") ? "none" : "block";
}// JavaScript Document
function runPlayInStyle() {
  // Lấy phần tử span chứa dòng chữ
  var span = document.getElementById("play-in-style").querySelector("span");

  // Di chuyển phần tử span sang trái
  span.style.right -= 5;

  // Nếu phần tử span đã ra ngoài màn hình
  if (span.offsetLeft < -span.offsetWidth) {
    // Di chuyển phần tử span về bên phải
    span.style.right = 0;
  }
}

// Khởi tạo hàm
window.onload = runPlayInStyle;