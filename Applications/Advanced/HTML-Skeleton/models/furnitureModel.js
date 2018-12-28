const furnitureModel = function () {
    const create = function (params) {
        let data = {
            make: params.make,
            model: params.model,
            year: params.year,
            description: params.description,
            price: params.price,
            image: params.image,
            material: params.material
        };

        let url = `appdata/${storage.appKey}/furniture`;

        return requester.post(url, data);
    };
    return {
        create
    }
}();