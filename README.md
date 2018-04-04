# `console.md`
> Ever dreamed of rendering Markdown in the console? No. Neither have I.

**Check out the demo! Go to [this page](https://adamisntdead.github.io/console.md/) and open the console!**

But, it's possible, and it works cross browser!
So to you, I now present: `console.md` - Render markdown in the console! 💪🔮

At the moment, not all features of markdown are supported, what is, is detailed in the example below.
You should note that it looks really good in Firefox, but neither firefox or safari supports images. Chrome, however works with all of the implemented features!

## Usage

This library is a browser only library. It's usable in chrome.
If you are using something like rollup, webpack or other bundlers, you can use this through npm.

```bash
$ npm install --save console-markdown
```

Otherwise, just download the [`bundle.js`](https://raw.githubusercontent.com/adamisntdead/console.md/master/bundle.js) file from this repo, and add it to your html file

```html
<script src="bundle.js"></script>
```

The module adds a method to the console object - `console.md`. Just call it with some markdown!

```javascript
const markdown = `# Welcome!

This is markdown! I can do *lots* of **really** ~~boring~~ interesting stuff!

I can, for example give a [link](https://github.com). Notice that the url is put beside the text
and in brackets.

For now, only a subset of the whole markdown syntax is supported, but I do have the following working:

* All headings
* Standard text
* Bold text
* Inline code
* Block code (although not highlighted)
* Images (only at full size)
* Links (kind of)


The code above was rendered from the markdown

\`\`\`markdown
# Welcome!

This is markdown! I can do *lots* of **really** ~~boring~~ interesting stuff!

I can, for example give a [link](https://github.com). Notice that the url is put beside the text
and in brackets.

For now, only a subset of the whole markdown syntax is supported, but I do have the following working:

* All headings
* Standard text
* Bold text
* Inline code
* Block code (although not highlighted)
* Images (only at full size)
* Links (kind of)
\`\`\`


As you may be able to see, there is a few layout issues, but they are to be expected (it is the \`console\` you know!).
There is image support, but they can only appear at full size at the moment. ![](https://www.fillmurray.com/g/800/450).

Also, no raw html is supported, it all must be vanilla markdown 💔.
(Oh, emojis work too! 🔮✨🌟🎶💫☄️⭐️🎤🎧💎)
`;

console.md(markdown)
``` 

While will output:

![output](https://raw.githubusercontent.com/adamisntdead/console.md/master/media/output.png)

## License 

MIT