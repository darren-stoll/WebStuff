//User Story #3: When I enter text into the #editor element, the #preview element is updated as I type to display the content of the textarea.

// ALLOWS LINE BREAKS WITH RETURN BUTTON
marked.setOptions({
  breaks: true });


// INSERTS target="_blank" INTO HREF TAGS (required for codepen links)
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + '</a>';
};

//User Story #5: When my markdown previewer first loads, the default text in the #editor field should contain valid markdown that represents at least one of each of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.

const defaultText = `
# Header 1
## Header 2
More \`<div>Inline code</div>\` found here.
Click [here](https://www.freecodecamp.org/) to go to a page of learning.
List item:
- List item!
> Block this quote.

`;

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: defaultText };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value });

  }
  // User Story #4: When I enter GitHub flavored markdown into the #editor element, the text is rendered as HTML in the #preview element as I type
  render() {
    return (
      React.createElement("div", null,
      React.createElement(Editor, { input: this.state.input, onChange: this.handleChange }),
      React.createElement(Preview, { input: this.state.input })));


  }}
;

const Editor = props => {
  return (
    React.createElement("textarea", { id: "editor", onChange: props.onChange, value: props.input }));

};

const Preview = props => {
  return (
    React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: marked(props.input, { renderer: renderer }) } }));

};

ReactDOM.render(React.createElement(ControlledInput, null), document.getElementById('controlled-input'));