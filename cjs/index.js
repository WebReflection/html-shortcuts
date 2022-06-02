'use strict';
const CALLBACK = 'Callback';
const EMPTY = '';
const HEADING = 'Heading';
const TABLECELL = 'TableCell';
const TABLE_SECTION = 'TableSection';

const ELEMENT = 'Element';
exports.ELEMENT = ELEMENT;
const CONSTRUCTOR = 'constructor';
exports.CONSTRUCTOR = CONSTRUCTOR;
const PROTOTYPE = 'prototype';
exports.PROTOTYPE = PROTOTYPE;
const ATTRIBUTE_CHANGED_CALLBACK = 'attributeChanged' + CALLBACK;
exports.ATTRIBUTE_CHANGED_CALLBACK = ATTRIBUTE_CHANGED_CALLBACK;
const CONNECTED_CALLBACK = 'connected' + CALLBACK;
exports.CONNECTED_CALLBACK = CONNECTED_CALLBACK;
const DISCONNECTED_CALLBACK = 'dis' + CONNECTED_CALLBACK;
exports.DISCONNECTED_CALLBACK = DISCONNECTED_CALLBACK;
const UPGRADED_CALLBACK = 'upgraded' + CALLBACK;
exports.UPGRADED_CALLBACK = UPGRADED_CALLBACK;
const DOWNGRADED_CALLBACK = 'downgraded' + CALLBACK;
exports.DOWNGRADED_CALLBACK = DOWNGRADED_CALLBACK;

const qualify = name => ('HTML' + (name in namespace ? namespace[name] : name) + ELEMENT);
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
