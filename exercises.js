// My full name
const full_name = 'Gustavo Tavares Proença Meireles';

const exercise_1 = function(items) {
    let result = [];

    const format = (str) => {
        str = str.toLowerCase();
        str = str.charAt(0).toUpperCase() + str.slice(1)

        return str;
    };

    for (let i = 0; i < items.length; i++) {
        result.push(format(items[i]));
    }

    return result
};

const exercise_2 = function(items) {
    let result = [];

    const format = (str) => {
        str = str.toUpperCase();
        str = str.charAt(0).toLowerCase() + str.slice(1)

        return str;
    };

    for (let i = 0; i < items.length; i++) {
        result.push(format(items[i]));
    }

    return result
};

const exercise_3 = function(items) {
    let result = [];
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < items.length; i++) {
        let str = items[i].toLowerCase();

        for (let j = 0; j < vowels.length; j++) {
            const vowel = vowels[j];

            if (vowel.includes(vowel))
                str = str.replaceAll(vowel, vowel.toUpperCase());
        }

        result.push(str);
    }

    return result;
}

const exercise_4 = function(items) {
    let result = 0;

    for (let i = 0; i < items.length; i++) {
        result += items[i];
    }

    return result
}

const exercise_5 = function(items) {
    let result = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // blazingly fast triply nested loop algorithm :)
    for (let i = 0; i < items.length; i++) {
        let str = items[i];

        for (let j = 0; j < str.length; j++) {
            for (let k = 0; k < vowels.length; k++) {
                if (str.charAt(j) === vowels[k])
                    result++;
            }
        }
    }

    return result;
}

const exercise_6 = function(items) {
    let result = [];

    const countVowels = (str) => {
        let count = 0;
        const vowels = ['a', 'e', 'i', 'o', 'u'];

        for (let i = 0; i < str.length; i++) {
            const letter = str.charAt(i);

            for (let j = 0; j < vowels.length; j++) {
                const vowel = vowels[j];
                if (letter === vowel) {
                    count++;
                }
            }
        }

        return count;
    };

    for (let i = 0; i < items.length; i++) {
        const element = items[i];
        result.push(countVowels(element));
    }

    return result;
}

const exercise_7 = (items) => {
    let result;
    // code here
    return result;
}

const exercise_16 = function() {

    return car_mock_data
};
