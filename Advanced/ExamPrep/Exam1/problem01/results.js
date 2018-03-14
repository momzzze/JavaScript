function move(command) {
    let aTownsList=$('#available-towns')
    let sTownsList=$('#selected-towns')
    let outputDiv=$('#output');
    if(command==='right'){
        let selected=aTownsList.find(':selected')
        sTownsList.append(selected)
    }else if(command==='left'){
        let selected=sTownsList.find(':selected')
        aTownsList.append(selected)
    }else if(command==="print"){
        outputDiv.empty()
        let allTowns=sTownsList.find('option').toArray().map(el=>$(el).text()).join('; ')
        outputDiv.append(allTowns)
    }
}