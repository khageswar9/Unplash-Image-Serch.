async function callapi(url){
    try {
     var res = await fetch(url);
     var data = await res.json();
     return data;
    } catch (error) {
        console.log(error)
    }
 }
 function appendData(data,parent){
     data.map((obj)=>{
         var div = document.createElement("div");
         div.className="image";
         var img = document.createElement("img");
         img.src = obj.urls.regular;
         var des = document.createElement("p");
         des.textContent = obj.user.name;
 
         div.append(img,des);
         parent.append(div);
 
     });
 
 }
 export {callapi,appendData};