import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Code, Database, Monitor, ChevronRight } from 'lucide-react';

interface DevOpsStageProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  active: boolean;
}

const DevOpsStage: React.FC<DevOpsStageProps> = ({ icon, title, description, active }) => (
  <div
    className={`flex flex-col items-center p-4 ${active ? 'scale-110' : 'opacity-50'} transition-all duration-300`}
  >
    <div
      className={`mb-2 flex h-10 w-10 items-center justify-center border-2 text-green-800 ${active ? 'border-green-800 bg-green-100' : 'border-gray-300'}`}
      style={{ imageRendering: 'pixelated' }}
    >
      {icon}
    </div>
    <h3 className='font-pixel mb-1 text-lg'>{title}</h3>
    <p className='text-center text-sm text-gray-600'>{description}</p>
  </div>
);

const DevOpsSection: React.FC = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const stages = [
    { icon: <Globe size={20} />, title: t('planTitle'), description: t('planDesc') },
    { icon: <Code size={20} />, title: t('codeTitle'), description: t('codeDesc') },
    { icon: <Database size={20} />, title: t('buildTitle'), description: t('buildDesc') },
    { icon: <Monitor size={20} />, title: t('testTitle'), description: t('testDesc') },
    { icon: <ChevronRight size={20} />, title: t('releaseTitle'), description: t('releaseDesc') },
    { icon: <Database size={20} />, title: t('deployTitle'), description: t('deployDesc') },
    { icon: <Globe size={20} />, title: t('operateTitle'), description: t('operateDesc') },
    { icon: <Monitor size={20} />, title: t('monitorTitle'), description: t('monitorDesc') }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % stages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [stages.length]);

  return (
    <section id='devops' className='bg-gray-100 py-16'>
      <div className='mx-auto max-w-6xl px-4'>
        <h2 className='font-pixel mb-8 border-l-4 border-green-800 pl-4 text-3xl'>
          {t('devOpsTitle')}
        </h2>
        <div
          className='border-2 border-gray-300 bg-white p-6'
          style={{ imageRendering: 'pixelated', boxShadow: '4px 4px 0 rgba(0,0,0,0.1)' }}
        >
          <div className='flex flex-wrap justify-center'>
            {stages.map((stage, index) => (
              <DevOpsStage key={index} {...stage} active={activeIndex === index} />
            ))}
          </div>

          <div
            className='mt-8 h-4 overflow-hidden border-2 border-gray-300 bg-gray-200'
            style={{ imageRendering: 'pixelated' }}
          >
            <div
              className='h-full bg-green-800 transition-all duration-700 ease-in-out'
              style={{ width: `${((activeIndex + 1) / stages.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevOpsSection;
