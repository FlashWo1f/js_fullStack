function geterateHashtag(str) {
    return (str.length > 140 || str === "") ? false : ("#" + str.split(' ').map(capitalize).join(' '));
}

function capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
}
console.log(geterateHashtag("hello my friend"))