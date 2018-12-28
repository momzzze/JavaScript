function increment(selector) {
    let container = $(selector);
    let fragment = document.createDocumentFragment();
    let textArea = $('<textarea>')
    let incrementBtn = $('<button>Increment</button>')
    let addBtn = $('<button>Add</button>')
    let list = $('<ul>')

    textArea.val(0)
    textArea.addClass('counter')
    textArea.attr('disabled', true)

    incrementBtn.addClass('btn')
    incrementBtn.attr('id', 'incrementBtn')
    addBtn.addClass('btn');
    addBtn.attr('id', 'addbtn')

    list.addClass('results')

    $(incrementBtn).on('click', function () {
        textArea.val(+textArea.val() + 1)
    })

    $(addBtn).on('click', function () {
        let li = $(`<li>${textArea.val()}</li>`)
        li.appendTo(list)
    })

    textArea.appendTo(fragment)
    incrementBtn.appendTo(fragment)
    addBtn.appendTo(fragment)
    list.appendTo(fragment)
    container.append(fragment)
}


function timer() {

    let hours = $('#hours')
    let minutes = $('#minutes')
    let seconds = $('#seconds')

    let interval = null;
    let sec = 0;

    let start = $('#start-timer')
    let stop = $('#stop-timer')

    start.on('click', funcStart)

    stop.on('click', funcStop)

    function funcStart() {
        if (interval === null) {
            interval = setInterval(increment, 1000)
        }
        function increment() {
            sec++;
            hours.text(('0' + Math.floor(sec / 60 / 60)).slice(-2))
            minutes.text(('0' + Math.floor(sec / 60) % 60).slice(-2))
            seconds.text(('0' + Math.floor(sec) % 60).slice(-2))
        }
    }
    function funcStop() {
        clearInterval(interval)
        interval = null
    }
}

function createBook(selector, title, author, isbn) {
    let id = 1
    let bookSelector = $('<div>')
    let container = $(selector)
    bookSelector.attr('id', `book${id}`)
    bookSelector.css('border', 'none')

    $(`<p class="title">${title}</p>`).appendTo(bookSelector)
    $(`<p class="author">${author}</p>`).appendTo(bookSelector)
    $(`<p class="isbn">${isbn}</p>`).appendTo(bookSelector)

    let selectBtn = $('<button>Select</button>')
    let deSelectBtn = $('<button>Deselect</button>')

    selectBtn.on('click', function () {
        bookSelector.css("border", "2px solid blue")
    })
    deSelectBtn.on("click", function () {
        bookSelector.css("border", "none")
    })
    selectBtn.appendTo(bookSelector)
    deSelectBtn.appendTo(bookSelector)

    bookSelector.appendTo(container)
    id++
}
