import React, { useEffect, useRef } from 'react';
import Header from "../Header";
import Footer from "../Footer";
import "./index.css"

const TRADINGVIEW_SCRIPT_URL = 'https://s3.tradingview.com/tv.js'; // Consider checking for updates

function TradingViewWidget() {
  const containerRef = useRef(null);
  const scriptLoadingPromiseRef = useRef(null);

  useEffect(() => {
    scriptLoadingPromiseRef.current = new Promise((resolve) => {
      const script = document.createElement('script');
      script.id = 'tradingview-widget-loading-script';
      script.src = TRADINGVIEW_SCRIPT_URL;
      script.type = 'text/javascript';
      script.onload = resolve;

      document.head.appendChild(script);
    });

    scriptLoadingPromiseRef.current.then(() => {
      if (containerRef.current && window.TradingView) {
        // Create the TradingView widget only if container exists and library is loaded
        new window.TradingView.widget({
          container_id: containerRef.current.id,
          "width": "100%",
          "height": "610",
          symbol: 'NASDAQ:AAPL', // Replace with your desired symbol
          interval: 'D',
          timezone: 'Etc/UTC',
          theme: 'dark',
          style: '1',
          locale: 'en',
          enable_publishing: false,
          allow_symbol_change: true,
        });
      }
    });

    // Cleanup function to remove script on unmount
    return () => {
      const script = document.getElementById('tradingview-widget-loading-script');
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, []); // Empty dependency array to run only once on initial render

  return (
    <div className='tradingview-widget-container'>
      <Header/>
      <div id="tradingview_widget" ref={containerRef} />
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noreferrer nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
      <h1 className='future'>Remaining functions are updated in FUTURE versions</h1>
      <Footer/>
    </div>
  );
}

export default TradingViewWidget;
