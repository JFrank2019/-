let html = document.querySelector('#html')
let style = document.querySelector('#style')

let string = `/**
 * 今天来个简简单单的太极图
 * 首先先画一个圆
 */
.circle {
  border: 1px solid red;
  width: 300px;
  height: 300px;
  border-radius: 50%;
}
/**
 * 给这个圆添加渐变色
 * 添加阴影
 */
.circle {
  box-shadow: 0 0 3px rgba(0, 0, 0, .5);
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
  border: none;
}
/**
 * 接下来添加两个神秘的小球
 */
.circle::before {
  width: 150px;
  height: 150px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #000;
  border-radius: 50%;
}
.circle::after {
  width: 150px;
  height: 150px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  border-radius: 50%;
}
/**
 * 最后在相应的区域制作颜色相反的小球
 */
.circle::before {
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
.circle::after {
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}

/**
 * 铛铛铛铛~
 * 做好了!
 */
`

let string2 = ''
let n = 0

let step = () => {
  setTimeout(() => {
    // 如果是回车，就不照搬; 如果不是回车就照搬
    if (string[n] === '\n') {
      string2 += '<br>'
    } else if (string[n] === ' ') {
      string2 += '&nbsp;'
    } else {
      string2 += string[n]
    }
    html.innerHTML = string2
    style.innerHTML = string.substring(0, n)
    if (n < string.length - 1) {
      // n 不是最后一个
      n += 1
      step()
      window.scrollTo(0, 99999)
      html.scrollTo(0, 99999)
    } else {
      // n 是最后一个
    }
  }, 50)
}

step()
