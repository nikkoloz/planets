/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
 mode: "jit",
 theme: {
  letterSpacing: {
   wide: '.3125em',
  },
  fontSize: {
   'h1': ['28px', {
    lineHeight: '36px',
    letterSpacing: '-1.05px',
    fontWeight: '400',
   }],
   'tr': ['15px', {
    lineHeight: '25px',
    letterSpacing: '1.36px',
    fontWeight: '700',
   }],
   'trx': ['11px', {
    lineHeight: '25px',
    letterSpacing: '0px',
    fontWeight: '700',
   }],
   'na': ['40px', {
    lineHeight: '62px',
    letterSpacing: '0px',
    fontWeight: '400',
   }],
   'nax': ['48px', {
    lineHeight: '51px',
    letterSpacing: '0px',
    fontWeight: '400',
   }],
   'naxl': ['80px', {
    letterSpacing: '0px',
    lineHeight: '103px',
    fontWeight: '400',
   }],
   'p': ['11px', {
    letterSpacing: '0px',
    lineHeight: '22px',
    fontWeight: '400',
   }],
   'pxl': ['14px', {
    letterSpacing: '0px',
    lineHeight: '25px',
    fontWeight: '400',
   }],
   'pxl': ['14px', {
    letterSpacing: '0px',
    lineHeight: '25px',
    fontWeight: '400',
   }],
   'lin': ['12px', {
    letterSpacing: '0px',
    lineHeight: '25px',
    fontWeight: '400',
   }],
   'linxl': ['14px', {
    letterSpacing: '0px',
    lineHeight: '25px',
    fontWeight: '400',
   }],
   'me': ['9px', {
    letterSpacing: '2.93px',
    lineHeight: '10px',
    fontWeight: '700',
   }],
   'mex': ['9px', {
    letterSpacing: '2.93px',
    lineHeight: '25px',
    fontWeight: '700',
   }],
   'mexl': ['12px', {
    letterSpacing: '2.57px',
    lineHeight: '25px',
    fontWeight: '700',
   }],
   'in': ['8px', {
    letterSpacing: '0.73px',
    lineHeight: '16px',
    fontWeight: '700',
   }],
   'inxl': ['11px', {
    letterSpacing: '1px',
    lineHeight: '25px',
    fontWeight: '700',
   }],
   'nu': ['20px', {
    letterSpacing: '-0.75px',
    lineHeight: '25px',
    fontWeight: '400',
   }],
   'nux': ['24px', {
    letterSpacing: '-0.9px',
    lineHeight: '31px',
    fontWeight: '400',
   }],
   'nuxl': ['40px', {
    letterSpacing: '-1.5px',
    lineHeight: '51px',
    fontWeight: '400',
   }],
   'tst': ['40px', {
    fontFamily: '"Antonio",sans-serif',
   }],
  },
  lineHeight: {
  },
  screens: {
   'sm1': '768px',
   'sm2': '1024px',
   'sm3': '1440px',
  },
  extend: {
   fontFamily: {
    "spartan": "League-Spartan",
    "antonio": "Antonio",
   },
   colors: {
    'main-blue': '#070724',
    'gray': '#38384F',
    'gray-light': '#838391',
    'mer': '#DEF4FC',
    'ven': '#F7CC7F',
    'mar': '#FF6A45',
    'ear': '#545BFE',
    'jup': '#ECAD7A',
    'sat': '#FCCB6B',
    'ura': '#65F0D5',
    'nep': '#497EFA',

   },
  },
 },
 plugins: [],
}
