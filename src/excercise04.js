const sortLettersAlphabetically = (word) => word
    .toLowerCase(word)
    .split("")
    .sort()
    .join("")

module.exports = {
    sortLettersAlphabetically
}