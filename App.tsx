
import React, { useState } from 'react';
import InitialDashboard from './views/InitialDashboard';
import Onboarding from './views/Onboarding';
import FullPortal from './views/FullPortal';
import { AppView } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>('DASHBOARD');

  const handleInitialDashboardComplete = () => {
    setCurrentView('ONBOARDING');
  };

  const handleOnboardingComplete = () => {
    setCurrentView('PORTAL');
  };

  return (
    <div className="w-full h-screen bg-gray-100 flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-[1440px] h-full max-h-[900px] bg-white rounded-[3rem] shadow-2xl overflow-hidden relative flex border border-white/50">
        {currentView === 'DASHBOARD' && (
          <InitialDashboard onTransition={handleInitialDashboardComplete} />
        )}
        
        {currentView === 'ONBOARDING' && (
          <Onboarding onComplete={handleOnboardingComplete} />
        )}

        {currentView === 'PORTAL' && (
          <FullPortal />
        )}
      </div>
    </div>
  );
};

export default App;
