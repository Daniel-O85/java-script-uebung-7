/*******************
 * Funktionen
 ****************/
// single Tag
function singleTag(tag) {
    return `<${tag}/>`;
}

// single Tag mit unbegrenzten Attributen
function singleTagPlus(tag, atri) {
    let sam = "";
    for (let s = 0; s < atri.length; s++)
        sam += ` ${atri[s].k1} = "${atri[s].k2}"`
    return `<${tag} ${sam}>`;
}

// Block Tag
function blockTag(tag, wert) {
    return `<${tag}>${wert}</${tag}>`;
}

// Block Tag mit unbegrenzten Attributen
function blockTagPlus(tag, atri, wert) {
    let sam = "";
    for (let s = 0; s < atri.length; s++)
        sam += `${atri[s].k1} = "${atri[s].k2}"`
    return `<${tag} ${sam} >${wert}</${tag}>`;
}

// Block Tag Array
function blockTagArray(tag, wert) {
    let sam = "";
    for (let s = 0; s < wert.length; s++)
        sam += `<${tag}>${wert[s]}</${tag}>`;
    return sam;
}
function blockTagArrayPlus(tag1, tag2, wert) {
    let sam = `<${tag1}>`;
    for (let s = 0; s < wert.length; s++)
        sam += `<${tag2}>${wert[s]}</${tag2}>`;
    sam += `</${tag1}>`
    return sam;
}

// Block Tag Array mit Json
function blockTagArrayJ(tag, wert) {
    let sam = "";
    for (let s = 0; s < wert.length; s++)
        sam += `<${wert[s].k1}> ${wert[s].k2} </${wert[s].k1}>`
    return `<${tag}>${sam} </${tag}>`;
}

// Bild Und Text
function bildUndText(tag, key) {
    let s = "";
    for (let x = 0; x < key.length; x++)
        s += `<${tag}> <img src ="${key[x].bild}"> <p>${key[x].text}</p></${tag}> `;
    return s;
}
// table row
function tableRow(tag, wert) {
    let sam = `<tr>`;
    for (let s = 0; s < wert.length; s++)
        sam += `<${tag}>${titelZeile(
            titel[s],
            inhalt[s]
        )}</${tag}>`;
    sam += `</${tr}>`;
    return sam;
}

function titelZeile(titel, inhalt) {
    return (
        blockTag("h4", titel)
        +
        singleTag("hr"
            +
            blockTagPlus("select", "option", inhalt))
    )
}