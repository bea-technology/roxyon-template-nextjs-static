import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Next.js on Roxyon</h1>
      <p>
        This page was built with <code>next build</code> as a static export. Edit <code>app/page.js</code> and run{' '}
        <code>roxyon deploy</code>.
      </p>
      <p>
        <Link href="/about/">About this template</Link>
      </p>
    </main>
  );
}
