// app/layout.jsx
export const metadata = {
  title: 'Coming Soon',
  description: 'Basic coming soon site with motion',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif', backgroundColor: '#121212' }}>
        {children}
      </body>
    </html>
  );
}