import PageIllustration from '@/components/page-illustration'
<link rel="stylesheet" href="http://localhost:3000/_next/static/css/app/layout.css?v=1690813228735" as="style" />

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <main className="grow">

      <PageIllustration />

      {children}

    </main>
  )
}
