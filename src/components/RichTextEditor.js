import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const DynamicReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const RichTextEditor = ({ value, onChange }) => {
  useEffect(() => {
    import('react-quill/dist/quill.snow.css');
  }, []);

  return (
    <DynamicReactQuill
      theme="snow"
      value={value}
      onChange={onChange}
    />
  );
};

export default RichTextEditor;
