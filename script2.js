
const links = document.querySelectorAll(".navbar a");

links.forEach(link => {
  link.addEventListener("click", function () {
    links.forEach(l => l.classList.remove("active"));
    this.classList.add("active");
  });
})// 1. نبحث عن كل الصور داخل كلاس images
document.querySelectorAll('.images img').forEach(image => {

    // 2. عندما يضغط المستخدم على أي صورة منها
    image.onclick = () => {
        
        // 3. أظهر الغرفة السوداء (كانت مخفية)
        document.getElementById('imageModal').style.display = 'flex';
        
        // 4. خذ "رابط" الصورة الصغيرة وضعه في "البرواز" الكبير
        document.getElementById('fullImage').src = image.getAttribute('src');
    }
});