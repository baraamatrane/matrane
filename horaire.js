
// function getrequest(){
//     let request=new XMLHttpRequest();
//     request.open('GET','http://api.aladhan.com/v1/calendarByCity?Year=2023&Mouth=04&country=MA&city=Casablanca',true);
//     request.responseType='json'
//     request.send();
//     request.onload= ()=>{
//         if(request.status==200 && request.readyState==4){
//             let posts=request.response;
//             console.log(posts[0])
            // document.querySelector('.all').innerHTML=""
            // for(posts of posts){
            //     let content =`
            //     <div class="content" onclick="contenu(${posts.id})">
            //         <div id="text">
            //             <h2>${posts.login}</h2>
            //             <p >id: ${posts.id}</p>
            //         </div>
            //     </div>`
            //     document.querySelector('.all').innerHTML +=content;
            // }
//         }else{
//             alert('error')
//         }
//     }
    
    
// }
// getrequest()
let Cities=[
    "Casablanca","Makkah al Mukarramah","Al Madīnah al Munawwarah","Casablanca","Alger","Dubayy"
]
for(let city of Cities){
    document.querySelector('#country').innerHTML +=`
    <option >${city}</option>`
}
let params=[{
    City:"Makkah al Mukarramah",
    country1:"SA",
    City2:"Al Madīnah al Munawwarah"  
},
{
    City:"Casablanca",
    country1:"MA",
},
{
    City:"Alger",
    country1:"DZ",
},
{
    City:"Dubayy",
    country1:"AE",
}
]
function settimes(id,time){
    document.querySelector(id).textContent =time;
    console.log(time)
}

window.onload=function(){
    axios.get('http://api.aladhan.com/v1/calendarByCity?Year=2023&Mouth=04&country=DZ&city=Alger' ,{
        params:params

    })

    .then((response)=>{
            
            let date=response.data.data[0].date.gregorian.weekday.en +" "+response.data.data[0].date.readable+" "+response.data.data[0].date.hijri.weekday.ar +" "+response.data.data[0].date.hijri.day+" "+response.data.data[0].date.hijri.month.ar+" "+response.data.data[0].date.hijri.year+" ";
            
            document.querySelector('#date').textContent =date;
            var n=response.data.data[0].date.gregorian.month.number-1
            var m=response.data.data[0].date.gregorian.month.number-n;
            let timings=response.data.data[m].timings;
            let ssalawte=['Fajr','Sunrise','Dhuhr', 'Asr','Sunset','Isha'];
            

            // console.log( timings.ssalawte[1])
            // console.log(response.data.data[m].timings)
            for(var i=1;i<=ssalawte.length;i++){
                settimes('#taw1 span',timings.Fajr)
                settimes('#taw2 span',timings.Sunrise)
                settimes('#taw3 span',timings.Dhuhr)
                settimes('#taw4 span',timings.Asr)
                settimes('#taw5 span',timings.Sunset)
                settimes('#taw6 span',timings.Isha)
                // let sel=document.querySelector('#taw' + i+' span').className;
                // console.log(timings.sel)
                // document.querySelector('.'+ssalawte[i]).innerHTML =timings.sel;
                
            }
        
    })
    
}
