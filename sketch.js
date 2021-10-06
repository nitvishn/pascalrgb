var pixelWidth = 10
var pixelHeight = 10
var l = 0;

function setup() {
    createCanvas(windowWidth, windowHeight)
    background(255)
}

function draw() {
    t = pascalTriangle(windowHeight / 10, l);
    for (var i = 0; i < t.length; i++) {
        y = i * pixelWidth;
        xoffset = (windowWidth - t[i].length * pixelWidth) / 2
        for (var j = 0; j < t[i].length; j++) {
            x = j * pixelHeight;
            fill(t[i][j])
            // stroke(t[i][j])
            rect(xoffset + x, y, pixelWidth, pixelHeight)
        }
    }
    l += 0.01
    console.log(l)
}

function pascalTriangle(length, l) {
    k = 1
    n = [k, k, k]
    length += 1
    x = [
        [n],
        [n, n]
    ]

    rcursor = 2
    vcursor = 0

    while (x.length < length) {
        x.push([
            [k, k, 0],
        ])
        while (true) {
            x[rcursor].push(ArrayAdd(x[rcursor - 1][vcursor], x[rcursor - 1][vcursor + 1], l))
            if (vcursor > x[rcursor - 1].length - 3) {
                x[rcursor].push([0, 0, k])
                vcursor = 0
                rcursor += 1
                break
            }
            vcursor += 1
        }
    }

    return x
}

function ArrayAdd(arr1, arr2, n) {
    arr3 = []
    for (var i = 0; i < arr1.length; i++) {
        arr3.push((arr1[i] + arr2[i])/n % 255)
    }
    return arr3
}
