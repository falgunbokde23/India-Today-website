let upi ="275a3ef2e229e2ba68d1bb451f2e3722"
    advertizing()
    async function advertizing(){
        let res=await fetch("http://api.mediastack.com/v1/news?access_key=7a245fef975e40a0743127c57aad08b3&keywords=clothes&countries=in")
         let data =await res.json()
         
            appenadd(data.data)
        
         
    }
    function appenadd(data){
        let i=0
        
       let inter=setInterval(function(){
    
        document.getElementById("advertising").innerHTML=null
            let img =document.createElement("img")
            if(data[i].image==null){
                data[i].image =`https://th.bing.com/th/id/OIP.Pvwf9JCK8RQBmFHGNbhZOAHaDj?w=327&h=167&c=7&r=0&o=5&pid=1.7`
            }
            img.src=data[i].image
            let h3=document.createElement("h3")
            h3.innerText=data[i].description
           document.getElementById("advertising").append(img)
        i++
        if(i===data.length){
            i=0
        }
       },3000)
       }


    async function getpoticaldata(){
        
        let res =await fetch(`http://api.mediastack.com/v1/news?access_key=7a245fef975e40a0743127c57aad08b3&keywords=politics&countries=in`)
        let data =await res.json()
        
            append(data.data)
       
       
    }
    getpoticaldata()
 
    function append(data){
        data.forEach(function(el){ 
                      
             let h3=document.createElement("h3")
             let hr=document.createElement("hr")
             h3.innerText=el.description
             document.getElementById("top_stories").append(hr,h3)
        })
        
    }

    random()
    
   
    async function random(){
        let res=await fetch("http://api.mediastack.com/v1/news?access_key=7a245fef975e40a0743127c57aad08b3&keywords=random&countries=in")
         let data =await res.json()
         
            appen1(data.data)
        
         
    }
    
             
    function appen1(data){
        let i=0
        
       let inter=setInterval(function(){
    
        document.getElementById("trending1").innerHTML=null
            let img =document.createElement("img")
            if(data[i].image==null){
                data[i].image =`https://th.bing.com/th/id/OIP.Pvwf9JCK8RQBmFHGNbhZOAHaDj?w=327&h=167&c=7&r=0&o=5&pid=1.7`
            }
            img.src=data[i].image
            let h3=document.createElement("h3")
            h3.innerText=data[i].description
           document.getElementById("trending1").append(img,h3)
        i++
        if(i===6){
            i=0
        }
       },3000)
       }
       sport()
       async function sport(){
        let res=await fetch("http://api.mediastack.com/v1/news?access_key=7a245fef975e40a0743127c57aad08b3&keywords=sport&countries=in")
         let data =await res.json()
           
            append2(data.data)
         
    }   
    function append2(data){
        let i=0
        
       let inter=setInterval(function(){
        if(i%2==0){
            document.getElementById("trending2-1").innerHTML=null
            let img =document.createElement("img")
            if(data[i].image==null){
                data[i].image =`https://th.bing.com/th/id/OIP.Pvwf9JCK8RQBmFHGNbhZOAHaDj?w=327&h=167&c=7&r=0&o=5&pid=1.7`
            }
            img.src=data[i].image
            let h3=document.createElement("h3")
            h3.innerText=data[i].description
           document.getElementById("trending2-1").append(img,h3)
        }
        else{
            document.getElementById("trending2-2").innerHTML=null
            let img =document.createElement("img")
            if(data[i].image==null){
                data[i].image =`https://th.bing.com/th/id/OIP.Pvwf9JCK8RQBmFHGNbhZOAHaDj?w=327&h=167&c=7&r=0&o=5&pid=1.7`
            }
            img.src=data[i].image
            let h3=document.createElement("h3")
            h3.innerText=data[i].description
           document.getElementById("trending2-2").append(img,h3)
        }
    
       
        i++
        if(i===data.length){
            i=0
        }
       },3000)
       }
       add()
       async function add(){
        let res=await fetch("http://api.mediastack.com/v1/news?access_key=7a245fef975e40a0743127c57aad08b3&keywords=hair&countries=in")
         let data =await res.json()
           
            append5(data.data)
      }
      function append5(data){
        let i=0
        
       let inter=setInterval(function(){
    
        document.getElementById("add").innerHTML=null
            let img =document.createElement("img")
            img.src=data[i].image
            if(data[i].image==null){
                data[i].image =`https://th.bing.com/th/id/OIP.Pvwf9JCK8RQBmFHGNbhZOAHaDj?w=327&h=167&c=7&r=0&o=5&pid=1.7`
            }
            let h3=document.createElement("h3")
            h3.innerText=data[i].description
           document.getElementById("add").append(img,h3)
        i++
        if(i===data.length){
            i=0
        }
       },3000)
       }    

   
       opinion()     
 


