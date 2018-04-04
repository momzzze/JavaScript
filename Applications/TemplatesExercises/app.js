function attachEvents() {
    $('#btnLoadTowns').on('click',renderTowns)

    function renderTowns() {
       let towns=$('#towns').val().split(',')
            .map(e => ({
                town: e.trim()
            }))
            .filter(e=>e.town !== '')
        loadTowns(towns)
    }
    async function loadTowns(towns) {
        let source=await $.get('./town-template.hbs')
        let compiled=Handlebars.compile(source)
        let template=compiled({
            towns
        })
        $('#root').html(template)
    }
}
