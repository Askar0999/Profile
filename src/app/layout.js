export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{ children }</body>
    </html>
  );
}
function Mycomponent({ object }) {
  if (!object) return null;
  return (
    <div>
      { object?.type} {/* Безопасный доступ к свойству*/}
    </div>
  );
}