import HowUProWorks from "@/components/HowUProWorks";

// Server Component - rendered on the server
export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome to Builders</h1>
          <p className="text-muted-foreground">
            Demonstrating Server vs Client Components with TanStack Query
          </p>
        </div>
        <HowUProWorks />
      </div>
    </div>
  );
}
