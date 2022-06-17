function myFunction(x) {
  x.classList.toggle("change");
}

async function business() {
  try{
  let day = new Date();
  const url = `https://newsapi.org/v2/top-headlines?country=in&category=business&from=${day}&apiKey=f15966f4548e45d1837a57a0e3a33418`;
  let res = await fetch(url);

  let data = await res.json();
  // console.log(data.articles);
  appendData(data.articles);
  } catch(err){
    console.log('errrr',err);
  }
}
business();

let appendData = (data) => {
  let mainDS = document.getElementById("show");
  mainDS.innerHTML = null;
  data.forEach((el) => {
    console.log(el);

    let img = document.createElement("img");
    // img.setAttribute="image_head"
    img.src = el.urlToImage;

    let title = document.createElement("h2");
    title.innerText = el.title;

    let des = document.createElement("p");
    des.innerText = el.description;

    let div1 = document.createElement("div");
    let div2 = document.createElement("div");

    div1.append(img);
    div2.append(title, des);

    let main = document.createElement("div");
    main.append(div1, div2);

    mainDS.append(main);
  });
};

async function below() {
  try{
  const url1 = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=2c7292a8694c48dbb76f9d6999a7a328`;
  let res = await fetch(url1);

  let data = await res.json();
  console.log(data.articles);
  All(data.articles);
  } catch(err){
    console.log("errr",err);
  }
}
below();

let All = (dataa) => {
  let mainDSs = document.getElementById("country");
  mainDSs.innerHTML = null;

  dataa.forEach((el) => {
    // console.log(el);

    let img = document.createElement("img");
    img.src = el.urlToImage;
    img.setAttribute = "image1";

    let title = document.createElement("h2");
    title.innerText = el.title;

    let des = document.createElement("p");
    des.innerText = el.description;

    let div1 = document.createElement("div");
    let div2 = document.createElement("div");

    div1.append(img);
    div2.append(title, des);

    let main = document.createElement("div");
    main.append(div1, div2);

    mainDSs.append(main);
  });
};

async function sports() {
  try{
  const url12 = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=4959ba80867a4dcfbd579caf0e240512`;
  let res = await fetch(url12);

  let data = await res.json();
  // console.log("allllllllll"+data.articles);
  cantrol(data.articles);
  } catch(err){
    console.log('err',err)
  }
}
sports();

let cantrol = (dataa) => {
  let mainDSs = document.getElementById("sports");
  mainDSs.innerHTML = null;

  dataa.forEach((el) => {
    // console.log(el);

    let img = document.createElement("img");
    img.src = el.urlToImage;
    // img.setAttribute=('image1')

    let title = document.createElement("h2");
    title.innerText = el.title;

    let des = document.createElement("p");
    des.innerText = el.description;

    let div1 = document.createElement("div");
    let div2 = document.createElement("div");

    div1.append(img);
    div2.append(title, des);

    let main = document.createElement("div");
    main.append(div1, div2);

    mainDSs.append(main);
  });
};

async function disssss() {
  try{
  // let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=2c7292a8694c48dbb76f9d6999a7a328`;
  let url = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=4959ba80867a4dcfbd579caf0e240512`;
  let res = await fetch(url);
  let data = await res.json();
  console.log(data.articles);
  yoga(data.articles);
  }catch(err){
    console.log('errr',err)
  }
}
disssss();

let yoga = (data) => {
  let main = document.getElementById("letest_News");
  let count = 0;
  main.innerHTML = null;
  data.forEach((el) => {
    // console.log(el)
    count++;
    if (count <= 15) {
      let im = document.createElement("img");
      im.src = el.urlToImage;

      let title = document.createElement("p");
      title.innerText = el.title;

      // let des=document.createElement('p');
      // des.innerText=el.description;

      let div = document.createElement("div");
      div.append(title, im);

      main.append(div);
    }
  });
};

let i = 0;
setInterval(function () {
  // div.innerHTML=null;
  let div = document.getElementById("m");
  let img1 = [
    "https://tpc.googlesyndication.com/simgad/8320203872598649640",
    "https://tpc.googlesyndication.com/simgad/285741140280285956",
    "https://tpc.googlesyndication.com/simgad/4779493868399984586",
  ];
  let img = document.createElement("img");
  div.innerHTML = null;
  img.src = img1[i];

  div.append(img);
  // console.log(i)
  i++;

  if (i == 3) {
    i = 0;
  }
}, 3000);

let j = 0;
setInterval(function () {
  // div.innerHTML=null;
  let div = document.getElementById("k");
  let img1 = [
    "https://tpc.googlesyndication.com/simgad/12598521820255446265",
    "https://tpc.googlesyndication.com/simgad/11320931687435354367",
    "https://s0.2mdn.net/simgad/3351571786612697550",
  ];
  let img = document.createElement("img");
  div.innerHTML = null;
  img.src = img1[j];

  div.append(img);
  // console.log(img1[j])
  j++;

  if (j == 3) {
    j = 0;
  }
}, 7000);
