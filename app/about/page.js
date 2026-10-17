import Link from 'next/link';

export const metadata = { title: 'About' };

export default function About() {
  return (
    <main>
      <h1>About</h1>
      <p>
        Static export means no server: API routes, server actions and on-request rendering are not available. For
        those, deploy Next.js as a server app instead (<code>&quot;runtime&quot;: &quot;node&quot;</code>,{' '}
        <code>&quot;preset&quot;: &quot;nextjs&quot;</code> in <code>roxyon.json</code>).
      </p>
      <p>
        <Link href="/">Home</Link>
      </p>
    </main>
  );
}
