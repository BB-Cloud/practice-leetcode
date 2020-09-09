Function.prototype.myCall = function (content = window, ...args) {
    if (typeof this !== 'function') {
        throw new TypeError('not a function')
    }
    content.fn = this
    const result = content.fn(...args)
    delete content.fn
    return result
}

function test(age) {
    console.log(`name:${this.name},age:${age}`)
}
test.myCall({
    name: 'coco'
}, 18)

delete Function.prototype.myCall