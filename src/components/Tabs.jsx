import { tabList0 } from '../constants/constants';
import { useState } from 'react';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isFading, setIsFading] = useState(false);

    const handleTabChange = (idx) => {
        setIsFading(true); // Start fade-out & scale down
        setTimeout(() => {
            setActiveTab(idx);
            setIsFading(false); // Start fade-in & scale up
        }, 250); // Delay matches transition duration
    };

    return (
        <div className="relative flex flex-col-reverse lg:flex-row">
            {/* Tab List */}
            <ul className="lg:w-1/2 flex flex-col md:flex-row lg:flex-col">
                {tabList0.map((tab, idx) => (
                    <li key={tab.id} className="relative">
                        <button
                            onClick={() => handleTabChange(idx)}
                            aria-selected={activeTab === idx}
                            aria-controls={`tab-panel-${idx}`}
                            className="w-full py-7 px-5 lg:py-4 lg:pl-12 flex flex-col text-left focus:outline-none cursor-pointer"
                        >
                            {/* Active Indicator */}
                            <div className={`absolute w-[4px] h-full md:w-full md:h-[4px] lg:w-[4px] lg:h-full left-0 top-0 transition-all duration-500 ${activeTab === idx ? 'bg-blue' : 'bg-indigo-100'}`} />
                            
                            <h5 className="text-lg lg:text-[1.75rem] font-semibold text-gray-800">{tab.txtLg}</h5>
                            <p className="text-gray-500 leading-relaxed mt-1.5">{tab.txtSm}</p>
                        </button>
                    </li>
                ))}
            </ul>

            {/* Tab Content - Image with Smooth Fade & Scale Animation */}
            <div className="md:max-w-[400px] lg:w-1/2 mx-auto">
                <img
                    id={`tab-panel-${activeTab}`}
                    src={tabList0[activeTab]?.imgSrc}
                    alt={`Tab ${activeTab}`}
                    className={`object-cover w-full h-full transition-all duration-500 ease-out transform ${isFading ? 'opacity-0 scale-95' : 'opacity-100 scale-100 lg:scale-110'}`}
                />
            </div>
        </div>
    );
};

export default Tabs;
