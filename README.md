# dialog
开发常用弹窗封装。

# 说明

- ## 首先需要引入dialog.js和dialog.css；
- ## 调用方式如下：

```javascript
Dialog({
            title: {
              words: 'title',//弹窗标题文字
              style: {'color':'#0f8c86'}//弹窗标题样式
            },
            contentTopWords: {
              words: 'contentTopWords',//弹窗内容区文字
              style: {}//弹窗内容区样式
            },            
            btn: {
              isOneBtn: true,//弹窗底部是一个按钮还是两个
              confirmBtnWords: '关闭',//一个按钮情况下的按钮名称
              style: {'background':'#e89223'},   //按钮样式
              callback: function(){
                alert('我是点击按钮后的回调！');
              }           
            }
          });
```
- ## 支持的弹窗组合为：
```
1、顶部标题+中间文字展示+底部按钮（单个按钮或两格按钮）
2、顶部标题+中间文本输入+底部按钮（单个按钮或两格按钮）
3、顶部标题+中间图片+底部按钮（单个按钮或两格按钮）
4、顶部标题+以上三种的随机组合+底部按钮（单个按钮或两格按钮）
```
- ## 效果图如下：

 <img alt="截图" src="https://github.com/Liuxiang66/dialog/blob/master/img/dialog-00.png"/> 
 <img alt="截图" src="https://github.com/Liuxiang66/dialog/blob/master/img/dialog-01.png"/>  
 <img alt="截图" src="https://github.com/Liuxiang66/dialog/blob/master/img/dialog-02.png"/>    
 <img alt="截图" src="https://github.com/Liuxiang66/dialog/blob/master/img/dialog-04.png"/>


# 注

此项目仅为个人开发过程中弹窗的简单版本，样式不拘一格o(╥﹏╥)o，可根据个人需求，自己重设样式。





