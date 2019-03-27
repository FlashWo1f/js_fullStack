    const osubmit = document.getElementById('submit')
    const info = docment.getElementById("info");
    osubmit.addEventListener("click",function(){
        const name=queryselect("name").value;
        const qq=queryselect("qq").value;
        const phone=queryselect("phone").value;
        const date=queryselect("date").value;
        let msg={
            "name":name
        }
        let tr = document.createElement("tr");
            info.appendChild(tr);

        for(let i in msg){
            let td = document.createElement("td");
            td.innerHTML=msg[i];
            tr.appendChild(td);
        }
    })