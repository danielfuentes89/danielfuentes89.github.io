//////////////////////////////////////////////////////////////////////////////
/////////////////////////////   MIDDLEWARES //////////////////////////////////
//const _async = (function () {
    const _async = (() => {
    
        //  Funcion Fetch global para request WS
        //  recibe: url de WS
        function returnFetch(url,data) {
            return fetch(url, {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })
        }
    
        //  funcion asincrona invoca funcion returnFetch (fetch)
        async function queryFetch(url,data) {
            const respuesta = await returnFetch(url,data)
            const json = await respuesta.json()
    
            if (respuesta.status !== 200)
                throw Error(respuesta.statusText);
    
            return json;
        }
    
        return {
            'queryFetch' : queryFetch
        }
    })();
    /////////////////////////////   MIDDLEWARES //////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////