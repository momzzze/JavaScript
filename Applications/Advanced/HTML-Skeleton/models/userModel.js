const userModel = function () {
    const login = function (username, password) {
        let authString = btoa(`${username}:${password}`)
        let headers = {
            Authorization: 'Basic ' + authString
        };

        let data = { username, password }
        let url = `user/${storage.appKey}/login`;
        return requester.post(url, data, headers);
    };

    const logout = function () {
        let url = `user/${storage.appKey}/_logout`;
        return requester.post(url);
    }


    const register = function (params) {
        let data={
           username: params.username,
           password: params.password,
           first_name:params.first_name,
           last_name:params.last_name
        }

        let authString=btoa(`${storage.appKey}:${storage.appSecret}`);

        let headers={
            Authorization:'Basic '+authString
        };

        let url='user/'+storage.appKey;

        return requester.post(url,data,headers)
    };

    return {
        login,
        logout,
        register
    };
}();