async function opinion(){
    let res=await fetch("http://api.mediastack.com/v1/news?access_key=7a245fef975e40a0743127c57aad08b3&keywords=opinion&countries=in")
     let data =await res.json()
       
        appendopinion(data.data)
  }
  
        
  function appendopinion(data){
  
    data.forEach(function(el){
        let div=document.createElement("div")
        let img =document.createElement("img")
        img.src=el.image
        if(el.image==null){
            img.src =`https://th.bing.com/th/id/OIP.Pvwf9JCK8RQBmFHGNbhZOAHaDj?w=327&h=167&c=7&r=0&o=5&pid=1.7`
        }
        let h3=document.createElement("h3")
        h3.innerText=el.description
        div.append(img,h3)
       document.getElementById("opinion").append(div)
    })
  
  
   }  
       







visual()

       async function visual(){
        let res=await fetch("http://api.mediastack.com/v1/news?access_key=7a245fef975e40a0743127c57aad08b3&keywords=bollywood&countries=in")
         let data =await res.json()
           
            appendvisual(data.data)
      }
      
            
      function appendvisual(data){
      
        data.forEach(function(el){
            let div=document.createElement("div")
            let img =document.createElement("img")
            img.src=el.image
            if(el.image==null){
                img.src =`https://th.bing.com/th/id/OIP.Pvwf9JCK8RQBmFHGNbhZOAHaDj?w=327&h=167&c=7&r=0&o=5&pid=1.7`
            }
            let h3=document.createElement("h3")
            h3.innerText=el.description
            div.append(img,h3)
           document.getElementById("visual_stories").append(div)
        })
      
      
       }  
       today()  
       async function today(){
        let res=await fetch("https://newsdata.io/api/1/news?apikey=pub_838270f6e8e15ee38b2a02681cb67ee5515b&q=today")
         let data =await res.json()
         atoday(data.results)
        
            // today(data.data)
      }
      
            
      function atoday(data){
     
        data.forEach(function(el){
            let div=document.createElement("div")
            let img =document.createElement("img")
            img.src=el.image_url
            if(el.image_url==null){
                img.src =`https://th.bing.com/th/id/OIP.Pvwf9JCK8RQBmFHGNbhZOAHaDj?w=327&h=167&c=7&r=0&o=5&pid=1.7`
            }
            let h3=document.createElement("h3")
            h3.innerText=el.description
            div.append(img,h3)
           document.getElementById("today_special").append(div)
        })
      
    }
   
    



    moviess()  
    async function moviess(){
                let res=await fetch("https://newsdata.io/api/1/news?apikey=pub_838270f6e8e15ee38b2a02681cb67ee5515b&q=movies")
                 let data =await res.json()
                   
                    appendmovie(data.results)
              }
              
                    
              function appendmovie(data){
                let i=0
                
               let inter=setInterval(function(){
            
                document.getElementById("movies").innerHTML=null
                 let h1=document.createElement("h1")
                 h1.innerText="MOVIES"
                    let img =document.createElement("img")
                    img.src=data[i].image_url
                    if(data[i].image_url==null){
                        img.src =`https://th.bing.com/th/id/OIP.Pvwf9JCK8RQBmFHGNbhZOAHaDj?w=327&h=167&c=7&r=0&o=5&pid=1.7`
                    }
                    let h3=document.createElement("h3")
                    let br=document.createElement("br")
                    let h=document.createElement("h3")
                    h.innerText=data[i].title
                    h3.innerText=data[i].description
                   document.getElementById("movies").append(h1,img,h3,br,h)
                i++
                if(i===data.length){
                    i=0
                }
               },3000)
               } 
               
    lifestyle()  
    async function lifestyle(){
                let res=await fetch("https://newsdata.io/api/1/news?apikey=pub_838270f6e8e15ee38b2a02681cb67ee5515b&q=lifestyle")
                 let data =await res.json()
                   
                    appendlifestyle(data.results)
              }
              
                    
              function appendlifestyle(data){
                let i=0
                
               let inter=setInterval(function(){
            
                document.getElementById("lifestyle").innerHTML=null
                 let h1=document.createElement("h1")
                 h1.innerText="lifestyle"
                    let img =document.createElement("img")
                    img.src=data[i].image_url
                    if(data[i].image_url==null){
                        img.src =`https://th.bing.com/th/id/OIP.Pvwf9JCK8RQBmFHGNbhZOAHaDj?w=327&h=167&c=7&r=0&o=5&pid=1.7`
                    }
                    let h3=document.createElement("h3")
                    let br=document.createElement("br")
                    let h=document.createElement("h3")
                    h.innerText=data[i].title
                    h3.innerText=data[i].description
                   document.getElementById("lifestyle").append(h1,img,h3,br,h)
                i++
                if(i===data.length){
                    i=0
                }
               },3000)
               } 
    sports()  
    async function sports(){
                let res=await fetch("https://newsdata.io/api/1/news?apikey=pub_838270f6e8e15ee38b2a02681cb67ee5515b&q=sports")
                 let data =await res.json()
                   
                    appendsports(data.results)
              }
              
                    
              function appendsports(data){
                let i=0
                
               let inter=setInterval(function(){
            
                document.getElementById("sports").innerHTML=null
                 let h1=document.createElement("h1")
                 h1.innerText="sports"
                    let img =document.createElement("img")
                    img.src=data[i].image_url
                    if(data[i].image_url==null){
                        img.src =`https://th.bing.com/th/id/OIP.Pvwf9JCK8RQBmFHGNbhZOAHaDj?w=327&h=167&c=7&r=0&o=5&pid=1.7`
                    }
                    let h3=document.createElement("h3")
                    let br=document.createElement("br")
                    let h=document.createElement("h3")
                    h.innerText=data[i].title
                    h3.innerText=data[i].description
                   document.getElementById("sports").append(h1,img,h3,br,h)
                i++
                if(i===data.length){
                    i=0
                }
               },3000)
               } 





    podcast()  
    async function podcast(){
                let res=await fetch("https://newsdata.io/api/1/news?apikey=pub_838270f6e8e15ee38b2a02681cb67ee5515b&q=podcast")
                 let data =await res.json()
                   
                 apodcast(data.results)
              }
              
                    
              function apodcast(data){
                let i=0
                
               let inter=setInterval(function(){
            
                document.getElementById("podcast").innerHTML=null
                 let h1=document.createElement("h1")
                 h1.innerText="podcast"
                    let img =document.createElement("img")
                    img.src=data[i].image_url
                    if(data[i].image_url==null){
                        img.src =`https://th.bing.com/th/id/OIP.Pvwf9JCK8RQBmFHGNbhZOAHaDj?w=327&h=167&c=7&r=0&o=5&pid=1.7`
                    }
                    let h3=document.createElement("h3")
                    let br=document.createElement("br")
                    let h=document.createElement("h3")
                    h.innerText=data[i].title
                    h3.innerText=data[i].description
                   document.getElementById("podcast").append(h1,img,h3,br,h)
                i++
                if(i===data.length){
                    i=0
                }
               },3000)
               } 






