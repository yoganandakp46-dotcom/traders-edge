import React from 'react';
import { useTheme } from './ThemeProvider';

export default function PremiumCard({ children, style, ...rest }) {
  const { theme } = useTheme();
  return (
    <div
      style={{
        borderRadius: theme.radius,
        boxShadow: theme.shadow,
        background: theme.surface,
        border: theme.glass ? undefined : `1px solid ${theme.border}`,
        padding: 28,
        ...style,
        ...(theme.glass ? { backdropFilter: 'blur(13px)' } : {}),
      }}
      {...rest}
    >
      {children}
    </div>
  );
}