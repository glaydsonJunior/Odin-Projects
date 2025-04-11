function fibs(c){
    let sum = [0, 1]
    for (let i = 0; i < c; i++)sum.push(sum[i]+sum[i+1])
    return sum
}


function fibo(c){

    function fibsRec(n, m, c){
        if(c < 1)return n
        y = n
        n = n+m
        m = y
        return fibsRec(n,m, c-1)
    }

    console.log(fibsRec(0, 1, c))

}


let ar = [1,3,2,9,4,3,2,12,29,23,51,31,21,25,42]

function merge(a, b) {
    let r = [];
    let minA = 0;
    let minB = 0;
    
    while (minA < a.length && minB < b.length) {
        if (a[minA] < b[minB]) {
            r.push(a[minA]);
            minA += 1;
        } else {
            r.push(b[minB]);
            minB += 1;
        }
    }
    
    while (minA < a.length) {
        r.push(a[minA]);
        minA += 1;
    }
    
    while (minB < b.length) {
        r.push(b[minB]);
        minB += 1;
    }
    
    return r;
}

function mergeSort(a) {
    if (a.length < 2) {
        return a;
    }
    
    let m = Math.floor(a.length / 2);
    let c = mergeSort(a.slice(0, m));
    let d = mergeSort(a.slice(m));
    
    return merge(c, d);
}


console.log(mergeSort(ar))