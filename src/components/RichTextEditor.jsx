import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const RichTextEditor = () => {
  const [editorData, setEditorData] = useState('');

  return (
    <div>
      <h3>Description</h3>
      <CKEditor
        editor={ClassicEditor}
        data={editorData}
        onChange={(event, editor) => {
          const data = editor.getData();
          setEditorData(data);
        }}
        config={{
          toolbar: [
            'bold', 'italic', 'underline', 'superscript', 'subscript',
            '|', 'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor',
            '|', 'alignment', 'numberedList', 'bulletedList',
            '|', 'insertTable', 'mediaEmbed', 'link', 'undo', 'redo', 'codeBlock'
          ],
          fontFamily: {
            options: ['default', 'Arial', 'Helvetica Neue', 'Courier New', 'Georgia'],
          },
        }}
      />
    </div>
  );
};

export default RichTextEditor;
