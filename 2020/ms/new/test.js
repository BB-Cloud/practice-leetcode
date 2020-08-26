function Wzx() {
    if (!new.target) { // 如果你没有通过 new 运行我
        return new Wzx(); // ……我会给你添加 new
    }

    console.log(new.target);
    this.name = 'wzx';
    this.age = '24';
    return {
        name: 'lyq',
        age: 27,
    }
}

console.log(new Wzx());