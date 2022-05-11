This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
(this guide assumes that nodejs is installed, and these commands are ran from with this folder)
To run this app locally, first
```bash
 npm install
```

Then, to run the development server:

```bash
npm run dev
```
and access it on http://localhost:3000.
To run the unit tests, run

```bash
npm run tests
```


## Compromises made in the interests of time
- data is loaded from a static file rather than a real API/ stubs in the tests
- some of the more basic components are missing unit tests
- some values eg. "Sydney" and "1 night" are hardcoded - in the actual page these values would be passed to this hotels page from a search, but that logic is not implemented here.
- css implementation is not exact
- hotels.module.css hsd not been split up into smaller files to match the componenet files 


## Quick start resources used
Setup MUI/NEXT
https://dev.to/hajhosein/nextjs-mui-v5-typescript-tutorial-and-starter-3pab
Listing CSS template
https://codesandbox.io/s/t7xk38?file=/demo.tsx:0-1793
