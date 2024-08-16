function outerFunction(outerParam) {
    let outerVariable = 'Declared variable within outerFunction';

    return function innerFunction() {

        console.log(`outerParam: ${outerParam}`);
        console.log(`outerVariable: ${outerVariable}`);

    }

  ;
}

const myInnerFunction = outerFunction('Hello, World!');

myInnerFunction();
