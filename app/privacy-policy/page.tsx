"use client";

const BRAND = process.env.NEXT_PUBLIC_BRAND_NAME || "Meow Ji";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[var(--accent)] mb-6">
          Privacy Policy
        </h1>

        <p className="text-[var(--muted)] mb-10">
          Last updated: December 2025
        </p>

        <p className="mb-6 leading-relaxed">
          At <strong>{BRAND}</strong>, we care about your privacy. This page explains how
          we collect and use your data when you use our website.
        </p>

        {/* 1 */}
        <h2 className="text-2xl font-semibold text-[var(--accent)] mb-3">
          1. What We Collect
        </h2>
        <p className="mb-6 leading-relaxed">
          We may collect:
          <br /><br />
          <strong>• Your Details</strong> — like email, phone number, game ID, and your past orders.
          <br /><br />
          <strong>• Payment Info</strong> — payments go through safe third-party tools. We do not save your card or UPI details.
          <br /><br />
          <strong>• Website Usage</strong> — like IP address and pages you visit, to keep our site safe and working well.
        </p>

        {/* 2 */}
        <h2 className="text-2xl font-semibold text-[var(--accent)] mb-3">
          2. How We Use Your Data
        </h2>
        <p className="mb-6 leading-relaxed">
          We use your data to:
          <br /><br />
          • Send game top-ups to your account  
          <br />
          • Keep our platform safe from scams  
          <br />
          • Help you with your orders  
          <br />
          • Make our website better  
          <br /><br />
          We do <strong>not</strong> sell your details to others.
        </p>

        {/* 3 */}
        <h2 className="text-2xl font-semibold text-[var(--accent)] mb-3">
          3. Cookies
        </h2>
        <p className="mb-6 leading-relaxed">
          We use cookies to:
          <br /><br />
          • Remember your choices  
          <br />
          • Keep you logged in  
          <br />
          • See how many people visit our site  
          <br /><br />
          You can turn off cookies in your browser, but some parts of the site might not work well.
        </p>

        {/* 4 */}
        <h2 className="text-2xl font-semibold text-[var(--accent)] mb-3">
          4. Third-Party Tools
        </h2>
        <p className="mb-6 leading-relaxed">
          We use safe third-party tools for:
          <br /><br />
          • Taking payments  
          <br />
          • Checking website speed  
          <br />
          • Hosting our site  
          <br /><br />
          These tools have their own privacy rules.
        </p>

        {/* 5 */}
        <h2 className="text-2xl font-semibold text-[var(--accent)] mb-3">
          5. Data Safety
        </h2>
        <p className="mb-6 leading-relaxed">
          We work hard to protect your data, but no online site is 100% safe.
        </p>

        {/* 6 */}
        <h2 className="text-2xl font-semibold text-[var(--accent)] mb-3">
          6. Your Rights
        </h2>
        <p className="mb-6 leading-relaxed">
          You can ask us to:
          <br /><br />
          • Show you the data we have about you  
          <br />
          • Fix wrong details  
          <br />
          • Delete your data  
          <br /><br />
          To ask for this, go to our{" "}
          <a href="/contact" className="text-[var(--accent)] hover:underline">
            Contact Page
          </a>.
        </p>

        {/* 7 */}
        <h2 className="text-2xl font-semibold text-[var(--accent)] mb-3">
          7. Policy Updates
        </h2>
        <p className="mb-6 leading-relaxed">
          We might change this policy from time to time. We will update the date at the top when we do.
        </p>

        <p className="leading-relaxed">
          If you have questions, please talk to{" "}
          <a href="/contact" className="text-[var(--accent)] hover:underline">
            {BRAND} Support
          </a>.
        </p>
      </div>
    </main>
  );
}
