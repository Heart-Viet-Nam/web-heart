const domain = window.location.origin
const checkOutRuby = document.getElementById('ruby')
const checkOutSapphire = document.getElementById('sapphire')
const checkOutDiamond = document.getElementById('diamond')

if(checkOutRuby) {
    checkOutRuby.addEventListener("click", function() {
    
        fetch(`${domain}/checkout-payment`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                items: [
                { id: 1, quantity: 1 }
                ],
            }),
            })
            .then(res => {
                if (res.ok) return res.json()
                return res.json().then(json => Promise.reject(json))
            })
            .then(({ url }) => {
                window.location = url
            })
            .catch(e => {
                console.error(e.error)
            })
    
    })
}
   
if(checkOutSapphire) {
    checkOutSapphire.addEventListener("click", function() {
    
        fetch(`${domain}/checkout-payment`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                items: [
                    { id: 2, quantity: 1 }
                ],
            }),
            })
            .then(res => {
                if (res.ok) return res.json()
                return res.json().then(json => Promise.reject(json))
            })
            .then(({ url }) => {
                window.location = url
            })
            .catch(e => {
                console.error(e.error)
            })
    
    })
}

if(checkOutDiamond) {
    checkOutDiamond.addEventListener("click", function() {
    
        fetch(`${domain}/checkout-payment`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                items: [
                { id: 3, quantity: 1 }
                ],
            }),
            })
            .then(res => {
                if (res.ok) return res.json()
                return res.json().then(json => Promise.reject(json))
            })
            .then(({ url }) => {
                window.location = url
            })
            .catch(e => {
                console.error(e.error)
            })
    })
}
