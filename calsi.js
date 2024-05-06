const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const plus = document.getElementById("plus");
const multi = document.getElementById("multi");
const minus = document.getElementById("minus");
const divi = document.getElementById("divi");
const mod = document.getElementById("mod");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");


let oper = "";
let res = 0;
let p = "0";
let m = "0";
let d = "0";
let mu = "0";
let mo = "0";

one.addEventListener("click", () => {
    let one = document.getElementById("dis").textContent;

    dis.innerHTML = one + "1";
})
two.addEventListener("click", () => {
    let two = document.getElementById("dis").textContent;

    dis.innerHTML = two + "2";
})
three.addEventListener("click", () => {
    let two = document.getElementById("dis").textContent;

    dis.innerHTML = two + "3";
})
four.addEventListener("click", () => {
    let two = document.getElementById("dis").textContent;

    dis.innerHTML = two + "4";
})
five.addEventListener("click", () => {
    let two = document.getElementById("dis").textContent;

    dis.innerHTML = two + "5";
})
six.addEventListener("click", () => {
    let two = document.getElementById("dis").textContent;

    dis.innerHTML = two + "6";
})
seven.addEventListener("click", () => {
    let two = document.getElementById("dis").textContent;

    dis.innerHTML = two + "7";
})
eight.addEventListener("click", () => {
    let two = document.getElementById("dis").textContent;

    dis.innerHTML = two + "8";
})
nine.addEventListener("click", () => {
    let two = document.getElementById("dis").textContent;

    dis.innerHTML = two + "9";
})
zero.addEventListener("click", () => {
    let two = document.getElementById("dis").textContent;

    dis.innerHTML = two + "0";
})

plus.addEventListener("click", () => {
    p = document.getElementById("dis").textContent;
    plus.style.backgroundColor = "red";
    dis.innerHTML = "";
    oper = "+";

})

minus.addEventListener("click", () => {
    m = document.getElementById("dis").textContent;
    minus.style.backgroundColor = "red";
    dis.innerHTML = "";
    oper = "-";

})
divi.addEventListener("click", () => {
    d = document.getElementById("dis").textContent;
    divi.style.backgroundColor = "red";
    dis.innerHTML = "";
    oper = "/";
})
multi.addEventListener("click", () => {
    mu = document.getElementById("dis").textContent;
    multi.style.backgroundColor = "red";
    dis.innerHTML = "";
    oper = "*";
})
clear.addEventListener("click",()=>{
    dis.innerHTML = "";
   
})
equal.addEventListener("click", () => {

    let bcd = document.getElementById("dis").textContent;

    equal.style.backgroundColor = "green";
    console.log(oper);
    if (oper == "+") {
        console.log(p);
        console.log(bcd);
        p = Number(p);
        bcd = Number(bcd);
        res = p + bcd;
        dis.innerHTML = res;
        console.log(res);
    }
    else {
        if (oper == "-") {
            res = Number(m) - Number(bcd);
            dis.innerHTML = res;
        }
        else {
            if (oper == "/") {
                res = Number(d) / Number(bcd);
                dis.innerHTML = res;
            }
            else {
                res = Number(mu) * Number(bcd);
                dis.innerHTML = res;
            }
        }
    }

}
)