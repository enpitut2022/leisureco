# Leisureco

```
[レジャレコ] は
[外出先でふとできた空き時間をどうやって潰せばよいかわからない問題]を解決したい
[旅行などの外出が多い大学生グループ]向けの
[スポットレコメンドアプリ] です。
これは [ユーザの条件に沿ったおすすめの場所を1つずつ提案すること] によって、
[Instagramの地図検索やGoogle Map] とは違って
[TikTokのようなレコメンドスタイルで、案出しにかかる時間を劇的に短縮し、スムーズでストレスフリーに空き時間の活用法を決めること]
を実現できます。
```

- チーム名：判断が遅い！ズ
- サービス名：レジャレコ
- miroURL：https://miro.com/app/board/uXjVPOC4uDY=/
- サービスの URL：https://leisureco.netlify.app
- ベータ版(develop)の URL: https://develop--leisureco.netlify.app

## 開発環境

### 実行方法

以下のコマンドで実行できる

```bash
$ npm install
$ npm run dev
```

### バックログ管理について

- バックログごとにひとつの ID を持つ
- TODO ごとにもひとつの ID を持つ
- TODO の ID の決まり方 -> バッグログ ID + 2 桁のインクリメント

### ブランチについて

- 開発時

1. ローカルの develop を最新の状態にする
2. develop から feature ブランチを切る
