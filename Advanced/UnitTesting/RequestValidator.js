let a=({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
});

function validator(input) {

    const methodRegex = /^(GET|POST|DELETE|CONNECT)$/g;
    const uriRegex = /^[A-Za-z0-9.]+$|^\*$/g;
    const versionRegex = /HTTP\/0.9|HTTP\/1.0|HTTP\/1.1|HTTP\/2.0/g;
    const messageRegex = /^[^<>\\&'"]+$/g;

    let method=input.method

    if(!methodRegex.test(method)||method===undefined){
        throw new Error('Invalid request header: Invalid Method')
    }
    if(input.uri===undefined||!uriRegex.test(input.uri)){
        throw new Error('Invalid request header: Invalid URI')
    }
    if(!versionRegex.test(input.version)||input.version===undefined){
        throw new Error('Invalid request header: Invalid Version')
    }
    if(input.message===undefined||input.message!==''||!messageRegex.test(input.message)){
        throw new Error('Invalid request header: Invalid Message')
    }
    return input
}

console.log(validator(a));


