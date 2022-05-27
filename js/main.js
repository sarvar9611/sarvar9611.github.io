const arr = [];

function splitArr(params) {
    arr.push(prompt("Input here:", "").split(","));
}

let isTrue = true;
for (;isTrue ;) {
    splitArr();

    isTrue = confirm("Davom etasizmi?");
}


for (let i of arr) {
        document.write(`${i}<br>`)
    }