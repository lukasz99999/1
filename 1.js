
function reverseMe(input)  {
    if (typeof input !== 'string') {
        throw new Error ('Ta zmienna nie jest Stringiem')
    } 
    input = input.split('').reverse()
    input = input.join('')
      
       return input;
    }