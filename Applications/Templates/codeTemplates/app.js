$(() => {
    let details
    let data
    async function loadFiles() {
        let contacts= await $.get('templates/contacts.html')
        let contactTemplate=Handlebars.compile(contacts)
        details= await $.get('templates/details.html')
        data= await $.get('data.json')
        let obj={
            contacts:data
        }
        let table1=contactTemplate(obj)
        $('#list').append(table1)
        attachEvents()
    }
    loadFiles()
    function attachEvents() {
        $('.contact').on('click',function () {
            loadDetails($(this).attr('data-id'))
            $('.active').removeClass('active')
            $(this).addClass('active')
        })
    }
    function loadDetails(index) {
        let detailTemplate=Handlebars.compile(details)
        let html=detailTemplate(data[index])
        $('#details').empty()
        $('#details').append(html)
    }
})