import React from 'react';

import "./textEditor.scss";
import ContentEditable from 'react-contenteditable';

class TextEditor extends React.Component {
  constructor() {
    super();
    this.initialHtml = "Tell your story..."
    this.state = { html: this.initialHtml };
  }

  handleChange = (e) => {
    this.setState({ html: e.target.value });
  }

  onBlur = (e) => {
    const html = e.target.innerText;

    if(!html || html.length === 0) {
      this.setState({ html: this.initialHtml });
    }
  }

  onClick = (e) => {
    const html = e.target.innerText;
    
    if(html === this.initialHtml) {
      this.setState({ html: '' });
    }
  }

  render = () => {
    return (
      <div className="textEditor__block">
        <ContentEditable 
          className="textEditor__editor"
          html={this.state.html}
          disabled={false}
          onChange={this.handleChange}
          onBlur={this.onBlur}
          onClick={this.onClick}
        />
      </div>
    )
  }
}

export default TextEditor;
