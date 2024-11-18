// Chuyển sang trang login.html khi nhấn nút user
const userBtn = document.getElementById("userBtn");
const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

// Xử lý chuyển hướng khi nhấn userBtn
if (userBtn) {
  userBtn.addEventListener("click", () => {
    // Chỉ chuyển hướng khi cần, không làm ảnh hưởng các sự kiện khác
    window.location.href = "login.html";
  });
}

// Xử lý sự kiện đăng ký và đăng nhập
if (container && registerBtn && loginBtn) {
  registerBtn.addEventListener("click", () => {
    container.classList.add("active"); // Thêm lớp "active"
  });

  loginBtn.addEventListener("click", () => {
    container.classList.remove("active"); // Xóa lớp "active"
  });
}
