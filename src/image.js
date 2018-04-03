// creates an empty box of the required width and height
function getBox (width, height) {
  return {
    string: ' ',
    style:
      `font-size: 1px; padding-left: ${width}px; line-height: ${height}px;`
  }
}

module.exports = url => {
  const img = new Image()

  img.onload = function () {
    const dim = getBox(this.width, this.height)
    console.log(
      `%c${dim.string}`,
      `${dim.style}background: url(${url}); background-repeat: no-repeat; color: transparent;`
    )
  }

  img.src = url
}
