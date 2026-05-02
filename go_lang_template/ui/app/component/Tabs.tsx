import React, { useState, type ReactNode } from 'react';

export interface TabItem {
  id: string;
  label: string;
  icon?: ReactNode; // Optional: for adding Bootstrap icons
  content: ReactNode;
  disabled?: boolean;
}

interface TabProps {
  tabs: TabItem[];
  activeTabId?: string; // Optional: if you want to control it from outside
  onTabChange?: (id: string) => void;
  variant?: 'tabs' | 'pills'; // Bootstrap supports both styles
}


export const Tabs: React.FC<TabProps> = ({ 
  tabs, 
  activeTabId, 
  onTabChange, 
  variant = 'tabs' 
}) => {
  // Internal state if no activeTabId is provided from props
  const [internalActiveTab, setInternalActiveTab] = useState(tabs[0]?.id);

  const currentTab = activeTabId || internalActiveTab;

  const handleTabClick = (id: string) => {
    if (onTabChange) {
      onTabChange(id);
    } else {
      setInternalActiveTab(id);
    }
  };

  return (
    <div>
      {/* Tab Navigation */}
      <ul className={`nav nav-${variant} mb-3`} role="tablist">
        {tabs.map((tab) => (
          <li className="nav-item" key={tab.id} role="presentation">
            <button
              className={`nav-link ${currentTab === tab.id ? 'active' : ''} ${tab.disabled ? 'disabled' : ''}`}
              onClick={() => handleTabClick(tab.id)}
              type="button"
              role="tab"
              aria-selected={currentTab === tab.id}
            >
              {tab.icon && <span className="me-2">{tab.icon}</span>}
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Tab Content */}
      <div className="tab-content">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab-pane fade ${currentTab === tab.id ? 'show active' : ''}`}
            role="tabpanel"
          >
            {/* Optimization: Only render content if it's the active tab */}
            {currentTab === tab.id && tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};