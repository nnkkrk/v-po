"use client";

const BRAND = process.env.NEXT_PUBLIC_BRAND_NAME || "Meow Ji";

export default function RefundPolicy() {
    return (
        <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] px-6 py-10">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-[var(--accent)] mb-6">
                    Refund Policy
                </h1>

                <p className="text-[var(--muted)] mb-10">
                    Last updated: February 2026
                </p>

                <p className="mb-6 leading-relaxed">
                    At <strong>{BRAND}</strong>, we try to make top-ups simple and reliable.
                    Please read this policy before buying, so you know when you can get a refund.
                </p>

                {/* 1 */}
                <h2 className="text-2xl font-semibold text-[var(--accent)] mb-3">
                    1. Digital Goods
                </h2>
                <p className="mb-6 leading-relaxed">
                    Because game top-ups are digital, all sales are final.
                    Once a top-up is sent to your Game ID, we cannot take it back or refund your money.
                </p>

                {/* 2 */}
                <h2 className="text-2xl font-semibold text-[var(--accent)] mb-3">
                    2. No Refunds For
                </h2>
                <p className="mb-6 leading-relaxed">
                    We will <strong>not</strong> give a refund if:
                    <br /><br />
                    • <strong>Wrong Details:</strong> You gave us the wrong Game ID or Server and we already sent the top-up.
                    <br />
                    • <strong>Changed Mind:</strong> You decide you don't want the game money after you paid.
                    <br />
                    • <strong>Account Problems:</strong> Your game account gets banned for reasons not related to us.
                    <br />
                    • <strong>Used Items:</strong> You already used the game money.
                </p>

                {/* 3 */}
                <h2 className="text-2xl font-semibold text-[var(--accent)] mb-3">
                    3. When You Can Get a Refund
                </h2>
                <p className="mb-6 leading-relaxed">
                    You can ask for a refund if:
                    <br /><br />
                    • <strong>System Error:</strong> You paid but the top-up was not sent due to a problem on our side.
                    <br />
                    • <strong>Double Charge:</strong> You were charged two times for one order.
                    <br />
                    • <strong>Out of Stock:</strong> The service you bought is not available after you paid.
                </p>

                {/* 4 */}
                <h2 className="text-2xl font-semibold text-[var(--accent)] mb-3">
                    4. How to Get a Refund
                </h2>
                <p className="mb-6 leading-relaxed">
                    To ask for a refund:
                    <br /><br />
                    1. Talk to our support team on the <a href="/contact" className="text-[var(--accent)] hover:underline">Contact Page</a> within 24 hours of your order.
                    2. Give us your Order ID and tell us why you need a refund.
                    3. Add a picture of your payment receipt.
                    <br /><br />
                    We will check your request. If approved, we will send your money back in 5-7 days.
                </p>

                {/* 5 */}
                <h2 className="text-2xl font-semibold text-[var(--accent)] mb-3">
                    5. Bank Disputes
                </h2>
                <p className="mb-6 leading-relaxed">
                    If you dispute a payment with your bank without talking to us first,
                    we may block your {BRAND} account and report your Game ID to the game makers.
                </p>

                <p className="leading-relaxed mt-10">
                    If you need help, please contact{" "}
                    <a href="/contact" className="text-[var(--accent)] hover:underline">
                        {BRAND} Support
                    </a>.
                </p>
            </div>
        </main>
    );
}
