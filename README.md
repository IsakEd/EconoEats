# EconoEats

EconoEats is my attempt at solving the problem of how to not spend 500€ per month on basic groceries. It does not give nutritional advice.

## External dependencies

Countless hours were spent trying to get an SSL certificate for my domain isakederlov.com. It turns out that namecheap and Let's Encrypt don't play nice with each other, and AWS Certificate Manager doesn't like namecheap either. Since Vercel hosted content is SSL encrypted, all in- and outbound traffic has to be https as well. This is unless you route the fetch through a sveltekit server, also hosted on Vercel. So that's what's currently going on.

## Further development

###

The #1 bang for the buck improvement would be to move all the GLPK calculations to the client side. This is supported, but not well documented and seems to rely heavily on document and window methods, which I honestly get a bit confused about when Svelte is involved. Having the calculations on the client side not only reduces the total computational load for the host, but also eliminates the need for AWS at all. It's a no brainer, but it was just one of these things that I couldn't get past so I had to find an other outlet to not lose flow.

### FDC API instead of a food "database"

The current content is just assembled from what I had in my kitchen and solid-ish estimates of food prices. It works and has some degree of accuracy but it's not scalable since everything is manually added. The US FDC has a decent API that contains a lot of information . The biggest facilitator of this would be a function that reshapes data from FDC objects to the EconoEats "Food" interface. This would be great, as it would not only make completely serverless a viable alternative, but also add constraints for micronutrients such as vitamins, minerals and even ratios of different lipids! It is however a non-trivial task seeing as some major changes to a lot of state has to be made.

## Building
