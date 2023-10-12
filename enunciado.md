## Initial Remarks

- The exercises should be solved inside a function per exercise with the format `exercise_{n}(...)` (multiple functions can be used but the main function should have that format)
- The code will be tested automatically, which means the functions should be ready to receive and return the exact same inputs\outputs as the ones specified in the test cases
- The variable `full_name` should be filled with your full name
- Attach a `.zip` file containing the code to the MS Teams assignment until the deadline

<br/>

## Suggested resources

| [toUpperCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
 | [split](https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/string/split)
 | [replace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
 | [Trim](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)
 | [sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
 | [includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
 | [push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
 | [splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
 | [replace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
 | [replaceAll](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll)
 | [isNaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN)
 | [isInteger](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)
 | [parseInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt)

<br/>

## Exercises

### 1) Arrays & strings capitalization
- Create a function called `exercise_1(items)`, the function receives a string array
- This function should process the input and `return` a string array with the first character as upper-case and the remaining characters as lower-case
- This function should receive the following inputs and be able to return the desired outputs
```
Test 1.
    expected input (items parameter):
        ['bike','car','plane']

    expected output (returned array):
        ['Bike','Car','Plane']

Test 2.
    expected input (items parameter):
        ['bIke','buS','cAr','plane']

    expected output (returned array):
        ['Bike','Bus','Car','Plane']

```

### 2) Arrays & strings capitalization
- Create a function called `exercise_2(items)`, the function receives a string array
- This function should process the input and `return` a string array with the first character as lower-case and the remaining characters as upper-case
- This function should receive the following inputs and be able to return the desired outputs
```
Test 1.
    expected input (items parameter):
        ['Bike','Car','Plane']

    expected output (returned array):
        ['bIKE','cAR','pLANE']

Test 2.
    expected input (items parameter):
        ['bIke','buS','CAr','Plane']

    expected output (returned array):
        ['bIKE','bUS','cAR','pLANE']

```

### 3) Arrays & strings capitalization
- Create a function called `exercise_3(items)`, the function receives a string array
- This function should process the input and `return` a string array with only the vowels as upper case
- This function should receive the following inputs and be able to return the desired outputs
```
Test 1.
    expected input (items parameter):
        ['bike','car','plane','panda','dog']

    expected output (returned array):
        ['bIkE','cAr','plAnE','pAndA','dOg']

Test 2.
    expected input (items parameter):
        ['bIke','boat','buS','cAR','pLaNe']

    expected output (returned array):
        ['bIkE','bOAt','bUs','cAr','plAnE']

```

### 4) Arrays & numbers sum
- Create a function called `exercise_4(items)`, the function receives a numbers array
- This function should process the input and `return` a number with the sum of all elements
- This function should receive the following inputs and be able to return the desired outputs
```
Test 1.
    expected input (items parameter):
        [2,1,2,-4,99]

    expected output (returned number):
        100

Test 2.
    expected input (items parameter):
        [1,1,66,2]

    expected output (returned number):
        70

```

### 5) Arrays & character count
- Create a function called `exercise_5(items)`, the function receives a string array
- This function should process the input and `return` the number of vowels present in the array
- This function should receive the following inputs and be able to return the desired outputs
```
Test 1.
    expected input (items parameter):
        ['bike','car','plane']

    expected output (returned number):
        5

Test 2.
    expected input (items parameter):
        ['dog','cat','panda']

    expected output (returned number):
        4

```

### 6) Arrays & character count
- Create a function called `exercise_6(items)`, the function receives a string array
- This function should process the input and `return` a numbers array with same number of elements as the input, and each array element should contain the number of vowels of each string in the same position
- This function should receive the following inputs and be able to return the desired outputs
```
Test 1.
    expected input (items parameter):
        ['bike','car','plane']

    expected output (number):
        [2,1,2]

Test 2.
    expected input (items parameter):
        ['dog','cat','panda']

    expected output (returned array):
        [1,1,2]

```

### 7) Arrays & string delimiters
- Create a function called `exercise_7(desserts)`, the function receives a string parameter called `desserts` separated by a comma
- This function should process the input and `return` a string array
- This function should receive the following inputs and be able to return the desired outputs
```
Test 1.
    expected input (desserts parameter):
        'donuts, cakes,chocolates, fruits'

    expected output (returned array):
        ['donuts','cakes','chocolates','fruits']

Test 2.
    expected input (desserts parameter):
        'donuts, chocolates, fruits'

    expected output (returned array):
        ['donuts','chocolates','fruits']

```

### 8) Arrays & string delimiters
- Create a function called `exercise_8(str)`, the function receives a string parameter called `str` separated by a pipe
- This function should process the input and `return` a string array sorted by ascending order
- This function should receive the following inputs and be able to return the desired outputs
```
Test 1.
    expected input (str parameter):
        'car| bike|plane'

    expected output (returned array):
        ['bike','car','plane']

Test 2.
    expected input (str parameter):
        '|plane|bus|car| bike'

    expected output (returned array):
        ['bike','bus','car','plane']

```
### 9) Arrays & numbers sum
- Create a function called `exercise_9(numbers)`, the function receives a numbers array
- This function should process the input and `return` a number with the sum of all even numbers
- This function should receive the following inputs and be able to return the desired outputs
```
Test 1.
    expected input (numbers parameter):
        [2,1,2,7,3,-4,99]

    expected output (returned number):
        0

Test 2.
    expected input (numbers parameter):
        [1,1,66,2]

    expected output (returned number):
        68

```
### 10) Arrays & numbers
- Create a function called `exercise_10(numbers)`, the function receives a numbers array
- This function should process the input and `return` a number with the sum of all odd numbers, in case the result itself is odd, add `30` to it
- This function should receive the following inputs and be able to return the desired outputs
```
Test 1.
    expected input (numbers parameter):
        [2,1,2,7,3,-4,99]

    expected output (returned number):
        110

Test 2.
    expected input (numbers parameter):
        [1,1,66,43,2]

    expected output (returned number):
        75

```

### 11) Arrays, objects & numbers
- Create a function called `exercise_11(numbers)`, the function receives a numbers array
- This function should process the input and `return` an object that counts the even and odd numbers
- This function should receive the following inputs and be able to return the desired outputs
```
Test 1.
    expected input (numbers parameter):
        [2,1,2,7,99]

    expected output (returned object):
        {'even': 2, 'odd': 3}

Test 2.
    expected input (numbers parameter):
        [1,1,66,43,2,9,6,3]

    expected output (returned object):
        {'even': 3, 'odd': 5}

```
### 12) Arrays, objects & numbers
- Create a function called `exercise_12(items)`, the function receives a numbers array
- This function should process the input and `return` an object that has the sum result of even and odd numbers
- This function should receive the following inputs and be able to return the desired outputs
```
Test 1.
    expected input (items parameter):
        [2,1,2,7,99]

    expected output (returned number):
        {'even_sum': 4, 'odd_sum': 107}

Test 2.
    expected input (items parameter):
        [1,1,66,43,2,9,6,3]

    expected output (returned number):
        {'even_sum': 74, 'odd_sum': 57}

```

### 13) Arrays
- Create a function called `exercise_13(items)`, the function receives a strings array
- This function should process the input and `return` a string array with the initial entries and the same entries reversed
- This function should receive the following inputs and be able to return the desired outputs
```
Test 1.
    expected input (items parameter):
        ['bike','car','plane']

    expected output (returned array):
        ['bike','car','plane','plane','car','bike']

Test 2.
    expected input (items parameter):
        ['donuts','cakes','chocolates','fruits']

    expected output (returned array):
        ['donuts','cakes','chocolates','fruits','fruits','chocolates','cakes','donuts']

```

### 14) Arrays
- Create a function called `exercise_14(items)`, the function receives a strings array
- This function should process the input and `return` a string array with unique strings
- This function should receive the following inputs and be able to return the desired outputs
```
Test 1.
    expected input (items parameter):
        ['bike','car','plane','car','bike']

    expected output (returned array):
        ['bike','car','plane']

Test 2.
    expected input (items parameter):
        ['donuts','fruits','fruits','chocolates','cakes','donuts']

    expected output (returned array):
        ['donuts','fruits','chocolates','cakes']

```

### 15) Strings
- Create a function called `exercise_15(items)`, the function receives a string parameter called `sentence`
- This function should process the input and `return` a string with certain words replaced
- This function should receive the following inputs and be able to return the desired outputs
- Note the character capitalization in the sentences
```
Test 1.
    expected input (items parameter):
        'Roses are red, violets are blue, other Flowers are nice too'

    expected output (returned string):
        'Cars are red, bikes are blue, other Vehicles are fast too'
```

### 16) Objects & strings
- Create a function called `exercise_16()`, the function has no parameters
- This function should read the `car_mock_data` object and `return` a string with unique car makes separated by comma
- This function should read the `car_mock_data` object and be able to return the desired outputs
```
Test 1.
    expected output (returned string):
        'Honda,Mazda,Infiniti,Chevrolet,Toyota,Maserati,Suzuki,GMC,Isuzu,Acura,Pontiac,Austin'
```

### 17) Objects
- Create a function called `exercise_17()`, the function has no parameters
- This function should read the `car_mock_data` object and `return` an object with the year as `key` and the amount of cars from that year as `value`
- This function should read the `car_mock_data` object and be able to return the desired outputs
```
Test 1.
    expected output (returned object):
       {1963: 1, 1985: 1, 1987: 3, 2000: 1, 2003: 2, 2004: 3, 2005: 1, 2007: 1, 2008: 2, 2009: 1}
```
### 18) Objects
- Create a function called `exercise_18()`, the function has no parameters
- This function should read the `car_mock_data` object and `return` an object with the make as `key` and the amount of cars of that make as `value`, for cars older than 2004
- This function should read the `car_mock_data` object and be able to return the desired outputs
```
Test 1.
    expected output (returned object):
       {"Mazda":1,"Maserati":1,"Toyota":2,"Suzuki":1,"Acura":1,"Pontiac":1,"Austin":1}
```

### 19) Objects, strings, numbers
- Create a function called `exercise_19()`, the function has no parameters
- This function should read the `car_mock_data` object and `return` a number with the sum of all numbers from the car models
- This function should read the `car_mock_data` object and be able to return the desired outputs
```
Test 1.
    expected output (returned number):
        4633
```