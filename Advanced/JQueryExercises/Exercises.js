function increment(selector) {
   let container=$(selector)
    let fragment=document.createDocumentFragment()
    let textArea=$('<textarea>')
    let incrementBtn=$('<button>Increment</button>')
    let addBtn=$('<button>Add</button>')
    let list=$('<ul>')

    textArea.val(0);
    textArea.addClass('counter')
    textArea.attr('disabled',true)

    incrementBtn.addClass('btn')
    incrementBtn.attr('id','incrementBtn')
    addBtn.addClass('btn')
    addBtn.attr('id','addBtn')
    list.addClass('results')
    $(incrementBtn).on('click',function () {
        textArea.val(+textArea.val()+1)
    })
    $(addBtn).on('click',function () {
        let li=$(`<li>${textArea.val()}</li>`)
        li.appendTo(list)
    })

    textArea.appendTo(fragment)
    incrementBtn.appendTo(fragment)
    addBtn.appendTo(fragment)
    list.appendTo(fragment)
    container.append(fragment)

}


function timer() {
    let hours=$('#hours')

    let minutes=$('#minutes')

    let seconds=$('#seconds')

    let interval=null

    let startTimer=$('#start-timer')


    startTimer.on('click',function () {
        if(interval){
            clearInterval(interval)
        }

         interval=setInterval(updateTime,1000)

    })

    $('#stop-timer').on('click',function () {
        if(interval){
            clearInterval(interval)
        }
        interval=null
    })

    function updateTime() {
        let secondsVal=seconds.text()
        let minutesVal=minutes.text()
        let hoursVal=hours.text()

        seconds.text(`0${(+secondsVal+1)}`.slice(-2))

        if(secondsVal>=59){

            seconds.text('00')
            minutes.text(`0${(+minutesVal+1)}`.slice(-2))

            if(minutesVal>=59){

                minutes.text('00');

                hours.text(`0${(+hoursVal+1)}`.slice(-2))
            }
        }
    }
}


function wikiParser(selector) {

    let element=$(selector);

    let h3Pattern=/===(.+?)===/g;
    let h2Pattern=/==(.+?)==/g;
    let h1Pattern=/=(.+?)=/g;
    let anchorPattern=/\[\[([^\[\]]+?)\|(.+?)\]\]/g;
    let singleAnchorPattern=/\[\[([^\[\]]+?)\]\]/g
    let boldPattern=/'''(.+?)'''/g;
    let italicPattern=/''(.+?)''/g;
    let text=element.text()

    text = text
        .replace(h3Pattern,(m,group)=>`<h3>${group}</h3>`)
        .replace(h2Pattern,(m,group)=>`<h2>${group}</h2>`)
        .replace(h1Pattern,(m,group)=>`<h1>${group}</h1>`)
        .replace(anchorPattern, (m,group1,group2)=>
            `<a href='/wiki/${group1}'>${group2}</a>`
        )
        .replace(singleAnchorPattern, (m,group)=>
            `<a href='/wiki/${group}'>${group}</a>`
        )
        .replace(boldPattern,(m,group)=>`<b>${group}</b>`)
        .replace(italicPattern,(m,group)=>`<i>${group}</i>`)
    element.html(text);
}



function createBook() {
    // TODO
}
