japanese-fonts.css
==================

The CSS configurations for Japanese device/web fonts.

Installation
------------

### NPM

```shell
$ npm i -S japanese-fonts-css
# Recommend you to use along with PostCSS and postcss-import
$ npm i -D postcss postcss-import
```

Then, import on your CSS file.

```css
@import 'japanese-fonts-css';
```

### Download

1. Just click \[[Download ZIP](https://github.com/seamile4kairi/japanese-fonts-css/archive/master.zip)\] button or ``git clone https://github.com/seamile4kairi/japanese-fonts-css.git``.
2. Import or load the minimized CSS file:
```css
/* from CSS */
@import 'dist/japanese-fonts.min.css';
```
```html
<!-- from HTML -->
<link rel="stylesheet" href="dist/japanese-fonts.min.css" charset="utf-8">
```

Usage
-----

### Use with CSS Custom Properties

```css
.sans-serif {
  font-family: var(--jp-sans-serif);
  ...
}

.serif {
  font-family: var(--jp-serif);
  ...
}

.monospace {
  font-family: var(--jp-monospace);
  ...
}
```

Or you can also redifne custom properties as you like:

```css
:root {
  --custom-sans-serif: var(--font-apple-sans),
                       var(--font-ms-sans),
                       'ＭＳ Ｐゴシック',
                       sans-serif;
}

.hoge {
  font-family: var(--custom-sans-serif);
}
```

#### Reserved Custom Properties

- ``var(--jp-sans-serif)``: sans-serif / ゴシック体
  - ``var(--font-system)``:       Fonts defined by OS (= San Francisco on Apple's devices)
  - ``var(--font-sf-text)``:      San Francisco - Text
  - ``var(--font-yu-gothic)``:    游ゴシック (YuGothic)
  - ``var(--font-apple-sans)``:   Helvetica Neue, ヒラギノ角ゴ (Hiragino Kaku Gothic)
  - ``var(--font-google-sans)``:  Roboto, Noto Sans Japanese
  - NOT INCLUDED FONT-SETS
    - ``var(--font-sf-display)``: San Francisco - Display
    - ``var(--font-ms-sans)``:    メイリオ (Meiryo)
- ``var(--jp-serif)``: serif / 明朝体
  - ``var(--font-yu-mincho)``:    游明朝 (YuMincho)
  - ``var(--font-apple-serif)``:  Garamond, ヒラギノ明朝 (Hiragino Mincho)
  - ``var(--font-google-serif)``: さわらび明朝
- ``var(--jp-monospace)``: monospace / 等幅
  - ``var(--font-apple-mono)``:   Monaco, Osaka-Mono
  - ``var(--font-google-mono)``:  Noto Sans Mono Japanese
  - NOT INCLUDED FONT-SETS:
    - ``var(--font-ms-mono)``:    ＭＳゴシック (MS Gothic)

#### cf. About Custom Properties

- [SPEC](https://www.w3.org/TR/css-variables/)
- [PostCSS Plugins](https://github.com/postcss/postcss-custom-properties)

### Use with class or [data-jp-fonts] attribute

```html
<!-- Define with CSS class -->
<p class="jp-font--sans-serif">sans-serif / ゴシック体を指定</p>
<p class="jp-font--serif">serif / 明朝体を指定</p>
<p class="jp-font--monospace">monospace / 等幅フォントを指定</p>

<!-- Define with [data-jp-font] attribute -->
<p data-jp-font="sans-serif">sans-serif / ゴシック体を指定</p>
<p data-jp-font="serif">serif / 明朝体を指定</p>
<p data-jp-font="monospace">monospace / 等幅フォントを指定</p>
```

License
-------

MIT
