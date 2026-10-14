const postMethod = async (url, data)=>{
    try{
        const response = await fetch(url,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })

        if(!response.ok){
            throw new Error("HIba: ", response.status)
        }
        return await response.json();
    }
    catch(error){
        console.error("Hiba: ",error.message);
    }
}


document.addEventListener("DOMContentLoaded", async ()=>{
    document.getElementById("bevitelGomb").addEventListener("click", async ()=>{
        const input = document.getElementById("bevitel")
        const adat = input.value
        const result = document.getElementById("result")
        try{
            const response = await postMethod("/api/saveData", {
                "value": adat
            })

            console.log(response)
            
            result.innerText = adat;
            setTimeout(()=>{
                console.log("Sikeres mentés!")
                result.innerText = ""
                input.value = ""

            }, 2000)

            
            


        }
        catch(error){
            console.error("Hiba: ", error);
        }
    })
})