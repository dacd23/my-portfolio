const resultsList = document.getElementById('result')
new URLSearchParams(window.location.search).forEach((value, name) => {
    resultsList.append(`${name}: ${value}`)
    resultsList.append(document.createElement('br'))
})

// creating a hover text for each Project image.
