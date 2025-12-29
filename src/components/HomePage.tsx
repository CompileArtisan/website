import { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

const HomePage = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    {
      label: "About",
      title: "Hey there! I'm Praanesh",
      content: (
        <>
          <p>
            I'm a tech-savvy person with a strong passion for automobiles. I go by the persona of "CompileArtisan", 
            a random name I chose for myself.
          </p>
          <p>
            I've been spending a lot of time tinkering with my laptop, ever since I first got my hands on one. 
            Over the course of time, I've learned a lot in various domains almost completely by accident. 
            This "accidental learning" was the thing that made tech as a whole so fun for me.
          </p>
        </>
      )
    },
    {
      label: "Connect",
      title: "Let's Connect",
      content: (
        <>
          <p>Find me on various platforms:</p>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ margin: '30px 0', fontSize: '1.7em' }}>
              <a href="https://github.com/CompileArtisan" style={{ color: '#404040', textDecoration: 'none' }}>
                → GitHub
              </a>
            </li>
            <li style={{ margin: '30px 0', fontSize: '1.7em' }}>
              <a href="https://www.linkedin.com/in/praanesh-nair/" style={{ color: '#404040', textDecoration: 'none' }}>
                → LinkedIn
              </a>
            </li>
            <li style={{ margin: '30px 0', fontSize: '1.7em' }}>
              <a href="https://www.instagram.com/praanesh_nair/" style={{ color: '#404040', textDecoration: 'none' }}>
                → Instagram
              </a>
            </li>
            <li style={{ margin: '30px 0', fontSize: '1.7em' }}>
              <a href="https://x.com/compileartisan" style={{ color: '#404040', textDecoration: 'none' }}>
                → X (Twitter)
              </a>
            </li>
          </ul>
        </>
      )
    },
    {
      label: "Subscribe",
      title: "Stay Updated",
      content: (
        <>
          <p>Subscribe to my RSS feed to get notified about new posts and updates.</p>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ margin: '30px 0', fontSize: '1.7em' }}>
              <a href="/rss.xml" style={{ color: '#404040', textDecoration: 'none' }}>
                → My RSS Feed
              </a>
            </li>
            <li style={{ margin: '30px 0', fontSize: '1.7em' }}>
              <a href="https://aboutfeeds.com/" style={{ color: '#404040', textDecoration: 'none' }}>
                → What is RSS?
              </a>
            </li>
          </ul>
        </>
      )
    },
    {
      label: "Community",
      title: "Web Community",
      content: (
        <>
          <p>
            This website is part of the amrita.town webring, a community of personal websites 
            that celebrate the independent web.
          </p>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ margin: '30px 0', fontSize: '1.7em' }}>
              <a href="https://amrita.town" style={{ color: '#404040', textDecoration: 'none' }}>
                → amrita.town
              </a>
            </li>
            <li style={{ margin: '30px 0', fontSize: '1.7em' }}>
              <a href="https://indieweb.org/webring" style={{ color: '#404040', textDecoration: 'none' }}>
                → What is a webring?
              </a>
            </li>
          </ul>
        </>
      )
    },
    {
      label: "Projects and Experience",
      title: "Recent Projects",
      content: (
        <>
          <div style={{ 
            marginBottom: '30px', 
            padding: '20px', 
            backgroundColor: '#dfdfdf', 
            border: '3px solid #0000aa' 
          }}>
            <h3 style={{ fontSize: '1.8em', color: '#0000aa', marginBottom: '10px' }}>
              Personal Website
            </h3>
            <p style={{ fontSize: '1.3em' }}>
              Built a unique BIOS-themed personal website using Astro, featuring custom CSS 
              and keyboard navigation inspired by classic computer interfaces.
            </p>
          </div>
          <div style={{ 
            marginBottom: '30px', 
            padding: '20px', 
            backgroundColor: '#dfdfdf', 
            border: '3px solid #0000aa' 
          }}>
            <h3 style={{ fontSize: '1.8em', color: '#0000aa', marginBottom: '10px' }}>
              Doom Emacs Configuration
            </h3>
            <p style={{ fontSize: '1.3em' }}>
              Developed a comprehensive Emacs configuration optimized for coding and writing, 
              featuring custom LSP setups and org-mode templates.
            </p>
          </div>
        </>
      )
    }
  ];

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
          color: #0000aa;
          line-height: 1.2;
        }

        .section-content p {
          font-size: 1.5em;
          line-height: 1.8;
          margin-bottom: 20px;
          color: #404040;
        }

        .section-content h3 {
          margin: 0;
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

          .section-content p {
            font-size: 1.2em;
          }

          .section-content ul li {
            font-size: 1.3em !important;
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
                  <div className="section-content">
                    {section.content}
                  </div>
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
