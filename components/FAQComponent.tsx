import { useState } from 'react';

export default function FAQComponent(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="facts">
      <h2 className="question" onClick={() => setOpen(!open)}>
        {props.faqquestion}
      </h2>
      {open && props.children}
    </div>
  );
}
