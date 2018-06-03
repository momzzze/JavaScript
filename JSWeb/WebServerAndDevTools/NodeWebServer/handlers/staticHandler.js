const fs=require('fs');

const allowedStaticFilesData={
    '.html':'text/html',
    '.js':'application/javascript',
    '.css':'text/css',
    '.png':'image/png',
    '.jpg':'image/jpeg'
};

module.exports=(req,res)=>{
    let pathname=req.urlData.pathname;
    let isGetRequest=req.method==="GET";
    let isPublicFile=pathname.startsWith('/public/');
    let isAllowedFileType=Object.keys(allowedStaticFilesData).map(k=>pathname.endsWith(k)).reduce((prev,current)=>prev||current,false);

    if (pathname=='/favicon.ico'&& isGetRequest) {
        res.staticFile(`/public/images/favicon.ico`,'image/x-icon');
    } else if (isGetRequest && isPublicFile && isAllowedFileType){
        res.staticFile(pathname,getContentType(pathname));
    } else {
        return true;
    }
};

function getContentType(pathName){
    return Object.keys(allowedStaticFilesData)
    .filter(k=>pathName.endsWith(k))
    .map(k=>allowedStaticFilesData[k])[0];
}