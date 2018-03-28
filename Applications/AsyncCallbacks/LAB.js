/*
setTimeout(time1,1000)
setTimeout(time2,1500)
setTimeout(time3,500)

console.log('All task are started')

function time1() {console.log("task1 finished")}
function time2() {console.log("task2 finished")}
function time3() {console.log("task3 finished")}



console.log('before')
new Promise(function (resolve,reject) {
    setTimeout(function () {
        resolve('done')
    },1500)
}).then(function (result) {
    console.log(result)
})
console.log('after')


new Promise(function (resolve,reject) {
   setTimeout(function () {
       resolve('ss')
   },4000)
}).then(function (result) {
    console.log(result)
})
*/

//console.log('before')
/*
let p1=new Promise(function (resolve,reject) {
    console.log('task started')
    setTimeout(function () {
        resolve('task1 result')
        console.log('task1 finished')
    },1000)
});
let p2=new Promise(function (resolve,reject) {
    console.log('task started')
    setTimeout(function () {
        resolve('task2 result')
        console.log('task2 finished')
    },1500)
});
let p3=new Promise(function (resolve,reject) {
    console.log('task started')
    setTimeout(function () {
        resolve('task3 result')
        console.log('task3 finished')
    },500)
});
console.log('All tasks are started')
Promise.all([p1,p2,p3]).then(function (result) {
    console.log('All tasks finished')
    console.log('Result: '+result.join(', '))
}).catch(function (error) {
    console.log('Some of the tasks failed')
    console.log('Error: '+error)
})
console.log('after')
*/
/*
function attachEvents() {
    const URL=`https://baas.kinvey.com/appdata/kid_S1NypwL5f`
    const username='peter'
    const password='p'
    const base64auth=btoa(username+':'+password)
    const authHeaders={"Authorization":"Basic "+base64auth}
    let posts={}

    $('#btnLoadPosts').on('click',loadPosts)
    $('#btnViewPost').on('click',loadComents)

    function loadPosts() {
        $.ajax({
            url:`${URL}/posts`,
            headers: authHeaders,
        }).then(function (res) {
            $('#posts').empty()
            for (let post of res) {
                $('#posts').append($(`<option value="${post._id}">${post.title}</option>`))
                posts[post._id]=post.body
            }
        }).catch(function (err) {
            console.log(err)
        })
    }
    function loadComents() {
        let postId = $('#posts').val()
        let postTitle=$('#posts').find('option:selected').text()
        $('#post-title').text(postTitle)
        $('#post-body').text(posts[postId])
        $.ajax({
            url: URL + `/comments/?query={"post_id":"${postId}"}`,
            headers:authHeaders
        }).then(function (res) {
            $('#post-comments').empty()

            for (let comment of res) {
                $('#post-comments').append(
                    $(`<li>${comment.text}</li>`)
                )
            }
        }).catch(function (err) {
            console.log(err)
        })
    }

}
*/
console.log('start')
async function test() {
     new Promise(function (resolve,reject)
    {
        setTimeout(function () {
            resolve('1')
        }, 1000)
    }).then(function (res) {
        console.log(res)
    })
     new Promise(function (resolve,reject)
    {
        setTimeout(function () {
            resolve('2')
        }, 500)
    }).then(function (res) {
        console.log(res)
    })
     new Promise(function (resolve,reject)
    {
        setTimeout(function () {
            resolve('3')
        }, 100)
    }).then(function (res) {
        console.log(res)
    })
}
test().then(function (result) {
    console.log(result)
})
console.log('end')