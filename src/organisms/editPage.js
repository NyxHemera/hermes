import React from 'react';
import VerticalDivider from '../atoms/verticalDivider';

import "./editPage.scss";
import TextEditor from '../atoms/textEditor';

const EditPage = () => {
  return (
    <div className="editPage__block">
        <TextEditor 
          placeholder="Tell your story..."
        />
        <VerticalDivider />
        <div style={{ width: '100%' }}>

        </div>
    </div>
  );
}

export default EditPage;
