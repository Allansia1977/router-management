import React from 'react';
import { ConnectCard } from './components/ConnectCard';
import { ShieldCheckIcon } from './components/Icons';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-slate-50 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-100 blur-3xl opacity-60 mix-blend-multiply"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-purple-100 blur-3xl opacity-60 mix-blend-multiply"></div>
        <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[40%] rounded-full bg-blue-50 blur-3xl opacity-50 mix-blend-multiply"></div>
      </div>

      <header className="relative z-10 w-full p-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md">
                L
            </div>
            <span className="font-bold text-slate-800 text-lg tracking-tight">LocalLink</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/60 backdrop-blur-md rounded-full border border-slate-200 shadow-sm">
            <ShieldCheckIcon className="w-4 h-4 text-emerald-600" />
            <span className="text-xs font-medium text-slate-600">Secure Environment</span>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-4 relative z-10">
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
             <div className="text-center mb-8 space-y-2">
                 <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                    Router Control Center
                 </h1>
                 <p className="text-lg text-slate-600 max-w-lg mx-auto">
                    Manage your local network settings securely.
                 </p>
             </div>
             
             <ConnectCard />
        </div>
      </main>

      <footer className="relative z-10 p-6 text-center text-slate-400 text-sm">
        <p>&copy; {new Date().getFullYear()} LocalLink. Designed for local network administration.</p>
      </footer>
    </div>
  );
};

export default App;