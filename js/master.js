function run() {
    let n = parseInt(document.getElementsByName('num')[0].value);

    console.log(n);

    let sum = 0;

    while (n!=0) {
        sum += n % 10;
        sum = parseInt(sum);
        n /= 10;
        n = parseInt(n);
    }

    document.getElementById('res').innerText = "The Sum of digits is "+parseInt(sum);
}

function set() {
    document.getElementById('res').innerText = "";
}