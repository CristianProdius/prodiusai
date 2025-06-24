import Tag from "@/modules/landing/ui/components/Tag";
import Link from "next/link";

export default function TermsOfServicePage() {
  const lastUpdated = "January 15, 2025";
  const effectiveDate = "January 15, 2025";

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <section className="py-16 lg:py-24">
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <Tag>Legal</Tag>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-6">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600 mt-4">
              Last updated: {lastUpdated} | Effective: {effectiveDate}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl mb-8">
              <p className="text-gray-700 mb-0">
                Welcome to our AI Sales Training Platform. These Terms of
                Service ("Terms") govern your use of our services. By accessing
                or using our platform, you agree to be bound by these Terms.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 mb-4">
              By creating an account or using our services, you confirm that:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>You are at least 18 years old</li>
              <li>You have the legal capacity to enter into these Terms</li>
              <li>
                You have read, understood, and agree to be bound by these Terms
              </li>
              <li>
                If using on behalf of an organization, you have authority to
                bind that organization
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              2. Description of Service
            </h2>
            <p className="text-gray-700 mb-4">
              Our AI Sales Training Platform provides:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>AI-powered conversation simulation for sales training</li>
              <li>Personalized coaching and feedback</li>
              <li>Performance analytics and insights</li>
              <li>Team management and progress tracking</li>
              <li>Custom scenario creation and role-playing</li>
              <li>Integration with sales methodologies and best practices</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              3. Account Registration and Security
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Account Creation
            </h3>
            <p className="text-gray-700 mb-4">To use our services, you must:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and update your information as needed</li>
              <li>Choose a strong, secure password</li>
              <li>Not share your account credentials with others</li>
              <li>Not create multiple accounts without permission</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Account Security
            </h3>
            <p className="text-gray-700 mb-4">You are responsible for:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Maintaining the confidentiality of your account</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
              <li>Ensuring your team members comply with these Terms</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              4. Subscription and Billing
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Subscription Plans
            </h3>
            <p className="text-gray-700 mb-4">
              We offer various subscription plans with different features and
              limits. By subscribing:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>You authorize us to charge your payment method</li>
              <li>Subscriptions automatically renew unless cancelled</li>
              <li>You can upgrade, downgrade, or cancel anytime</li>
              <li>Changes take effect at the next billing cycle</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Payment Terms
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>All fees are in USD unless otherwise specified</li>
              <li>Payments are processed securely through Polar</li>
              <li>Applicable taxes will be added to the listed prices</li>
              <li>We reserve the right to change prices with 30 days notice</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Refund Policy
            </h3>
            <p className="text-gray-700 mb-4">
              We offer a 14-day money-back guarantee for new subscriptions.
              Refunds are not available for:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Renewal periods</li>
              <li>Partial months of service</li>
              <li>Accounts terminated for Terms violations</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              5. Acceptable Use Policy
            </h2>
            <p className="text-gray-700 mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Use the service for any illegal or unauthorized purpose</li>
              <li>Violate any laws in your jurisdiction</li>
              <li>Harass, abuse, or harm others</li>
              <li>Impersonate any person or entity</li>
              <li>Reverse engineer or attempt to extract source code</li>
              <li>Interfere with or disrupt the service</li>
              <li>Use automated systems to access the service</li>
              <li>Share inappropriate or offensive content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              6. Intellectual Property Rights
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Our Property
            </h3>
            <p className="text-gray-700 mb-4">We retain all rights to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>The platform and all its features</li>
              <li>Our AI models and training algorithms</li>
              <li>Our brand, logos, and trademarks</li>
              <li>All content we create or provide</li>
              <li>Aggregated and anonymized usage data</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Your Content
            </h3>
            <p className="text-gray-700 mb-4">
              You retain ownership of content you create, but grant us a license
              to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Store, process, and display your content</li>
              <li>Use it to provide and improve our services</li>
              <li>Create anonymized insights from your usage</li>
              <li>Share it with your team members as authorized</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              7. AI Services and Limitations
            </h2>
            <p className="text-gray-700 mb-4">
              Regarding our AI-powered features:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                AI responses are generated based on training data and may not
                always be accurate
              </li>
              <li>
                You should not rely solely on AI feedback for critical business
                decisions
              </li>
              <li>
                We continuously improve our models but cannot guarantee specific
                outcomes
              </li>
              <li>AI interactions are for training purposes only</li>
              <li>
                You are responsible for applying learned skills appropriately
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              8. Privacy and Data Protection
            </h2>
            <p className="text-gray-700 mb-4">
              Your use of our services is subject to our{" "}
              <Link href="/privacy" className="text-blue-600 hover:underline">
                Privacy Policy
              </Link>
              , which explains how we collect, use, and protect your
              information. By using our services, you consent to our data
              practices as described in the Privacy Policy.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              9. Disclaimers and Limitations of Liability
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Service Disclaimer
            </h3>
            <p className="text-gray-700 mb-4">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
              WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
              LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE, OR NON-INFRINGEMENT.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Limitation of Liability
            </h3>
            <p className="text-gray-700 mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR
              ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
              DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED
              DIRECTLY OR INDIRECTLY.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              10. Indemnification
            </h2>
            <p className="text-gray-700 mb-4">
              You agree to indemnify and hold harmless Prodius Enterprise and
              its officers, directors, employees, and agents from any claims,
              damages, losses, liabilities, and expenses (including legal fees)
              arising from:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Your use of the service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
              <li>Any content you submit or share</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              11. Termination
            </h2>
            <p className="text-gray-700 mb-4">
              Either party may terminate these Terms:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>You may cancel your account at any time</li>
              <li>
                We may suspend or terminate your access for Terms violations
              </li>
              <li>
                Upon termination, your right to use the service ceases
                immediately
              </li>
              <li>We may retain certain data as required by law</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              12. Modifications to Terms
            </h2>
            <p className="text-gray-700 mb-4">
              We may modify these Terms at any time. If we make material
              changes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>We will notify you via email or in-app notification</li>
              <li>You'll have 30 days to review the changes</li>
              <li>
                Continued use after the effective date constitutes acceptance
              </li>
              <li>If you disagree, you may terminate your account</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              13. Governing Law and Dispute Resolution
            </h2>
            <p className="text-gray-700 mb-4">
              These Terms are governed by the laws of the State of California,
              United States, without regard to conflict of law principles.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              14. General Provisions
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Entire Agreement:</strong> These Terms constitute the
                entire agreement between you and us
              </li>
              <li>
                <strong>Severability:</strong> If any provision is
                unenforceable, the rest remains in effect
              </li>
              <li>
                <strong>Waiver:</strong> Failure to enforce any right is not a
                waiver of that right
              </li>
              <li>
                <strong>Assignment:</strong> You may not assign these Terms
                without our consent
              </li>
              <li>
                <strong>Force Majeure:</strong> Neither party is liable for
                delays due to circumstances beyond their control
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              15. Contact Information
            </h2>
            <p className="text-gray-700 mb-4">
              For questions about these Terms, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Support:</strong> cristian@prodiusenterprise.com
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> Prodius Enterprise
                <br />
                San Francisco, CA 94107
              </p>
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
              <p className="text-gray-700 text-sm mb-0">
                By using our AI Sales Training Platform, you acknowledge that
                you have read, understood, and agree to be bound by these Terms
                of Service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