trend()  
           async function trend(){
                       let res=await fetch("https://newsdata.io/api/1/news?apikey=pub_838270f6e8e15ee38b2a02681cb67ee5515b&q=trending")
                        let data =await res.json()

                           appendtrend(data.results)
                     }


                     function appendtrend(data){
                       let i=0

                      let inter=setInterval(function(){

                       document.getElementById("trend").innerHTML=null
                        let h1=document.createElement("h1")
                        h1.innerText="trending"
                           let img =document.createElement("img")
                           img.src=data[i].image_url
                           if(data[i].image_url==null){
                               img.src =`https://th.bing.com/th/id/OIP.Pvwf9JCK8RQBmFHGNbhZOAHaDj?w=327&h=167&c=7&r=0&o=5&pid=1.7`
                           }
                           let h3=document.createElement("h3")
                           let br=document.createElement("br")
                           let h=document.createElement("h3")
                           h.innerText=data[i].title
                           h3.innerText=data[i].description
                          document.getElementById("trend").append(h1,img,h3,br,h)
                       i++
                       if(i===data.length){
                           i=0
                       }
                      },3000)
                      } 

                          



india()  
    async function india(){
                let res=await fetch("https://newsdata.io/api/1/news?apikey=pub_838270f6e8e15ee38b2a02681cb67ee5515b&q=india")
                 let data =await res.json()
                   
                    appendindia(data.results)
              }
              
                    
              function appendindia(data){
                let i=0
                
               let inter=setInterval(function(){
            
                document.getElementById("india").innerHTML=null
                 let h1=document.createElement("h1")
                 h1.innerText="india"
                    let img =document.createElement("img")
                    img.src=data[i].image_url
                    if(data[i].image_url==null){
                        img.src =`https://th.bing.com/th/id/OIP.Pvwf9JCK8RQBmFHGNbhZOAHaDj?w=327&h=167&c=7&r=0&o=5&pid=1.7`
                    }
                    let h3=document.createElement("h3")
                    let br=document.createElement("br")
                    let h=document.createElement("h3")
                    h.innerText=data[i].title
                    h3.innerText=data[i].description
                   document.getElementById("india").append(h1,img,h3,br,h)
                i++
                if(i===data.length){
                    i=0
                }
               },3000)
               }  
 
               




