# not-an-object

An awesome library brought to you by the fabastic fabs. Try it out!

It complements the already awesome (awesome for being omnipresent and just so damn useful) `NaN` with an even more awesome and useful `NaO`.

        require('not-an-object')

        console.log(NaO === NaO)  // false
        console.log(typeof NaO)  // object
        console.log(Number(NaO))  // {}

        console.log(isNaO(NaO))  // false  // known bug


# Graceful fallback from ES5.1

If the browser doesn't support ES5.1 then a graceful fallback will occur, which retains all of the useful properties of this module.


# NO DEPENDENCIES

Not even a testing library. Or any core library.


# The BEST License

wtfpl
