// My full name
const full_name = 'Gustavo Tavares Proença Meireles';

import { car_mock_data } from './mock-data.js'

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

const exercise_7 = (desserts) => {
    let result;
    result = desserts.split(",");

    result.forEach((element, index) => {
        result[index] = element.replaceAll(' ', '');
    });

    return result;
}

const exercise_8 = (str) => {
    let result = [];

    result = str.split("|");
    for (let i = 0; i < result.length; i++) {
        let element = result[i];
        element = element.replaceAll(" ", "");
    }

    for (let i = 0; i < result.length; i++) {
        const element = result[i];
        if (element === '') {
            result.splice(i, 1);

        }
    }

    result = result.sort();


    return result;
}

const exercise_9 = (numbers) => {
    let result = 0

    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if ((element % 2) === 0) {
            result += element;
        }
    }

    return result;
}

const exercise_10 = (numbers) => {
    let result = 0

    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if ((element % 2) !== 0) {
            result += element;
        }
    }

    if ((result % 2) !== 0) {
        result += 30;
    }

    return result;
}

const exercise_11 = (numbers) => {
    result = {
        "even": 0,
        "odd": 0,
    }

    const getEven = (arr) => {
        let sum = 0

        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            if ((element % 2) === 0) {
                sum++;
            }
        }

        return sum;
    }

    const getOdd = (arr) => {
        let sum = 0

        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            if ((element % 2) !== 0) {
                sum++;
            }
        }

        return sum;
    }

    result["even"] = getEven(numbers);
    result["odd"] = getOdd(numbers);

    return result;
}

const exercise_12 = (items) => {
    result = {
        "even": 0,
        "odd": 0,
    }

    const getEven = (arr) => {
        let sum = 0

        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            if ((element % 2) === 0) {
                sum += element;
            }
        }

        return sum;
    }

    const getOdd = (arr) => {
        let sum = 0

        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            if ((element % 2) !== 0) {
                sum += element;
            }
        }

        return sum;
    }

    result["even"] = getEven(items);
    result["odd"] = getOdd(items);

    return result;
}

const exercise_13 = (items) => {
    let result = [];

    for (let i = 0; i < items.length; i++) {
        const element = items[i];
        result.push(element);
    }

    items.reverse();

    for (let i = 0; i < items.length; i++) {
        const element = items[i];
        result.push(element);
    }

    return result;
}

const exercise_14 = (items) => {
    let result = [];

    for (let i = 0; i < items.length; i++) {
        const element = items[i];
        if (result.includes(element)) {
            continue;
        } else {
            result.push(element);
        }
    }

    return result;
}

const exercise_15 = (items) => {
    let result = items
    let replaced = [];

    const replacers = {
        "Roses": "Cars",
        "violets": "bikes",
        "Flowers": "Vehicles",
        "nice": "fast"
    }

    replaced = Object.keys(replacers);

    // Why do some functions return references and
    // others return copies? It seems random
    for (let i = 0; i < replaced.length; i++) {
        const element = replaced[i];
        result = result.replaceAll(element, replacers[element]);
    }

    return result;
}

const exercise_16 = function(car_mock_data) {
    let result = "";
    let makes = [];

    for (let i = 0; i < car_mock_data.length; i++) {
        const element = car_mock_data[i]["make"];
        if (!makes.includes(element))
            makes.push(element);
    }

    result = makes.join(",");

    return result;
}

const exercise_17 = (car_mock_data) => {
    let result = {};

    for (let i = 0; i < car_mock_data.length; i++) {
        const element = car_mock_data[i]["year"];

        if (result[element])
            result[element]++;
        else
            result[element] = 1;
    }

    return result;
}

const exercise_18 = (car_mock_data) => {
    let result = {};

    for (let i = 0; i < car_mock_data.length; i++) {
        const element = car_mock_data[i]["make"];

        if (car_mock_data[i]["year"] < 2004) {
            if (result[element])
                result[element]++;
            else
                result[element] = 1;
        }
    }

    return result;
}

const exercise_19 = () => {
}
console.log(exercise_19());
