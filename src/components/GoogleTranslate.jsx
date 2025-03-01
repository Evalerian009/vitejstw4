import { useEffect, useState } from 'react'

const GoogleTranslate = () => {
  const [ open, setOpen ] = useState(false)

  const handler = () =>((
    setOpen(!open)
  ))
  
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false
      },
      "google_translate_element"
      );
    };
    useEffect(() => {
      var addScript = document.createElement("script");
      addScript.setAttribute(
        "src",
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      );
      document.body.appendChild(addScript);
      window.googleTranslateElementInit = googleTranslateElementInit;
    }, []);

  return (
    <div className={`fixed z-[999999] bottom-[50px] left-[20px] md:left-[10px]  hover:bg-[#282929] ${open ? 'rounded-lg bg-[#282929]' : 'rounded-full bg-[#28292953]'} duration-200 p-2 text-white  flex flex-col items-center`}>
      <button className='w-[40px] h-[40px] md:w-[45px] md:h-[45px]' onClick={handler}>
        <img src='./google-translate-logo.png' alt='google-translate' className='w-full h-full' />
      </button>
      <div id="google_translate_element" className={`${open ? 'inline-block' : 'hidden'} transition-all duration-150`} />
    </div>
  )
}

export default GoogleTranslate