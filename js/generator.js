function* fibo() {
    let a = 1
    let b = 1

    yield a
    yield b

    while (true) {
        let next = a + b
        a = b
        b = next
        yield next
    }
}

let generator = fibo()

for (var i = 0; i < 10; i++)
    console.log(generator.next().value)
