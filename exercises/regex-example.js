const regex = /(?:(?:apple|banana|orange))/gmi;

// Alternative syntax using RegExp constructor
// const regex = new RegExp('(?:apple|banana|orange)(?:\\s+(?:apple|banana|orange))*', 'gmi')

const str = `banana  apple  orange  red    apple `;
let m;

while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }

    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
        console.log(`Found match, group ${groupIndex}: ${match}`);
    });
}

