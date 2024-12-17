// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>My Application</h1>
        </header>
        <main>{children}</main>
        <footer>© 2024 My App</footer>
      </body>
    </html>
  );
}
