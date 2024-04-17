function groupAnagrams(words) {
    const groupedAnagrams = [];

    const anagramGroups = {};

    function getSignature(word) {
        return word.split('').sort().join('');
    }

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const signature = getSignature(word);

        if (anagramGroups[signature]) {
            anagramGroups[signature].push(word);
        }
        else {
            anagramGroups[signature] = [word];
        }
    }

    for (const signature in anagramGroups) {
        groupedAnagrams.push(anagramGroups[signature]);
    }

    return groupedAnagrams;
}

const words = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map'];
const result = groupAnagrams(words);
console.log(result);