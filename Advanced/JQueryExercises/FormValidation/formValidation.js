function validate() {
    let username=$('#username');
    let email=$('#email');
    let password=$('#password');
    let confirmPassword=$('#confirm-password');
    let companyCheckbox=$('#company');
    let companyNumber=$('#companyNumber');
    let companyInfo=$('#companyInfo');
    let submitBtn=$('#submit');
    let validDiv=$('#valid');

    let isValid=true;

    companyCheckbox.on('change',function () {
        if(companyCheckbox.is(':checked')){
            companyInfo.css('display','block');
        }else{
            companyInfo.css('display','none');
        }
    });

    submitBtn.on('click',function (ev) {
        ev.preventDefault();
        validateForm();

        if(isValid){
            validDiv.css('display','block')
        }else{
            validDiv.css('display','none')
        }
    })

    function validateForm() {
        isValid=true;
        if(companyCheckbox.is(':checked')){
            validateCompanyNumber();
        }
        validateWithRegex(username,/^[A-Za-z0-9]{3,20}$/g);
        validateWithRegex(email,/^.*?@.*?\..*$/g);
        if(password.val()===confirmPassword.val()){
            validateWithRegex(password,/^\w{5,15}$/g);
            validateWithRegex(confirmPassword,/^\w{5,15}$/g);
        }else{
            password.css('border','solid red');
            confirmPassword.css('border','solid red');
            isValid=false;
        }
    }
    function validateCompanyNumber() {
        let numVal=+companyNumber.val();
        if(numVal>=1000&&numVal<=9999){
            companyNumber.css('border','none')
        }else{
            companyNumber.css('border','solid red')
            isValid=false;
        }
    }

    function validateWithRegex(input,pattern) {
        if(pattern.test(input.val())){
            input.css('border','none')
        }else{
            input.css('border','solid red')
            isValid=false;
        }
    }
}
