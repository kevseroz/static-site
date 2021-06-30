const slugify = function(text) {
    return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')    //replace spaces with -
    .replace(/[^\w-]+/g, '') //remove all non-word chars 
    .replace(/--+/g, '-')    //replace multiple -- with single -
    .replace(/^-+/, '')      //trim - from start of text
    .replace(/-+$/, '')      // trim - from end of text
}

module.exports = { slugify }