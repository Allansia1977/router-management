import React, { useState } from 'react';
import { GATEWAY_URL } from '../constants';
import { RouterIcon, ExternalLinkIcon, ChevronRightIcon } from './Icons';

export const ConnectCard: React.FC = () => {
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleConnect = () => {
    setIsRedirecting(true);
    // Short artificial delay to show the "active" state/feedback before browser navigates
    setTimeout(() => {
      window.location.href = GATEWAY_URL;
    }, 400);
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
      {/* Card Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-white text-center">
        <div className="mx-auto w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 ring-4 ring-white/10">
          <RouterIcon className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Gateway Access</h2>
        <p className="text-indigo-100 text-sm font-medium opacity-90">
          Secure Local Connection
        </p>
      </div>

      {/* Card Body */}
      <div className="p-8">
        <div className="mb-8 text-center">
          <p className="text-slate-600 mb-2">
            Connect to your local router interface at
          </p>
          <code className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md font-mono text-sm border border-slate-200">
            {GATEWAY_URL}
          </code>
        </div>

        <button
          onClick={handleConnect}
          disabled={isRedirecting}
          className={`
            group w-full relative flex items-center justify-center gap-3 py-4 px-6 
            bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 
            text-white font-semibold rounded-xl text-lg 
            transition-all duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-500/30
            shadow-lg shadow-indigo-500/20
            ${isRedirecting ? 'opacity-90 cursor-wait scale-[0.98]' : 'hover:-translate-y-0.5'}
          `}
          aria-label="Connect to Gateway"
        >
          {isRedirecting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Connecting...</span>
            </>
          ) : (
            <>
              <span>Connect Now</span>
              <ExternalLinkIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>
        
        <div className="mt-6 flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
             <div className="mt-0.5">
               <svg className="w-5 h-5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
             </div>
             <p className="text-xs text-slate-500 leading-relaxed">
               You may need to bypass a security warning if your router uses a self-signed certificate. This is normal for local devices.
             </p>
        </div>
      </div>
      
      {/* Quick Links / Footer inside card */}
      <div className="bg-slate-50 px-8 py-4 border-t border-slate-100 flex justify-between items-center text-xs text-slate-400">
         <span>Local Network</span>
         <span className="flex items-center gap-1">Status: <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Ready</span>
      </div>
    </div>
  );
};