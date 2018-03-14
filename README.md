


## Webpack处理CSS

大致流程：

1. 读取CSS文件(预处理/后处理)
2. 将CSS转换为JS
3. 将CssInJS插入HTML

Loader

- sass-loader, stylus-loader, less-loader （可选） CSS预处理器
- postcss-loader (可选) CSS后处理器
- css-loader, raw-loader： 将CSS转换为JS （必须）
- style-loader, extract-text-webpack-plugin， 将CSS数据转换为HTML可读入的数据 （必须）


### css-loader

输入

```
import hljsCss from 'highlight.js/styles/dark.css';
```


输出
```
Array[
  [
    27, //长度？
    '.hljs {display: block;}...'  //原始css文本
    '' //未知
  ],
  toString: ()=>{},
  i: () => {}
]
```

css-loader输出的结果可以直接转化为文本

```

```