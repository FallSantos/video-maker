const readLine = require('readline-sync')

function start() {
    // Objeto que guarda o conteúdo da pesquisa.
    const content = {}

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()

    // Pergunta o termo da pesquisa.
    function askAndReturnSearchTerm() {
        return readLine.question('Type a Wikipedia search term: ')
    } 

    // Pergunta o prefixo da pesquisa.
    function askAndReturnPrefix() {
        const prefixes = ['Who is', 'What is', 'The history of']
        const selectedPrefixIndex = readLine.keyInSelect(prefixes, 'Choose one option: ')
        const selectedPrefixText = prefixes[selectedPrefixIndex]

        return selectedPrefixText
    } 

    console.log(content)
}

start()