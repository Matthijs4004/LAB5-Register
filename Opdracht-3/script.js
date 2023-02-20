const array = [{
    "voornaam": "Piet",
    "achternaam": "Heijn",
    "nationaliteit": "Nederlandse",
    "leeftijd": 47,
    "gewicht": 86
},
{
    "voornaam": "Masud",
    "achternaam": "Mohammed",
    "nationaliteit": "Iraans",
    "leeftijd": 37,
    "gewicht": 79
},
{
    "voornaam": "Marie",
    "achternaam": "Visser",
    "nationaliteit": "Belgische",
    "leeftijd": 42,
    "gewicht": 69
},
{
    "voornaam": "Abdullah",
    "achternaam": "Öcalan",
    "nationaliteit": "Turks",
    "leeftijd": 73,
    "gewicht": 85
},
{
    "voornaam": "Bjorn",
    "achternaam": "Hakke",
    "nationaliteit": "Zweeds",
    "leeftijd": 18,
    "gewicht": 71
},
{
    "voornaam": "Jouke",
    "achternaam": "Dijkstra",
    "nationaliteit": "Fries",
    "leeftijd": 29,
    "gewicht": 82
},
{
    "voornaam": "Bo",
    "achternaam": "Wáng",
    "nationaliteit": "Chinees",
    "leeftijd": 38,
    "gewicht": 65
}]

function createTableHeaders()
{
    let table = document.getElementById( 'table' )

    table.innerHTML += '<tr id="headers">'
        for (const [key, value] of Object.entries( array[0] )) 
        {
            let tr = document.getElementById( 'headers' )
            tr.innerHTML += '<th class="' + key + '-head">' + ( key[0].toUpperCase() + key.slice(1).toLowerCase() ) + '</th>'
        }
    table.innerHTML += '</tr>'
}

function createTableElements( age ) 
{
    let tableString = ""
    for ( let i = 0; i < array.length; i++)
     {
        //console.log(array[ i ])
        if ( array[ i ][ 'leeftijd' ] > age ) {
            console.log(array[ i ])
            tableString += '<tr class="element">' 
            for ( const [key, value] of Object.entries( array[ i ] ) ) 
            {
                tableString += '<td>' + value +'</td>'
            }
            tableString += '</tr>'
        }
    }
    table.innerHTML += tableString
}

function inputHandler() 
{
    const deleteFields = document.querySelectorAll( '.element' )
    for ( const element of deleteFields ) {
        element.remove()
    }

    let inputField = document.getElementById( 'age' )
    if ( inputField.value != "" || inputField.value != 0 ) {
        createTableElements( parseInt( inputField.value ) )  
    } else {
        console.log( 't' )
    }
}

createTableHeaders()