/**
 * 创建.
 * 二月
 let aa=23;
 */
// "use strict"   //不写的话，编译后的会自动添加
const we=23;
// const we=12;   //报错信息：Duplicate declaration "we"
//let 的改进 看下编译后的js代码
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        output.innerText = buttons[i].innerText; //Uncaught TypeError: Cannot read property 'innerText' of undefined
    })
}
