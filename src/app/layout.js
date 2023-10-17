import * as React from 'react';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ height: '100%' }}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
