const poemsArray = []
const poetryBox = document.querySelector('#poetry-box')
async function fetchPoems(){
    const response = await fetch('https://kaviai.onrender.com/')
    const json_response = await response.json()
    return json_response
}

fetchPoems().then(data=>{
    htmlContent = ''
    data.forEach(element => {
        poemsArray.push(`
        <div class="mx-2 bg-[#ECE8DC] p-12 rounded-2xl shadow-md flex flex-col gap-4">
            <pre class="text-md text-gray-700 whitespace-pre-wrap break-words">${element.kavitaText}</pre>
            <p class="text-md text-gray-700">-Gumnam Aashiq</p>
        </div>
        `)
    });
    poemsArray.reverse()
    poemsArray.forEach(item=>{
        htmlContent+=item
    })
    poetryBox.innerHTML = htmlContent;
})


