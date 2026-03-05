import React from 'react';
import PremiumCard from '../components/ui/PremiumCard';

export default function Dashboard() {
  return (
    <div style={{padding: 36, background: '#F7F7FB', minHeight: '100vh'}}>
      <h1 style={{fontSize: 28, fontWeight: 800, marginBottom: 30}}>Dashboard (Premium Demo)</h1>
      <div style={{display: 'flex', gap: 24}}>
        <PremiumCard>
          <div style={{fontSize: 18, fontWeight: 700}}>Balance</div>
          <div style={{fontSize: 34, fontWeight: 800, color: '#10B981'}}>$19,830.22</div>
        </PremiumCard>
        <PremiumCard>
          <div style={{fontSize: 18, fontWeight: 700}}>Win Rate</div>
          <div style={{fontSize: 34, fontWeight: 800, color: '#7C3AED'}}>57.8%</div>
        </PremiumCard>
      </div>
    </div>
  );
}