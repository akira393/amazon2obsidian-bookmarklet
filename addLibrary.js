javascript: (function () {
    var p = document.getElementById("productTitle");//書籍のタイトルの処理
    if (!p) var p = document.getElementById("ebooksTitle");
    if (!p) var p = document.getElementById("title");
    var title = p.innerText.trim();
    title = title.replace(/:/g, '：').replace(/\\/g, '＼').replace(/\//g, '／').replace("[","［").replace("]","］").trim();
    
    const obsidian2 = `obsidian://advanced-uri?vault=obsidian_v9&filepath=library&data=${encodeURIComponent(`- [ ] [[${title}]]`)}&mode=append&heading=inbox`;
    window.open(obsidian2)
})();