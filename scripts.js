javascript: (function () {
    var p = document.getElementById("productTitle");//書籍のタイトルの処理
    if (!p) var p = document.getElementById("ebooksTitle");
    if (!p) var p = document.getElementById("title");
    var title = p.innerText.trim();
    console.log(title)
    
    //ASIN番号の処理
    // urlから取得する。からなず、~~/dp/<asin number>/~になっているので以下のように取得
    let asin
    const items=document.location.href.split("/")
    // console.log(items)
    items.forEach((value,index)=>{
        // console.log(value)
        if (value=="dp"||value=="d"){
            asin=items[index+1]
        }
    })

    console.log(asin)
    //登録情報欄を取得
    // pc版の処理
    //mobileと同じでok
    // mobile版の処理
    const publisher = document.getElementById('rpi-attribute-book_details-publisher');
    const publisherName=publisher.getElementsByTagName("span")[2].textContent
    const publisherDate = document.getElementById('rpi-attribute-book_details-publication_date');
    const publisherDateContent=publisherDate.getElementsByTagName("span")[2].textContent
    
    
    console.log(publisherName)
    console.log(publisherDateContent)


    //書影の処理
    // pcの物理本
    var image = document.getElementById("imgBlkFront");
    // mobileの物理本
    if (!image) var image = document.getElementById("main-image");
    // キンドル
    if (!image) var image = document.getElementById("ebooksImgBlkFront");
    
    var imageUrl = image.getAttribute("src");
    console.log(imageUrl)

    var pub = [];//著者情報の処理
    //TODO モバイルからでは著者は取得することができない
    var c = document.getElementsByClassName('author');
    for (g = 0; g < c.length; g++) {
        var at = c[g].innerText.replace(/\r?\n/g, '').replace(/,/, '');
        var pu = at.match(/\(.+\)/);
        var ct = at.replace(/\(.+\)/, '').replace(/ /g, '');
        pub.push(pu + ' [[' + ct + ']]');
    }
    var author = pub.join(' ');

    title = title.replace(/:/g, '：').replace(/\\/g, '＼').replace(/\//g, '／').replace("[","［").replace("]","］");
    var mdImage = '![|100](' + imageUrl + ')';
    const bookLink=`[${title}](https://www.amazon.co.jp/dp/${asin})`
    console.log(bookLink)

    // 表示させたい項目
    const lines_unen=`---
image: 表紙 ${mdImage}
done: false
publishDate: ${publisherDateContent}
publisher: ${publisherName}
have: 持っていない
---

${mdImage}

author: ${author}

## link
- [kindleLink](kindle://book?action=open&asin=${asin})
- [mobilePdfLink](pdfefile:///同期フォルダ/電子書籍/${asin}.pdf)
- [workPcPdfLink](file:///Users/salus/Library/CloudStorage/GoogleDrive-aki.040539@gmail.com/マイドライブ/電子書籍/${asin}.pdf)
- [privatePcPdfLink](file:///Users/akiyoshi/Library/CloudStorage/GoogleDrive-aki.040539@gmail.com/マイドライブ/電子書籍/${asin}.pdf)

## 関連・思い出した本


## 読書メモ
`

    const obsidian = 'obsidian://advanced-uri?filepath=Zettelkasten/Books/' + title + '&data=' + encodeURIComponent(lines_unen);
    window.open(obsidian);
})();