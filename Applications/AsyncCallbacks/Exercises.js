function attachEvents() {
    const appKey='kid_r1uxawt9z'
    const username='Guest'
    const password='1'
    const base64auth=btoa(username+':'+password)
    const authHeaders={
        'Content-type':'application/json',
        "Authorization":"Basic "+base64auth
    }
    const baseUrl=`https://baas.kinvey.com/appdata/${appKey}/FisherGame`

    $('.load').on('click',loadCatches)
    $('.add').on('click',addCatch)
    function addCatch() {
        let catchObj=getAllFieldValues('#addForm')

        $.ajax({
            method:'POST',
            url:baseUrl,
            data:JSON.stringify(catchObj),
            headers: authHeaders,
            success:loadCatches
        })
    }


    function loadCatches() {
        $.ajax({
            method:'GET',
            url:baseUrl,
            headers: authHeaders,
            success: handleSuccess
        })
        function handleSuccess(catches) {
            let allCatches = $(`<div id="catches">`)
            for (const catchObj of catches) {

                allCatches
                    .append(
                        $(`<div class="catch">`).attr('data-id', catchObj._id)
                            .append($(`<label>Angler</label>`))
                            .append($(`<input type="text" class="angler" value="${catchObj.angler}"/>`))
                            .append($(`<label>Weight</label>`))
                            .append($(`<input type="number" class="weight" value="${catchObj.weight}"/>`))
                            .append($(`<label>Species</label>`))
                            .append($(`<input type="text" class="species" value="${catchObj.species}"/>`))
                            .append($(`<label>Location</label>`))
                            .append($(`<input type="text" class="location" value="${catchObj.location}"/>`))
                            .append($(`<label>Bait</label>`))
                            .append($(`<input type="text" class="bait" value="${catchObj.bait}"/>`))
                            .append($(`<label>Capture Time</label>`))
                            .append($(`<input type="number" class="captureTime" value="${catchObj.captureTime}" />`))
                            .append($(`<button class="update">Update</button>`).on('click', updateCatch.bind(catchObj)))
                            .append($(`<button class="delete">Delete</button>`).on('click', deleteCatch.bind(catchObj)))
                    )
            }
            $('#main').empty()
            $('#main').append(allCatches)
        }
    }

    function updateCatch(ev) {
        let catchObj=getAllFieldValues(ev.target);
        $.ajax({
            method: "PUT",
            url: baseUrl + '/' + this._id,
            data:JSON.stringify(catchObj),
            headers: authHeaders,
            success: loadCatches
        })
    }
    function deleteCatch(ev) {
        $.ajax({
            method: "DELETE",
            url: baseUrl + '/' + this._id,
            headers: authHeaders,
            success: handleDelete.bind(ev)
        })
        function handleDelete() {
            $(this.target).parent().remove()
        }
    }

    function getAllFieldValues(selector) {
        let catchObj={}
        $(selector).parent().find('input').each((index,e)=>{
            if(e.type==='text'){
                catchObj[e.className]=e.value
            }else{
                catchObj[e.className]=Number(e.value)
            }
        })
        return catchObj
    }

}