SCIENCE()  
               async function SCIENCE(){
                           let res=await fetch("https://newsdata.io/api/1/news?apikey=pub_838270f6e8e15ee38b2a02681cb67ee5515b&q=science")
                            let data =await res.json()
                              
                               appendSCIENCE(data.results)
                         }
                         
                               
                         function appendSCIENCE(data){
                           let i=0
                           
                          let inter=setInterval(function(){
                       
                           document.getElementById("SCIENCE").innerHTML=null
                            let h1=document.createElement("h1")
                            h1.innerText="SCIENCE"
                               let img =document.createElement("img")
                               img.src=data[i].image_url
                               if(data[i].image_url==null){
                                   img.src =`https://th.bing.com/th/id/OIP.Pvwf9JCK8RQBmFHGNbhZOAHaDj?w=327&h=167&c=7&r=0&o=5&pid=1.7`
                               }
                               let h3=document.createElement("h3")
                               let br=document.createElement("br")
                               let h=document.createElement("h3")
                               h.innerText=data[i].title
                               h3.innerText=data[i].description
                              document.getElementById("SCIENCE").append(h1,img,h3,br,h)
                           i++
                           if(i===data.length){
                               i=0
                           }
                          },3000)
                          } 
                          
                          



TECHNOLOGY()  
async function TECHNOLOGY(){
            let res=await fetch("https://newsdata.io/api/1/news?apikey=pub_838270f6e8e15ee38b2a02681cb67ee5515b&q=technology")
            let data =await res.json()
                
                appendTECHNOLOGY(data.results)
        }
        
                
        function appendTECHNOLOGY(data){
            let i=0
            
            let inter=setInterval(function(){
        
            document.getElementById("TECHNOLOGY").innerHTML=null
            let h1=document.createElement("h1")
            h1.innerText="TECHNOLOGY"
                let img =document.createElement("img")
                img.src=data[i].image_url
                if(data[i].image_url==null){
                    img.src =`https://th.bing.com/th/id/OIP.Pvwf9JCK8RQBmFHGNbhZOAHaDj?w=327&h=167&c=7&r=0&o=5&pid=1.7`
                }
                let h3=document.createElement("h3")
                let br=document.createElement("br")
                let h=document.createElement("h3")
                h.innerText=data[i].title
                h3.innerText=data[i].description
                document.getElementById("TECHNOLOGY").append(h1,img,h3,br,h)
            i++
            if(i===data.length){
                i=0
            }
            },3000)
            } 
            
            






