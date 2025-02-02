import { useState } from "react";
import Title from "../../../components/Title";
import { faqsData } from "../../../constants/constants";
import { styles } from "../../../constants/styles";

import PropTypes from 'prop-types';

const AccordionItem = ({ faq, isOpen, onClick }) => (
  <li className="border rounded-lg overflow-hidden">
    <button
      className="w-full p-3 text-left font-medium bg-gray-100 hover:bg-gray-200"
      onClick={onClick}
    >
      {faq.question}
    </button>
    <div
      className={`transition-[max-height] duration-300 ease-in-out overflow-hidden ${
        isOpen ? "max-h-[400px] opacity-100 p-3 bg-white border-t" : "max-h-0 opacity-0"
      }`}
    >
      {faq.answer}
    </div>
  </li>
);

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const middleIndex = Math.floor(faqsData.length / 2);
  const secondHalf = faqsData.slice(middleIndex);
  const firstHalf = faqsData.slice(0, middleIndex);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`${styles.padX} ${styles.padY}`}>
      <Title
        txt={"Everything you need to know about the product and billing."}
        lgheader="Frequently asked questions"
        smHeader={"FAQS"}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 gap-x-6 mt-14">
        <ul className="space-y-4">
          {firstHalf.map((faq, index) => (
            <AccordionItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </ul>
        <ul className="space-y-4">
          {secondHalf.map((faq, index) => (
            <AccordionItem
              key={index + middleIndex} 
              faq={faq}
              isOpen={openIndex === index + middleIndex}
              onClick={() => toggleFAQ(index + middleIndex)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

AccordionItem.propTypes = {
  faq: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Faqs;