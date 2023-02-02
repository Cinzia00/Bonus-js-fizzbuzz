console.log('ciao')

for (let i = 1; i <= 100; i++) {
    console.log(i);
    document.getElementById('container').innerHTML += i;
    
    let multiploDi3 = i % 3
    // console.log(i, multiploDi3);
    let multiploDi5 = i % 5
    // console.log(i, multiploDi5);
    
    let multiploDi15 = i % 15
    // console.log(i, multiploDi15);
    
    
    if (multiploDi15 === 0) {
        console.log('FizzBuzz')
        document.getElementById('container').innerHTML += 'FizzBuzz';
    
    }
    else if (multiploDi5 === 0) {
        console.log('Buzz')
        document.getElementById('container').innerHTML += 'Buzz';

    }
    else if (multiploDi3 === 0) {
        console.log('Fizz')
        document.getElementById('container').innerHTML += 'Fizz';
    }
}
