"use client";

const BRAND = process.env.NEXT_PUBLIC_BRAND_NAME || "Meow Ji";

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] px-6 py-10">
      <div className="max-w-4xl mx-auto">
        
        <h1 className="text-4xl font-bold text-[var(--accent)] mb-6">
          Terms & Conditions
        </h1>

        <p className="text-[var(--muted)] mb-10">
          Last updated: December 2025
        </p>

        <p className="mb-6 leading-relaxed">
          Welcome to <strong>{BRAND}</strong>. By using our website or
          buying from us, you agree to these rules. If you do not agree,
          please do not use our site.
        </p>

        {/* 1 */}
        <h2 className="text-2xl font-semibold text-[var(--accent)] mb-3">
          1. Using Our Site
        </h2>
        <p className="mb-6 leading-relaxed">
          You agree to use {BRAND} only for legal reasons.
          <br /><br />
          You must give correct details when you buy, like your
          game ID and server. If you give wrong details, your top-up might fail, and we cannot fix it.
        </p>

        {/* 2 */}
        <h2 className="text-2xl font-semibold text-[var(--accent)] mb-3">
          2. Orders & Top-Ups
        </h2>
        <p className="mb-6 leading-relaxed">
          • All orders are done automatically or checked by us.  
          <br />
          • Once a top-up is sent, the sale is final.  
          <br />
          • We are not responsible if you type the wrong game ID or server.
          <br /><br />
          When you buy, you promise that you own the game account or have
          permission to use it.
        </p>

        {/* 3 */}
        <h2 className="text-2xl font-semibold text-[var(--accent)] mb-3">
          3. Payments
        </h2>
        <p className="mb-6 leading-relaxed">
          Payments go through safe third-party tools.
          {BRAND} does not save your card details or UPI PIN.
          <br /><br />
          Orders might be delayed or cancelled if payment fails or if we spot a scam.
        </p>

        {/* 4 */}
        <h2 className="text-2xl font-semibold text-[var(--accent)] mb-3">
          4. Refunds
        </h2>
        <p className="mb-6 leading-relaxed">
          Because game top-ups are sent instantly:
          <br /><br />
          • Completed top-ups are <strong>not refundable</strong>.  
          <br />
          • We only give refunds if your order fails and the game money is not added to your account.
        </p>

        {/* 5 */}
        <h2 className="text-2xl font-semibold text-[var(--accent)] mb-3">
          5. Things You Cannot Do
        </h2>
        <p className="mb-6 leading-relaxed">
          You must not:
          <br /><br />
          • Try to cheat our prices or use bugs  
          <br />
          • Use stolen credit cards  
          <br />
          • Hack or attack our website  
          <br />
          • Sell our services to others without our permission
        </p>

        {/* 6 */}
        <h2 className="text-2xl font-semibold text-[var(--accent)] mb-3">
          6. Game Names & Logos
        </h2>
        <p className="mb-6 leading-relaxed">
          {BRAND} is an independent website. We are <strong>not partnered with</strong> any game creators.
          <br /><br />
          All game names and logos belong to their real owners.
        </p>

        {/* 7 */}
        <h2 className="text-2xl font-semibold text-[var(--accent)] mb-3">
          7. Our Limits
        </h2>
        <p className="mb-6 leading-relaxed">
          {BRAND} is not responsible for:
          <br /><br />
          • Money lost because you typed wrong details  
          <br />
          • Delays caused by the game server or internet issues  
          <br />
          • Your game account getting banned  
        </p>

        {/* 8 */}
        <h2 className="text-2xl font-semibold text-[var(--accent)] mb-3">
          8. Changes to These Rules
        </h2>
        <p className="leading-relaxed">
          {BRAND} can change these rules at any time.
          We will post the new rules here. If you keep using our site, you agree to the new rules.
        </p>
      </div>
    </main>
  );
}
