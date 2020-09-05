### 怎么美化一个checkbox？
- 让原本的勾选框隐藏
- `input + label` 背景图没选中
- `input:checked + label 背景图选中

```css
#value1{
    display: none;
}
#value1{
    display: none;
}
#value1:checked+label{
    color:blue;
    background: #4cda60;
}
#value1:checked+label:before{
   left:31px;
}
#value1+label{
    cursor: pointer;
    color:red;
    display: block;
    width:60px;
    height: 30px;
    background: #fafbfa;
    border-radius: 15px;
    position: relative;
    box-shadow:inset 0 0 0 0 #eee,0 0 1px rgba(0,0,0,0.4);
    transition: background 0.1s;
    -webkit-transition: background 0.1s;
    -moz-transition: background 0.1s;
    -o-transition: background 0.1s;
}
#value1+label:before{
    content:'';
    position: absolute;
    background: #fff;
    top:1px;
    left:1px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    box-shadow:0 3px 1px rgba(0,0,0,0.05), 0 0 1px rgba(0,0,0,0.3);
    transition: left 0.1s;
    -webkit-transition: left 0.1s;
    -moz-transition: left 0.1s;
    -o-transition: left 0.1s;
}
```
```html
 <input type="checkbox" name="timeType" value="1" id="value1" checked="checked"/>
    <label for="value1"></label>
```
