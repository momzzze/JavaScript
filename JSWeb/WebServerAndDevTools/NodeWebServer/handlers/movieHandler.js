const qs=require('querystring');
const movies=require('../config/dataBase');
const moviePlaceholder='{{replace-me}}';

const movieTemplate=`
<div class="movie">
                <img class="moviePoster" src=${moviePlaceholder}/>
</div>
`;

const errorTemplate=`
<div id="errorBox"><h2 id="errMsg">Please fill all fields</h2></div>
`;

const successTemplate=`
<div id="succssesBox"><h2 id="succssesMsg">Movie Added</h2></div>
`;

const movieDetailsTemplate=`
<div id="replaceMe">{{replaceMe}}</div> 

    <img src="{{placeholder}}" alt=""/>
    
</div>​

`;

module.exports=(req,res)=>{
    let pathname=req.urlData.pathname;
    if(pathname==='/movies/all'&&req.method==="GET"){
        moviesHtml=movies
        .map(m=>movieTemplate.replace(moviePlaceholder,decodeURIComponent(m.moviePoster))).join('');

         res.view('/views/viewAll.html',moviesHtml);     
    }else if(pathname ==='/movies/add' && req.method === "GET"){
        res.view('views/addMovie.html');    
    }else if(pathname === "/movies/add" && req.method === "POST"){
        let body=[];
        req.on('data',(chunk)=>{
            body.push(chunk);
        }).on('end',()=>{
            body=Buffer.concat(body).toString();


            let movieData=qs.parse(body);
            if(!movieData.moviePoster||!movieData.movieTitle){
                res.view('views/addMovie.html',errorTemplate);
                return;    
            }
         

            movies.push(movieData);
            res.view('views/addMovie.html',successTemplate);
        });
        
       
    }else if(pathname.startsWith(`/movies/details/`) && req.method === "GET"){
        let index=pathname.substr(pathname.lastIndexOf('/')+1);
        movie=movies[index];
        let movieHtml=movieDetailsTemplate.replace('{{placeholder}}',decodeURIComponent(movie.moviePoster));
        res.view('views/details.html',movieHtml);
    }
     else{
        return true;
    }
};