// A simple hex to rbga converter
export function hexToRGB( h ) {
  let r = 0, g = 0, b = 0;

  // 3 digits
  if ( h.length == 4 ) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];

  // 6 digits
  } else if ( h.length == 7 ) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
  }
  
  return "rgba("+ +r + "," + +g + "," + +b + ", .7)";
}

// UBC colors from https://assets.brand.ubc.ca/downloads/ubc_visual_identity_guide.pdf
const ubcBlues = [
  {
    name: 'UBC standard blue',
    slug: 'ubc-blue',
    color: '#002145',
  },
  {
    name: 'UBC secondary blue',
    slug: 'ubc-secondary',
    color: '#0055b7',
  },
  {
    name: 'UBC tertiary blue',
    slug: 'ubc-tertiary-blue',
    color: '#0680a6',
  },
  {
    name: 'UBC quaternary blue',
    slug: 'ubc-quaternary-blue',
    color: '#40b4e5',
  },
  {
    name: 'UBC quinary blue',
    slug: 'ubc-quinary-blue',
    color: '#6ec4e8',
  },
  {
    name: 'UBC senary blue',
    slug: 'ubc-senary-blue',
    color: '#97d4e9',
  }
];

// genaric colors
const genaricColors = [
  {
    name: 'Superduper white',
    slug: 'ubc-white',
    color: '#fff',
  },
  {
    name: 'Deep black',
    slug: 'deep-black',
    color: '#000',

  },
  {
    name: 'Sly grey',
    slug: 'sly-grey',
    color: '#e6e6e6',
  }
];

export const txtColorOptions = genaricColors.concat( ubcBlues );
export const bgColorOptions = ubcBlues;