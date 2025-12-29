import { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

interface Section {
  label: string;
  title: string;
  content: string;
  order: number;
}

interface HomePageProps {
  sections: Section[];
}

const HomePage = ({ sections }: HomePageProps) => {
  const [currentSection, setCurrentSection] = useState(0);

  return (
    <>
      <style>{`
        .section {
          padding: 40px 20px;
          box-sizing: border-box;
          display: flex !important;
          flex-direction: column;
          justify-content: flex-start;
        }
        .fp-watermark {
          display: none !important;
        }
        .section-label {
          font-size: 1em;
          color: #0000aa;
          margin-bottom: 10px;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: bold;
        }

        .section-title {
          font-size: 2em;
          margin-bottom: 30px;
          line-height: 1.2;
        }

        .section-content {
          font-size: 1.5em;
          line-height: 1.8;
          color: #404040;
        }

        .section-content p {
          margin-bottom: 20px;
        }

        .section-content h3 {
          font-size: 1.2em;
          color: #0000aa;
          margin: 30px 0 10px 0;
          font-weight: bold;
        }

        .section-content ul {
          list-style-type: none;
          padding: 0;
        }

        .section-content li {
          margin: 30px 0;
          font-size: 1.13em;
        }

        .section-content a {
          color: #404040;
          text-decoration: none;
        }

        .section-content a::before {
          content: '→ ';
        }

        .section-content a:hover {
          color: #0000aa !important;
          text-decoration: underline;
        }

        .scroll-indicator {
          position: fixed;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 10px;
          z-index: 1000;
          pointer-events: auto;
        }

        .scroll-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #808080;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid #404040;
        }

        .scroll-dot.active {
          background-color: #0000aa;
          transform: scale(1.3);
          border-color: #0000aa;
        }

        .scroll-dot:hover {
          background-color: #0000aa;
          border-color: #0000aa;
        }

        #fp-nav ul li a span {
          background-color: #808080 !important;
          border: 2px solid #404040 !important;
        }

        #fp-nav ul li a.active span {
          background-color: #0000aa !important;
          border-color: #0000aa !important;
        }

        @media screen and (max-width: 768px) {
          .section {
            padding: 20px 15px;
          }

          .section-title {
            font-size: 1.5em;
          }

          .section-content {
            font-size: 1.2em;
          }

          .section-content li {
            font-size: 1.08em !important;
            margin: 20px 0 !important;
          }

          .scroll-indicator {
            right: 10px;
          }

          .scroll-dot {
            width: 10px;
            height: 10px;
          }
        }
      `}</style>

      <ReactFullpage
        licenseKey={'OPEN-SOURCE-GPLV3-LICENSE'} 
        scrollingSpeed={500}
        navigation={true}
        navigationPosition={'right'}
        showActiveTooltip={true}
        slidesNavigation={false}
        controlArrows={false}
        keyboardScrolling={true}
        afterLoad={(origin, destination) => {
          setCurrentSection(destination.index);
        }}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              {sections.map((section, index) => (
                <div key={index} className="section">
                  <div className="section-label">{section.label}</div>
                  <h1 className="section-title">{section.title}</h1>
                  <div 
                    className="section-content"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </div>
              ))}
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};

export default HomePage;