PROGRAMME()  
async function PROGRAMME(){
            let res=await fetch("https://newsdata.io/api/1/news?apikey=pub_838270f6e8e15ee38b2a02681cb67ee5515b&q=programme")
            let data =await res.json()
            
                appendPROGRAMME(data.results)
        }
        
                
        function appendPROGRAMME(data){
            let i=0
            
        let inter=setInterval(function(){
        
            document.getElementById("PROGRAMME").innerHTML=null
            let h1=document.createElement("h1")
            h1.innerText="PROGRAMME"
                let img =document.createElement("img")
                img.src=data[i].image_url
                if(data[i].image_url==null){
                    img.src =`https://th.bing.com/th/id/OIP.Pvwf9JCK8RQBmFHGNbhZOAHaDj?w=327&h=167&c=7&r=0&o=5&pid=1.7`
                }
                let h3=document.createElement("h3")
                let br=document.createElement("br")
                let h=document.createElement("h3")
                h.innerText=data[i].title
                h3.innerText=data[i].description
            document.getElementById("PROGRAMME").append(h1,img,h3,br,h)
            i++
            if(i===data.length){
                i=0
            }
        },3000)
        } 
        
        











BUSINESS()  
async function BUSINESS(){
        let res=await fetch("https://newsdata.io/api/1/news?apikey=pub_838270f6e8e15ee38b2a02681cb67ee5515b&q=business")
            let data =await res.json()
            
            appendBUSINESS(data.results)
        }
        
            
        function appendBUSINESS(data){
        let i=0
        
        let inter=setInterval(function(){
    
        document.getElementById("BUSINESS").innerHTML=null
            let h1=document.createElement("h1")
            h1.innerText="BUSINESS"
            let img =document.createElement("img")
            img.src=data[i].image_url
            if(data[i].image_url==null){
                img.src =`https://th.bing.com/th/id/OIP.Pvwf9JCK8RQBmFHGNbhZOAHaDj?w=327&h=167&c=7&r=0&o=5&pid=1.7`
            }
            let h3=document.createElement("h3")
            let br=document.createElement("br")
            let h=document.createElement("h3")
            h.innerText=data[i].title
            h3.innerText=data[i].description
            document.getElementById("BUSINESS").append(h1,img,h3,br,h)
        i++
        if(i===data.length){
            i=0
        }
        },3000)
        } 

















TELEVISION()  
async function TELEVISION(){
            let res=await fetch("https://newsdata.io/api/1/news?apikey=pub_838270f6e8e15ee38b2a02681cb67ee5515b&q=television")
            let data =await res.json()
                
                appendTELEVISION(data.results)
            }
            
                
            function appendTELEVISION(data){
            let i=0
            
            let inter=setInterval(function(){
        
            document.getElementById("TELEVISION").innerHTML=null
            let h1=document.createElement("h1")
            h1.innerText="TELEVISION"
                let img =document.createElement("img")
                img.src=data[i].image_url
                if(data[i].image_url==null){
                    img.src =`https://th.bing.com/th/id/OIP.Pvwf9JCK8RQBmFHGNbhZOAHaDj?w=327&h=167&c=7&r=0&o=5&pid=1.7`
                }
                let h3=document.createElement("h3")
                let br=document.createElement("br")
                let h=document.createElement("h3")
                h.innerText=data[i].title
                h3.innerText=data[i].description
                document.getElementById("TELEVISION").append(h1,img,h3,br,h)
            i++
            if(i===data.length){
                i=0
            }
            },3000)
            } 
                    
                    










