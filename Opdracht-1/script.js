const array = [ {
    "voornaam": "Piet",
    "achternaam": "Heijn",
    "nationaliteit": "Nederlandse",
    "leeftijd": 47,
    "gewicht": 86
} ]

function createTableHeaders()
{
    let table = document.getElementById( 'table' )

    table.innerHTML += '<tr id="headers">'
    for ( let i = 0; i < array.length; i++) {
        console.log( i )
        for (const [key, value] of Object.entries( array[i] )) 
        {
            let tr = document.getElementById( 'headers' )
            tr.innerHTML += '<th class="' + key + '-head">' + ( key[0].toUpperCase() + key.slice(1).toLowerCase() ) + '</th>'
        }
    }
    table.innerHTML += '</tr>'
}

function createTableElements() 
{
    let x = 0
    let table = document.getElementById( 'table' )
    for ( let i = 0; i < array.length; i++) {
        table.innerHTML += '<tr id="element'+ x +'">'
        for (const [key, value] of Object.entries( array[i] )) 
        {
            let tr = document.getElementById( 'element' + i ) 
            tr.innerHTML += '<td class="' + key + '">' + value + '</td>'
            x+=1
        }
        table.innerHTML += '</tr>'
    }
}

createTableHeaders()
createTableElements() 
