let remote=(()=>{

    const BASE_URL='https://baas.kinvey.com'
    const APP_KEY='kid_BkvclwwiG'
    const APP_SECRET='5136e13a6c0d4f17ae1bbd26759e027a'

    function makeAuth(auth) {
        if(auth==='basic'){
            return `Basic ${btoa(APP_KEY + ':' + APP_SECRET)}`
        }else{
            return `Kinvey ${localStorage.getItem('authtoken')}`
        }
    }

    function makeRequest(method,module,endpoint,auth) {
           return{
               method:  method,
               url: BASE_URL+module+'/'+APP_KEY+'/'+endpoint,
               headers:{
                   'Authorization': makeAuth(auth)
               }
           }
    }



    function get(method,module,endpoint,auth) {
        return $.ajax(makeRequest('GET',module,endpoint,auth))
    }

    function post(method,module,endpoint,auth,data) {
        let obj=makeRequest('POST',module,endpoint,auth)
        if(data){
            obj.data= data
        }

        return $.ajax(obj)
    }
    
    function update(method,module,endpoint,auth,data) {
        let obj=makeRequest('PUT',module,endpoint,auth)
        obj.data= data
        return $.ajax(obj)
    }

    function remove(module,endpoint,auth) {
        return $.ajax(makeRequest('DELETE',module,endpoint,auth))
    }

    return {
        get,
        post,
        update,
        remove
    }
})