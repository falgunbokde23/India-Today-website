let url="https://masai-mock-api.herokuapp.com/news/top-headlines?country=us"

async function myfun(url){

    let data = await fetch(url);
    let res = await data.json();
    display(res.articles);
}

myfun(url);

function display(data){

    data.forEach((ele)=>{
        let flexbox = document.createElement("div")
        flexbox.setAttribute("id", "flexbox")
        let div = document.createElement("div");
        div.setAttribute("id","main")

        let box = document.createElement("div");
        box.setAttribute("id","imgbox")

        let img = document.createElement("img");
        img.setAttribute("id", "img");
        img.src=ele.urlToImage;

        let title = document.createElement("h2");
        title.setAttribute("id","titlefont")
        title.innerText = ele.title;

        let content = document.createElement("p");
        content.setAttribute("id","contentfont");
        content.innerText = ele.description;

        title.addEventListener("click",()=>{
            nextPage(ele);
        });

        box.append(img)
        div.append(title,content)
        flexbox.append(box,div);

        document.querySelector("#box").append(flexbox);
        console.log(flexbox)
        
        
        
    })
}

function nextPage(ele){
    console.log(ele);
    document.querySelector("#maindiv").innerText=null;
        let div = document.createElement("div");
        div.setAttribute("id","nextmain")

        let img = document.createElement("img");
        img.setAttribute("id", "nextimg");
        img.src=ele.urlToImage;

        let title = document.createElement("h2");
        title.setAttribute("id","nexttitlefont")
        title.innerText = ele.title;

        let content = document.createElement("p");
        content.setAttribute("id","nextcontentfont");
        content.innerText = ele.description;
        
        let content2 = document.createElement("p");
        content.setAttribute("id","nextcontentfont2");
        content2.innerText = ele.content

        let author = document.createElement("p");
        author.setAttribute("id","nextauthor");
        author.innerText = ele.author

        let publishedAt= document.createElement("p");
        publishedAt.setAttribute("id","publishedAt");
        publishedAt.innerText = ele.publishedAt

        

        let btn=document.createElement("button")
        btn.setAttribute("id","button");
        btn.innerHTML="Back To World News"
        

        btn.addEventListener("click",()=>{
            window.location.reload();
        }
        )

        div.append(title,img,content,content2,author,publishedAt,btn)
        document.querySelector("#maindiv").append(div)
}





let arr=[
{   
        img:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/thumbnail_THE_FEAR_OF_THE_ED.jpg?size=88:50",title:"The Fear Of The ED I An India Today Infographic"
},
{
    img:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/PTI06_13_2022_000096A_1200x768.jpeg?size=88:50",
    title:"Nehru’s National Herald to Gandhis’ Young India. Why ED has gone for big game hunting"
},
{
    img:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/iii.jpg?size=88:50",
    title:"Twitter flooded with memes as Microsoft prepares to shut down Internet Explorer after 27 years"
},
{
    img:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/BCOEEUL7IVI55CUNHEWSDL4ZEE_1200x768.jpeg?size=88:50",
    title:"International hackers launch serial cyber attacks on India over Nupur Sharma’s remarks"
},
{
    img:"https://akm-img-a-in.tosshub.com/indiatoday/images/video/202206/ku_1200x768.png?size=88:50",
    title:"Kuwait to deport Indian expats who staged protest against Nupur Sharma's remarks on Prophet"
},
{
    img:"https://akm-img-a-in.tosshub.com/indiatoday/images/video/202206/mam_1200x768.png?size=88:50",
    title:"Mamata to replace Governor Jagdeep Dhankhar as chancellor of state-run universities"
}
]

function sidebar(arr){
arr.forEach((ele)=>{
    let sideMainBox=document.createElement("div");
    sideMainBox.setAttribute("id","sidebarFlex")
    let sidediv=document.createElement("div");

    let sideimgbox= document.createElement("div");

    let sidetitle=document.createElement("p");
    sidetitle.setAttribute("id","sidetitle")
    sidetitle.innerText=ele.title;
    
    let sideimg=document.createElement("img");
    sideimg.setAttribute("id","sideimg")
    sideimg.src=ele.img;

    sideimgbox.append(sideimg);
    sidediv.append(sidetitle);

    sideMainBox.append(sidediv,sideimgbox)
    document.querySelector("#sidebarappend").append(sideMainBox);
})


}

sidebar(arr);

