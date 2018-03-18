function attachEvents() {
    $('#btnDelete').click(()=>{
        $('#towns').find('option:selected').remove()
    });

    $('#btnAdd').click(()=>{
        let input=$('#newItem');
        let value=input.val();
        if(value.length === 0) return;
        let option=$(`<option>${value}</option>`);
        $('#towns').append(option);
        input.val('');
    });
}