NEWSANALYSIS()  
async function NEWSANALYSIS(){
            let res=await fetch("https://newsdata.io/api/1/news?apikey=pub_838270f6e8e15ee38b2a02681cb67ee5515b&q=news")
            let data =await res.json()
                
                appendNEWSANALYSIS(data.results)
        }
        
                
        function appendNEWSANALYSIS(data){
            let i=0
            
            let inter=setInterval(function(){
        
            document.getElementById("NEWSANALYSIS").innerHTML=null
            let h1=document.createElement("h1")
            h1.innerText="NEWSANALYSIS"
                let img =document.createElement("img")
                img.src=data[i].image_url
                if(data[i].image_url==null){
                    img.src =`https://th.bing.com/th/id/OIP.Pvwf9JCK8RQBmFHGNbhZOAHaDj?w=327&h=167&c=7&r=0&o=5&pid=1.7`
                }
                let h3=document.createElement("h3")
                let br=document.createElement("br")
                let h=document.createElement("h3")
                h.innerText=data[i].title
                h3.innerText=data[i].description
                document.getElementById("NEWSANALYSIS").append(h1,img,h3,br,h)
            i++
            if(i===data.length){
                i=0
            }
            },3000)
            } 
            
                                                            










AUTO()  
    async function AUTO(){
                let res=await fetch("https://newsdata.io/api/1/news?apikey=pub_838270f6e8e15ee38b2a02681cb67ee5515b&q=auto")
                 let data =await res.json()
                   
                    appendAUTO(data.results)
              }
              
                    
              function appendAUTO(data){
                let i=0
                
               let inter=setInterval(function(){
            
                document.getElementById("AUTO").innerHTML=null
                 let h1=document.createElement("h1")
                 h1.innerText="AUTO"
                    let img =document.createElement("AUTO")
                    img.src=data[i].image_url
                    if(data[i].image_url==null){
                        img.src =`https://th.bing.com/th/id/OIP.Pvwf9JCK8RQBmFHGNbhZOAHaDj?w=327&h=167&c=7&r=0&o=5&pid=1.7`
                    }
                    let h3=document.createElement("h3")
                    let br=document.createElement("br")
                    let h=document.createElement("h3")
                    h.innerText=data[i].title
                    h3.innerText=data[i].description
                   document.getElementById("AUTO").append(h1,img,h3,br,h)
                i++
                if(i===data.length){
                    i=0
                }
               },3000)
               } 








EDUCATIONTODAY()  
async function EDUCATIONTODAY(){
            let res=await fetch("https://newsdata.io/api/1/news?apikey=pub_838270f6e8e15ee38b2a02681cb67ee5515b&q=education")
            let data =await res.json()
                
            EDUCATIONTODAYA(data.results)
            }
            
                
            function EDUCATIONTODAYA(data){
            let i=0
            
            let inter=setInterval(function(){
        
            document.getElementById("EDUCATIONTODAY").innerHTML=null
            let h1=document.createElement("h1")
            h1.innerText="EDUCATION TODAY"
                let img =document.createElement("img")
                img.src=data[i].image_url
                if(data[i].image_url==null){
                    img.src =`https://th.bing.com/th/id/OIP.Pvwf9JCK8RQBmFHGNbhZOAHaDj?w=327&h=167&c=7&r=0&o=5&pid=1.7`
                }
                let h3=document.createElement("h3")
                let br=document.createElement("br")
                let h=document.createElement("h3")
                h.innerText=data[i].title
                h3.innerText=data[i].description
                document.getElementById("EDUCATIONTODAY").append(h1,img,h3,br,h)
            i++
            if(i===data.length){
                i=0
            }
            },3000)
            } 
            
                          



