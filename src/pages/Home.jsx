import Nav from '../components/Nav'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Nav />
      <main className="flex min-h-[70vh] items-center justify-center p-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Home</h1>
      </main>
    </div>
  )
}
