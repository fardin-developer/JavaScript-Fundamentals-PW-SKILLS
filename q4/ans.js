function extractDateParts(pattern, str) {
    const match = str.match(pattern);
    

    if (match) {
        const [fullMatch, day, month, year] = match;
        return { day, month, year };
    } else {
        return null;
    }
}

const datePattern = /(\d{2})-(\d{2})-(\d{4})/;
const testDateString = "The event is on 15-08-2024.";


const extractedDate = extractDateParts(datePattern, testDateString);
console.log(extractedDate);