CITIES()  
async function CITIES(){
            let res=await fetch("https://newsdata.io/api/1/news?apikey=pub_838270f6e8e15ee38b2a02681cb67ee5515b&q=cities")
            let data =await res.json()
                
                appendCITIES(data.results)
        }
        
                
        function appendCITIES(data){
            let i=0
            
            let inter=setInterval(function(){
        
            document.getElementById("CITIES").innerHTML=null
            let h1=document.createElement("h1")
            h1.innerText="CITIES"
                let img =document.createElement("img")
                img.src=data[i].image_url
                if(data[i].image_url==null){
                    img.src =`https://th.bing.com/th/id/OIP.Pvwf9JCK8RQBmFHGNbhZOAHaDj?w=327&h=167&c=7&r=0&o=5&pid=1.7`
                }
                let h3=document.createElement("h3")
                let br=document.createElement("br")
                let h=document.createElement("h3")
                h.innerText=data[i].title
                h3.innerText=data[i].description
                document.getElementById("CITIES").append(h1,img,h3,br,h)
            i++
            if(i===data.length){
                i=0
            }
            },3000)
            } 
            
            













HEALTH()  
async function HEALTH(){
    let res=await fetch("https://newsdata.io/api/1/news?apikey=pub_838270f6e8e15ee38b2a02681cb67ee5515b&q=health")
    let data =await res.json()
    
        appendHEALTH(data.results)
}

        
function appendHEALTH(data){
    let i=0
    
let inter=setInterval(function(){

    document.getElementById("HEALTH").innerHTML=null
    let h1=document.createElement("h1")
    h1.innerText="HEALTH"
        let img =document.createElement("img")
        img.src=data[i].image_url
        if(data[i].image_url==null){
            img.src =`https://th.bing.com/th/id/OIP.Pvwf9JCK8RQBmFHGNbhZOAHaDj?w=327&h=167&c=7&r=0&o=5&pid=1.7`
        }
        let h3=document.createElement("h3")
        let br=document.createElement("br")
        let h=document.createElement("h3")
        h.innerText=data[i].title
        h3.innerText=data[i].description
    document.getElementById("HEALTH").append(h1,img,h3,br,h)
    i++
    if(i===data.length){
        i=0
    }
},3000)
} 
            
            









WORLD()  
async function WORLD(){
    let res=await fetch("https://newsdata.io/api/1/news?apikey=pub_838270f6e8e15ee38b2a02681cb67ee5515b&q=world")
        let data =await res.json()
        
        appendsWORLD(data.results)
    }
    
        
    function appendsWORLD(data){
    let i=0
    
    let inter=setInterval(function(){

    document.getElementById("WORLD").innerHTML=null
        let h1=document.createElement("h1")
        h1.innerText="WORLD"
        let img =document.createElement("img")
        img.src=data[i].image_url
        if(data[i].image_url==null){
            img.src =`https://th.bing.com/th/id/OIP.Pvwf9JCK8RQBmFHGNbhZOAHaDj?w=327&h=167&c=7&r=0&o=5&pid=1.7`
        }
        let h3=document.createElement("h3")
        let br=document.createElement("br")
        let h=document.createElement("h3")
        h.innerText=data[i].title
        h3.innerText=data[i].description
        document.getElementById("WORLD").append(h1,img,h3,br,h)
    i++
    if(i===data.length){
        i=0
    }
    },3000)
    } 
    
    
















INDIATODAYINSIGHT()  
async function INDIATODAYINSIGHT(){
let res=await fetch("https://newsdata.io/api/1/news?apikey=pub_838270f6e8e15ee38b2a02681cb67ee5515b&q=insight")
let data =await res.json()
    
    appendINDIATODAYINSIGHT(data.results)
}

    
function appendINDIATODAYINSIGHT(data){
let i=0

let inter=setInterval(function(){

document.getElementById("INDIATODAYINSIGHT").innerHTML=null
let h1=document.createElement("h1")
h1.innerText="INDIA TODAY INSIGHT"
    let img =document.createElement("img")
    img.src=data[i].image_url
    if(data[i].image_url==null){
        img.src =`https://th.bing.com/th/id/OIP.Pvwf9JCK8RQBmFHGNbhZOAHaDj?w=327&h=167&c=7&r=0&o=5&pid=1.7`
    }
    let h3=document.createElement("h3")
    let br=document.createElement("br")
    let h=document.createElement("h3")
    h.innerText=data[i].title
    h3.innerText=data[i].description
    document.getElementById("INDIATODAYINSIGHT").append(h1,img,h3,br,h)
i++
if(i===data.length){
    i=0
}
},3000)
} 







