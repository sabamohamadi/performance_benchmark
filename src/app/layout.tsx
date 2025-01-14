export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900">
        <main className="container mx-auto px-4">
          {children}
        </main>
      </body>
    </html>
  )
} 