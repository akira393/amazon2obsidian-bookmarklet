
## 概要
開いているamazonの書籍ページから情報を取得して、obsidianのノートを作成するためのブックマークレットから呼び出す用のスクリプト

ブックマークレットとして以下を登録する
```javascript
javascript:(function(d,s){s=d.createElement('script');s.src='https://cdn.jsdelivr.net/gh/akira393/amazon2obsidian-bookmarklet@main/scripts.js';d.body.appendChild(s);})(document)
```

## 依存関係
obsidianのノートを作成するためのcustom url schemeを実行するために、obsidian advanced urlのpluginを利用している