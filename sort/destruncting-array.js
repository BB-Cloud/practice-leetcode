function destructuringArray(ary, template) {
	let result = {}
	let deep = []
	
	template = template.replace(/\s/, '')
	let l = template.length
	
	let i = 0
	
	let position = 0
	
	let substr = ''
	
	// 把值写入result
	let write = (key, deep, array) => {
		let i = 0
		let l = deep.length
		let res = array
		while(i < l) {
			let position = deep[i]
			res = res[position]
			i++
		}
		result[key] = res
	}
	
	while (i < l) {
		let s = template[i]
		switch (s) {
			case '[':
				deep.push(position)
				break
			case ']':
				if (substr) {
					write(substr, deep, ary)
					substr = ''
				}
				deep.pop()
				break
			case ',':
				if (substr) {
					write(substr, deep, ary)
					substr = ''
				}
				deep[deep.length - 1]++
				break
			default:
				// 找到了字母
				substr += s
				break
		}
		i++
	}
	return result
}
console.log(destructuringArray([1,[2,4],3], '[a,[b],c]'))
console.log(destructuringArray([1, [2, 3, [4, 5, 6]], 7, [8, 9, [10, 11]]], '[a,[b,c,[d,e,f]],g,[h,i,[j,k]]]'))