LAW()  
async function LAW(){
            let res=await fetch("https://newsdata.io/api/1/news?apikey=pub_838270f6e8e15ee38b2a02681cb67ee5515b&q=law")
            let data =await res.json()
                
                appendLAW(data.results)
        }
        
                
        function appendLAW(data){
            let i=0
            
            let inter=setInterval(function(){
        
            document.getElementById("LAW").innerHTML=null
            let h1=document.createElement("h1")
            h1.innerText="LAW"
                let img =document.createElement("img")
                img.src=data[i].image_url
                if(data[i].image_url==null){
                    img.src =`https://th.bing.com/th/id/OIP.Pvwf9JCK8RQBmFHGNbhZOAHaDj?w=327&h=167&c=7&r=0&o=5&pid=1.7`
                }
                let h3=document.createElement("h3")
                let br=document.createElement("br")
                let h=document.createElement("h3")
                h.innerText=data[i].title
                h3.innerText=data[i].description
                document.getElementById("LAW").append(h1,img,h3,br,h)
            i++
            if(i===data.length){
                i=0
            }
            },3000)
            } 







CRIME()  
async function CRIME(){
        let res=await fetch("https://newsdata.io/api/1/news?apikey=pub_838270f6e8e15ee38b2a02681cb67ee5515b&q=crime")
        let data =await res.json()
        
            appendsCRIME(data.results)
    }
    
            
    function appendsCRIME(data){
        let i=0
        
    let inter=setInterval(function(){
    
        document.getElementById("CRIME").innerHTML=null
        let h1=document.createElement("h1")
        h1.innerText="CRIME"
            let img =document.createElement("img")
            img.src=data[i].image_url
            if(data[i].image_url==null){
                img.src =`https://th.bing.com/th/id/OIP.Pvwf9JCK8RQBmFHGNbhZOAHaDj?w=327&h=167&c=7&r=0&o=5&pid=1.7`
            }
            let h3=document.createElement("h3")
            let br=document.createElement("br")
            let h=document.createElement("h3")
            h.innerText=data[i].title
            h3.innerText=data[i].description
        document.getElementById("CRIME").append(h1,img,h3,br,h)
        i++
        if(i===data.length){
            i=0
        }
    },3000)
    } 
    
    










FACTCHECK()  
async function FACTCHECK(){
    let res=await fetch("https://newsdata.io/api/1/news?apikey=pub_838270f6e8e15ee38b2a02681cb67ee5515b&q=fact")
        let data =await res.json()
        
        appendFACTCHECK(data.results)
    }
    
        
    function appendFACTCHECK(data){
    let i=0
    
    let inter=setInterval(function(){

    document.getElementById("FACTCHECK").innerHTML=null
        let h1=document.createElement("h1")
        h1.innerText="FACT CHECK"
        let img =document.createElement("img")
        img.src=data[i].image_url
        if(data[i].image_url==null){
            img.src =`https://th.bing.com/th/id/OIP.Pvwf9JCK8RQBmFHGNbhZOAHaDj?w=327&h=167&c=7&r=0&o=5&pid=1.7`
        }
        let h3=document.createElement("h3")
        let br=document.createElement("br")
        let h=document.createElement("h3")
        h.innerText=data[i].title
        h3.innerText=data[i].description
        document.getElementById("FACTCHECK").append(h1,img,h3,br,h)
    i++
    if(i===data.length){
        i=0
    }
    },3000)
    }                                                                         