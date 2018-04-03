const fontFamily =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";'
const em = n => `${16 * n}px`

module.exports = {
  // Heading Tag Styles
  h1: `font-family: ${fontFamily}; font-size: ${em(
    2
  )}; margin-top: 0.67em; margin-bottom: 0.67em; margin-left: 0; margin-right: 0; font-weight: bold;`,
  h2: `font-family: ${fontFamily}; font-size: ${em(
    1.5
  )}; margin-top: 0.83em; margin-bottom: 0.83em; margin-left: 0; margin-right: 0; font-weight: bold;`,
  h3: `font-family: ${fontFamily}; font-size: ${em(
    1.17
  )}; margin-top: 1em; margin-bottom: 1em; margin-left: 0; margin-right: 0; font-weight: bold;`,
  h4: `font-family: ${fontFamily}; font-size: ${em(
    1
  )}; margin-top: 1.33em; margin-bottom: 1.33em; margin-left: 0; margin-right: 0; font-weight: bold;`,
  h5: `font-family: ${fontFamily}; font-size: ${em(
    0.83
  )}; margin-top: 1.67em; margin-bottom: 1.67em; margin-left: 0; margin-right: 0; font-weight: bold;`,
  h6: `font-family: ${fontFamily}; font-size: ${em(
    0.67
  )}; margin-top: 2.33em; margin-bottom: 2.33em; margin-left: 0; margin-right: 0; font-weight: bold;`,

  // P tag styles
  p: `font-family: ${fontFamily}; font-size: ${em(
    1
  )}; margin-top: 1em; margin-bottom: 1em; margin-right: 0;`,
  li: `font-family: ${fontFamily}; font-size: ${em(
    1
  )}; margin-top: 2px; margin-botton: 2px;`,

  inlineCode: `font-family: monospace; background-color: rgba(27,31,35,0.05);`,
  code: `font-family: monospace; background-color: rgba(27,31,35,0.05); padding-left: 5px; padding-right: 15px;`,
  blank: `font-family: unset; font-size: unset; font-weight: unset; margin: 0;`
}
