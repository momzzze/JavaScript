'use strict';

function solve(arr) {
    let result = {}
    for (let obj of arr) {
        let system = obj['system']
        let candidate = obj['candidate']
        let votes = obj['votes']
        
        if (result.hasOwnProperty(system)) {
            if (result[system].hasOwnProperty(candidate)) {
                result[system][candidate]+=votes
            } else {
                result[system][candidate] = votes
            }
        } else {
            result[system] = {}
            result[system]= candidate
            result[system] = votes
        }
    }
    console.log(result)
    for (let key in result) {
        let winner = Object.keys(result[key]).sort((a, b) => result[key][b] - a)[0]
        let sum=0
        for (let innerKey in result[key]) {
            sum += result[key][innerKey]
        }
        result[key] = {}
        result[key]['candidate'] = winner
        result[key]['votes'] = sum
    }
    let players = {}
    for (let key in result) {
        if (players.hasOwnProperty(result[key]['candidate'])) {
            players[result][key]['candidate']+=result[key]['votes']
        } else {
            players[result][key]['candidate']= result[key]['votes']
        }
    }
    let sortedPlayers = Object.keys(players).sort((a,b)=>players[b]-players[a])
    console.log(sortedPlayers)
}
let arr = [{ system: 'Theta', candidate: 'Kim Jong Andromeda', votes: 10 }, { system: 'Tau', candidate: 'Kim Jong Andromeda', votes: 200 }, { system: 'Tau', candidate: 'Flying Shrimp', votes: 150 }]
solve(arr)