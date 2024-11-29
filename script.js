function searchFunction() {
    // Ambil nilai dari input pencarian
    let input = document.getElementById("searchInput").value.toLowerCase();
    
    // Ambil semua item dalam daftar
    let items = document.getElementById("itemList").getElementsByTagName("li");

    // Loop untuk memeriksa setiap item dalam daftar
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        
        // Jika item cocok dengan kata kunci pencarian, tampilkan; jika tidak, sembunyikan
        if (item.textContent.toLowerCase().includes(input)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    }
}