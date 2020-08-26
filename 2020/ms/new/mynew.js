function MyNew(fn, ...args) {
    if (!(fn instanceof Function)) {
        throw new TypeError('not a constructor')
    }
    const obj = {}
    obj.__proto__ = fn.prototype
    const result = fn.call(obj, ...args)
    return typeof result === 'object' ? result : obj
}

// 不能用class定义，class定义只能通过new生产对象
function Person(age, name) {
    this.age = age
    this.name = name
    this.hallo = function () {
        console.log(`name:${this.name},age:${this.age}`)
    }
}
MyNew(Person, 18, 'coco').hallo()