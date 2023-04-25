let span = document.createElement("span");
span.innerText = "960*360px";

let bigcol = document.createElement("div");
bigcol.setAttribute("class", "col-12");
bigcol.append(span);

let rowcontainer = document.createElement("div");
rowcontainer.setAttribute("class", "row");
rowcontainer.append(bigcol);
for(let i=0;i<3;i++){
    let graylayerspan=document.createElement("span");
    graylayerspan.innerText="290*180px";
    let graylayer=document.createElement("div");
    graylayer.setAttribute("class","gray-layer");
    graylayer.append(graylayerspan);
    let header=document.createElement("h2");
    header.textContent="Indonectetus faciltis";
    let p=document.createElement("p");
    p.textContent="Nulamlacus dui ipsum conseque  non euisque morbi penas dapibulum orna.";
    let a=document.createElement("a");
    a.setAttribute("class","text-warning");
    a.textContent="Read More>>";
    let col4=document.createElement("div");
    col4.setAttribute("class","col-4");
    col4.append(graylayer,header,p,a);
    rowcontainer.append(col4);
}

let divcontainer=document.createElement("div");
divcontainer.setAttribute("class","container");
divcontainer.append(rowcontainer);
let body=document.body;
body.append(divcontainer);