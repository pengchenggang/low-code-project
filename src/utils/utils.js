import { WinKeyboard } from '@/enums/editPageEnum'
// 内置字符串函数键值列表
export const excludeParseEventValueList = [
  // 请求里的函数语句
  'javascript:'
]
// 基础事件类型(vue不加 on)
export const BaseEvent = {
  // 点击
  ON_CLICK: 'click',
  // 双击
  ON_DBL_CLICK: 'dblclick',
  // 移入
  ON_MOUSE_ENTER: 'mouseenter',
  // 移出
  ON_MOUSE_LEAVE: 'mouseleave'
}

// vue3 生命周期事件
export const EventLife = {
  // 渲染之后
  VNODE_MOUNTED: 'vnodeMounted',
  // 渲染之前
  VNODE_BEFORE_MOUNT: 'vnodeBeforeMount'
}

// 内置字符串函数对象列表
export const excludeParseEventKeyList = [
  EventLife.VNODE_BEFORE_MOUNT,
  EventLife.VNODE_MOUNTED,
  BaseEvent.ON_CLICK,
  BaseEvent.ON_DBL_CLICK,
  BaseEvent.ON_MOUSE_ENTER,
  BaseEvent.ON_MOUSE_LEAVE,
  //过滤器
  'filter'
]

/**
 * * JSON反序列化，支持函数和 undefined
 * @param data
 */
 export const JSONParse = (data) => {
  // console.info('JSONParse data:', data)
  return JSON.parse(data, (k, v) => {
    // console.info('k', k)
    // console.info('v', v)
    // 过滤函数字符串
    if (excludeParseEventKeyList.includes(k)) return v
    // 过滤函数值表达式
    if (typeof v === 'string') {
      const someValue = excludeParseEventValueList.some(excludeValue => v.indexOf(excludeValue) > -1)
      if (someValue) return v
    }
    // 还原函数值
    if (typeof v === 'string' && v.indexOf && (v.indexOf('function') > -1 || v.indexOf('=>') > -1)) {
      return evalFn(`(function(){return ${v}})()`)
    } else if (typeof v === 'string' && v.indexOf && v.indexOf('return ') > -1) {
      const baseLeftIndex = v.indexOf('(')
      if (baseLeftIndex > -1) {
        const newFn = `function ${v.substring(baseLeftIndex)}`
        return evalFn(`(function(){return ${newFn}})()`)
      }
    }
    return v
  })
}

/**
 * 
 * @param {string} fn 函数字符串
 * @returns 
 */
export const evalFn = (fn) => {
  var Fun = Function // 一个变量指向Function，防止前端编译工具报错
  return new Fun('return ' + fn)()
}

/**
 * * JSON序列化，支持函数和 undefined
 * @param data
 */
 export const JSONStringify = (data) => {
  return JSON.stringify(
    data,
    (key, val) => {
      // 处理函数丢失问题
      if (typeof val === 'function') {
        return `${val}`
      }
      // 处理 undefined 丢失问题
      if (typeof val === 'undefined') {
        return null
      }
      return val
    },
    2
  )
}

/**
 * * 动态注册组件
 */
 export const componentInstall = (key, node)  => {
  if(!window['$vue'].component(key) && node) {
    window['$vue'].component(key, node)
  }
}

/**
 * * 设置按下键盘按键的底部展示
 * @param keyCode
 * @returns
 */
export const setKeyboardDressShow = (keyCode) => {
  const code = new Map([
    [17, WinKeyboard.CTRL],
    [32, WinKeyboard.SPACE]
  ])

  const dom = document.getElementById('keyboard-dress-show')
  if (!dom) return
  if (!keyCode) {
    window.onKeySpacePressHold?.(false)
    dom.innerText = ''
    return
  }
  if (keyCode && code.has(keyCode)) {
    if (keyCode == 32) window.onKeySpacePressHold?.(true)
    dom.innerText = `按下了「${code.get(keyCode)}」键`
  }
}

// 处理键盘记录
export const keyRecordHandle = () => {
  // 默认赋值
  window.$KeyboardActive = {
    ctrl: false,
    space: false
  }

  document.onkeydown = (e) => {
    const { keyCode } = e
    if (keyCode == 32 && e.target == document.body) e.preventDefault()

    console.info('onkeydown e.keyCode', e.keyCode)


    if ([17, 32].includes(keyCode) && window.$KeyboardActive) {
      switch (keyCode) {
        case 17:
          window.$KeyboardActive.ctrl = true
          break
        case 32: {
          window.$KeyboardActive.space = true
          const previewBoxDom = document.querySelector('.go-preview')
          if (previewBoxDom && previewBoxDom.style.position === 'absolute') {
            previewBoxDom.style.cursor = 'grab'
          }
          break
        }
      }
    }
  }

  document.onkeyup = (e) => {
    const { keyCode } = e
    if (keyCode == 32 && e.target == document.body) e.preventDefault()

    if ([17, 32].includes(keyCode) && window.$KeyboardActive) {
      switch (keyCode) {
        case 17:
          window.$KeyboardActive.ctrl = false
          break
        case 32:
          window.$KeyboardActive.space = false
          break
      }
    }

    const previewBoxDom = document.querySelector('.go-preview')
    if (previewBoxDom) {
      previewBoxDom.style.cursor = 'default'
    }
  }
}
