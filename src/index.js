import _ from 'lodash';
import printMe from './print';
import './styles.css'
import { cube } from './math.js';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button')

  // Lodash，现在由这个脚本导入
  // element.innerHTML = _.join(['Hello', 'webpack12'], ' ');
  // btn.innerHTML = 'Click me and check the console!';
  // btn.onclick = printMe
  // element.appendChild(btn)

  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');
  // element.classList.add('hello');

  // 将图像添加到我们现有的 div。
  //  var myIcon = new Image();
  //  myIcon.src = Icon;

  //  element.appendChild(myIcon);

  //  console.log(Data);

  return element;
}

// document.body.appendChild(component());

let element = component(); // 当 print.js 改变导致页面重新渲染是，重新获取渲染的元素
document.body.appendChild(element)

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element)
    element = component(); // 重新渲染页面后，component更新click事件处理
    document.body.appendChild(element)
  })
}