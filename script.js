var arr = [
    {name:"mobile", category:"electronic", price:12500},
    {name:"laptop", category:"electronic", price:125500},
    {name:"lapistic", category:"cosmetics", price:500},
    {name:"facewash", category:"cosmetics", price:900},
    {name:"cake", category:"food", price:200},
    {name:"cola", category:"coldrink", price:300},
    {name:"panipuri", category:"food", price:100},
    {name:"tv", category:"esstiontial", price:100000},
]

// var select = document.querySelector("#selecttag")
// var search = document.querySelector("#search")
// var arr2 = [...new Set(arr.map(e =>e.category))]
// function showCategory(){
//   var clutter = `<option value="all">all</option>`
//    arr2.forEach((e)=> {
//             clutter+=`<option value="${e}">${e}</option>`
//    })

//     select.innerHTML = clutter
// }


// function creatProds(recived){
//       var clutter =""
//       recived.forEach((e) =>{
//           clutter +=`<div class="min-h-[30vh] w-[13vw] text-center  bg-zinc-400/30  rounded-lg  p-2 capitalize ">
//           <h3 class="text-xl">${e.name}</h3>
//           <h2 class="text-lg ">${e.category}</h2>
//           <h5 class="text-lg ">${e.price}$</h5>
//           <p class="leading-none text-l">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellendus nisi facere labore laudantium animi corrupti veniam et optio.</p>
//           <button class="bg-blue-700 px-5 text-xl mt-5 capitalize rounded-lg">add</button>
//      </div>`
//       })
  
//       document.querySelector(".prods").innerHTML = clutter
  
// }
// showCategory()
// creatProds(arr)

// select.addEventListener("change", function(){  
//  var selectedprods = arr.filter(e => e.category === select.value) 

//   if(select.value == "all"){
//     creatProds(arr)
//   }
//   else{
//     creatProds(selectedprods)
//   }
   
// })

// search.addEventListener("input", function(){
//  var searched = arr.filter(e => e.name.startsWith(search.value) && select.value === e.category)
 
// select.value =="all" ? searched = arr.filter(e => e.name.startsWith(search.value)):creatProds(searched) 
// creatProds(searched) 
// })


var select = document.querySelector("#selecttag")
var products = document.querySelector(".prods")

function categary(){
  var clutter =`<option value="all">all</option>`
  var arr2 = [...new Set(arr.map(e => e.category))]
  arr2.forEach(e =>{
     clutter +=`<option value="${e}">${e}</option>`
  })

  select.innerHTML = clutter
}

function makeproducts(val){
  var clutter =""
    val.forEach(e =>{
          clutter +=`  <div class="min-h-[30vh] w-[13vw] text-center  bg-zinc-400/30  rounded-lg  p-2 capitalize ">
          <h3 class="text-xl">${e.name}</h3>
          <h2 class="text-lg ">${e.category}</h2>
          <h5 class="text-lg ">${e.price}$</h5>
          <p class="leading-none text-l">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellendus nisi facere labore laudantium animi corrupti veniam et optio.</p>
          <button class="bg-blue-700 px-5 text-xl mt-5 capitalize rounded-lg">add</button>
    </div>`
    })

    products.innerHTML = clutter
}

function filterprod(){
   select.addEventListener("change", function(){
     var arr2 = arr.filter( e => select.value === e.category) 
     select.value === "all" ? makeproducts(arr): makeproducts(arr2)
      
   })
    
}

function searchprodcuts(){
  var search = document.querySelector("#search")
   search.addEventListener("input", function(){
      var searched = arr.filter( e => e.name.startsWith(search.value))
      select.value === "all" ? makeproducts(searched) : searched = arr.filter(e => select.value === e.category && e.name.startsWith(search.value))
      makeproducts(searched)
   })
}




categary()
makeproducts(arr)
filterprod()
searchprodcuts()


















































// var ans = arr.map(e => e.category)
// var ans = [...new Set(ans)]

// var select = document.querySelector("#selecttag")




// function createSelction(){
//     var clutter = `<option value ="all">all</option>`
//     ans.forEach((e) =>{
//      clutter +=` <option value="${e}">${e}</option>`
//     })

//     select.innerHTML = clutter
// }


// function creatProds(recived){
//     var clutter =""
//     recived.forEach((e) =>{
//         clutter +=`<div class="min-h-[30vh] w-[13vw] text-center  bg-zinc-400/30  rounded-lg  p-2 capitalize ">
//         <h3 class="text-xl">${e.name}</h3>
//         <h2 class="text-lg ">${e.category}</h2>
//         <h5 class="text-lg ">${e.price}$</h5>
//         <p class="leading-none text-l">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellendus nisi facere labore laudantium animi corrupti veniam et optio.</p>
//         <button class="bg-blue-700 px-5 text-xl mt-5 capitalize rounded-lg">add</button>
//    </div>`
//     })

//     document.querySelector(".prods").innerHTML = clutter

// }

// creatProds(arr)
// createSelction()



// select.addEventListener("change", function(dets){
//   var selctedvalue = "all"
//   selctedvalue = dets.target.value


//   var arr2 = arr.filter(e => e.category === selctedvalue)
//   creatProds(arr2)
//   var search = document.querySelector("#search")

  

//   var pro2 = search.addEventListener("input", function(){ 
//     var searched = arr.filter(e =>  e.category ===  selctedvalue && e.name.toLowerCase().startsWith(search.value.toLowerCase()))
//     creatProds(searched)
   
//     if(selctedvalue == "all" ){
//     var allprod =  arr.filter(e=> e.name.toLowerCase().startsWith(search.value.toLowerCase()))
//     creatProds(allprod)
//     }
//   })

  
//    search.addEventListener("input", function(){ 
//     var all = arr.filter(e => selctedvalue === "all" && e.name.toLowerCase().startsWith(search.value.toLowerCase()))
//     creatProds(all)
//   })

// })







