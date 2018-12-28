const storage = function () {
    const appKey = 'kid_BkBU1V4kE';
    const appSecret='9a42b8cb65ed4dbeb8afddd16318f888';

    const saveData = function (key, value) {
        localStorage.setItem(appKey + key, JSON.stringify(value));
    };

    const getData = function (key) {
        return JSON.parse(localStorage.getItem(appKey + key));
    };

    const deleteData = function (key){
        localStorage.removeItem(appKey+key);
    };
    const saveUser=function(data){
        storage.saveData('userInfo', {
            id: data._id,
            username: data.username,
            firstName: data.first_name,
            lastName: data.last_name
        });
        storage.saveData('authToken', data._kmd.authtoken);
    };

    const deleteUser=function(){
        storage.deleteData('authToken');
        storage.deleteData('userInfo');
    };

    return {
        saveData,
        getData,
        deleteData,
        appKey,
        appSecret,
        saveUser,
    };
}();