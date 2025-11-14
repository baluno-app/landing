import Link from "next/link";

export const metadata = {
  title: "Terms of Use - Baluno",
  description: "Terms of Use for Baluno",
};

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <Link
          href="/"
          className="mb-8 inline-block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          ← Back to Home
        </Link>

        <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white">
          Terms of Use
        </h1>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Acceptance of Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              By accessing and using Baluno, you accept and agree to be bound by the terms and provision
              of this agreement.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Use License
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Permission is granted to temporarily download one copy of Baluno for personal,
              non-commercial transitory viewing only. This is the grant of a license, not a transfer
              of title.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software contained in Baluno</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Disclaimer
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The materials within Baluno are provided on an 'as is' basis. We make no warranties,
              expressed or implied, and hereby disclaim and negate all other warranties including,
              without limitation, implied warranties or conditions of merchantability, fitness for
              a particular purpose, or non-infringement of intellectual property or other violation
              of rights.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Limitations
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              In no event shall Baluno or its suppliers be liable for any damages (including, without
              limitation, damages for loss of data or profit, or due to business interruption) arising
              out of the use or inability to use Baluno.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Revisions and Errata
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The materials appearing in Baluno could include technical, typographical, or photographic
              errors. We do not warrant that any of the materials on Baluno are accurate, complete,
              or current.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Governing Law
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              These terms and conditions are governed by and construed in accordance with applicable laws.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Contact Information
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              If you have any questions about these Terms of Use, please contact us at:
              <br />
              <a href="mailto:support@baluno.app" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">
                support@baluno.app
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
