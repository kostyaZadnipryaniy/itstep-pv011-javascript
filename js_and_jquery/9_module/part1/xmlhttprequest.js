// XMLHttpRequest examples

const xml = new XMLHttpRequest()

xml.open('GET', 'persons.json', true)

xml.send(null)

xml.onreadystatechange = function() {
    switch(xml.readyState) {
        case 3:
            document.write('Loading...')
            break
        case 4:
            document.write(xml.status, xml.statusText, xml.responseText) 
            break
    }
}

xml.timeout = 1000

xml.onload = function() {
    document.write(xml.responseText)  
}

xml.onerror = function(e) {
    console.log(e)
}