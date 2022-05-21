'use strict';
const EMPTY = '';
const HEADING = 'Heading';
const TABLECELL = 'TableCell';
const TABLE_SECTION = 'TableSection';

const ELEMENT = 'Element';
exports.ELEMENT = ELEMENT;

const qualify = name => ('HTML' + (namespace[name] || '') + ELEMENT);
exports.qualify = qualify;

const namespace = {
  A: 'Anchor',
  Caption: 'TableCaption',
  DL: 'DList',
  Dir: 'Directory',
  Img: 'Image',
  OL: 'OList',
  P: 'Paragraph',
  TR: 'TableRow',
  UL: 'UList',

  Article: EMPTY,
  Aside: EMPTY,
  Footer: EMPTY,
  Header: EMPTY,
  Main: EMPTY,
  Nav: EMPTY,
  [ELEMENT]: EMPTY,

  H1: HEADING,
  H2: HEADING,
  H3: HEADING,
  H4: HEADING,
  H5: HEADING,
  H6: HEADING,

  TD: TABLECELL,
  TH: TABLECELL,

  TBody: TABLE_SECTION,
  TFoot: TABLE_SECTION,
  THead: TABLE_SECTION,
};
exports.namespace = namespace;
