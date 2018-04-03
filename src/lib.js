const remark = require('remark')
const image = require('./image')
const styles = require('./styles')

console.md = md => {
  const mark = remark()
  // Markdown abstract syntax tree
  const ast = mark.parse(md)

  // Used for building up strings to log
  const stack = {
    text: '',
    styles: []
  }

  // Outputs the stack to the console and clears it
  function renderStack () {
    console.log(stack.text.replace('↵', '\n'), ...stack.styles)

    stack.text = ''
    stack.styles = []
  }

  let list = false
  function walk (node, style = '') {
    if (node.type === 'root') {
      node.children.forEach(walk)
    } else if (node.type === 'list') {
      list = true
      node.children.forEach(i => walk(i, style))
      list = false
    } else if (node.type === 'listItem') {
      stack.text += '- '
      node.children.forEach(i => walk(i, style))
    } else if (node.type === 'heading') {
      node.children.forEach(child => walk(child, styles[`h${node.depth}`]))
      renderStack()
    } else if (node.type === 'paragraph') {
      const style = list ? styles.li : styles.p
      node.children.forEach(child => walk(child, style))
      renderStack()
    } else if (node.type === 'strong') {
      node.children.forEach(child => walk(child, `${style}font-weight: bold;`))
    } else if (node.type === 'emphasis') {
      node.children.forEach(child => walk(child, `${style}font-style: italic;`))
    } else if (node.type === 'link') {
      node.children.forEach(child => walk(child, style))
      stack.text = `${stack.text} (${node.url})`
    } else if (node.type === 'delete') {
      node.children.forEach(child =>
        walk(child, `${style}text-decoration: line-through;`)
      )
    } else if (node.type === 'code') {
      console.log(`%c${node.value.replace('%c', '\\%c')}`, styles.code)
    } else if (node.type === 'text') {
      stack.text =
        `${stack.text}%c${node.value.replace('%c', '\\%c').replace('\n', ' ')}`
      stack.styles.push(style)
    } else if (node.type === 'inlineCode') {
      stack.text =
        `${stack.text}%c${node.value.replace('%c', '\\%c').replace('\n', ' ')}`
      stack.styles.push(style + styles.inlineCode)
    } else if (node.type === 'image') {
      image(node.url)
    }
  }

  walk(ast)
}
