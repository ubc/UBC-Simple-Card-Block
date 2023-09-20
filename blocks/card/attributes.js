const attributes = {
  colorPaletteControl: {
    type: "string",
    default: "#002145"
  },
  toggleControl: {
    type: "boolean"
  },
  cardTitle: {
    type: 'string',
    source: 'text',
    selector: 'h2',
  },
  cardDesc: {
    type: 'string',
    source: 'text',
    selector: 'p'
  },
  imgUrl: {
    type: 'string',
    source: 'attribute',
    attribute: 'src',
    selector: 'img',
  },
  imgId: {
      type: 'number',
  },
  imgAlt: {
      type: 'string',
      source: 'attribute',
      attribute: 'alt',
      selector: 'img',
  },
  cardUrlTitle: {
    type: 'string',
  },
  cardTextColor: {
    type: 'string',
    default: '#fff',
  },
  cardUrl: {
    type: 'string',
    source: 'attribute',
    attribute: 'href',
    selector: '.course-block--link ',
  },
  cardUrlLoggout: {
    type: 'string',
    source: 'attribute',
    attribute: 'href',
    selector: 'a',
  },
};
  
export default attributes;
  