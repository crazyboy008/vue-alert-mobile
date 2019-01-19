# vue-alert

移动端Vue alert插件

## Introduction

移动端Vue alert插件，使用vw实现移动端适配。

## Useage

## Params


```
```name	            type	    default	   description
```title  	        string		'提示'      标题
```content          string		            内容
```buttonText       string	    '确定'    	按钮文字
```buttonTextColor	string	    '#f56a39'	按钮文字颜色
```onShow	        function		        显示时的回调
```onHide	        function		        隐藏时的回调


import VueAlert   from 'vue-alert-mobile'

//and register the plugin on vue.

Vue.use(VueAlert)


// 组件中使用

this.$alert.show({
          title: '提示',
          content: 'alert content',
          buttonText: '确定',
          buttonTextColor: '#f56a39',
          onShow() {
            console.log('show');
          },
          onHide() {
            console.log('hide');
          }
        })


```