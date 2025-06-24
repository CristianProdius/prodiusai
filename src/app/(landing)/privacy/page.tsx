import Tag from "@/modules/landing/ui/components/Tag";

export default function PrivacyPolicyPage() {
  const lastUpdated = "June 15, 2025";
  const effectiveDate = "June 15, 2025";

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <section className="py-16 lg:py-24">
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <Tag>Legal</Tag>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 mt-4">
              Last updated: {lastUpdated} | Effective: {effectiveDate}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl mb-8">
              <p className="text-gray-700 mb-0">
                Your privacy is important to us. This Privacy Policy explains
                how we collect, use, disclose, and safeguard your information
                when you use our AI-powered sales training platform.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              1. Information We Collect
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Personal Information
            </h3>
            <p className="text-gray-700 mb-4">
              When you register for an account, we collect:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Name and email address</li>
              <li>Company name and job title</li>
              <li>Billing information (processed securely through Polar)</li>
              <li>Profile information you choose to provide</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Usage Information
            </h3>
            <p className="text-gray-700 mb-4">
              We automatically collect information about how you interact with
              our platform:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Training session data and performance metrics</li>
              <li>AI conversation logs for quality improvement</li>
              <li>Feature usage patterns and preferences</li>
              <li>Device information and IP addresses</li>
              <li>Browser type and operating system</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              AI Training Data
            </h3>
            <p className="text-gray-700 mb-4">Our AI system processes:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Conversation transcripts from training sessions</li>
              <li>Performance analytics and improvement areas</li>
              <li>Custom scenarios and role-play data</li>
              <li>Feedback and coaching notes</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-4">
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Provide and maintain our AI sales training platform</li>
              <li>Personalize your training experience</li>
              <li>Generate performance insights and recommendations</li>
              <li>Process payments and manage subscriptions</li>
              <li>Send important service updates and notifications</li>
              <li>Improve our AI models and training scenarios</li>
              <li>Respond to support requests and inquiries</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              3. Data Sharing and Disclosure
            </h2>
            <p className="text-gray-700 mb-4">
              We do not sell your personal information. We may share your data
              with:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Service Providers:</strong> Third-party services that
                help us operate our platform (e.g., Polar for payments, cloud
                hosting providers)
              </li>
              <li>
                <strong>Your Organization:</strong> If you're part of a team
                account, administrators can access team performance data
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to
                protect our rights
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with a
                merger, acquisition, or sale of assets
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              4. Data Security
            </h2>
            <p className="text-gray-700 mb-4">
              We implement industry-standard security measures:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>End-to-end encryption for all data transmissions</li>
              <li>Secure cloud infrastructure with regular security audits</li>
              <li>Access controls and authentication requirements</li>
              <li>Regular backups and disaster recovery procedures</li>
              <li>Employee training on data protection</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              5. Your Rights and Choices
            </h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Access:</strong> Request a copy of your personal data
              </li>
              <li>
                <strong>Correction:</strong> Update or correct inaccurate
                information
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your account and
                data
              </li>
              <li>
                <strong>Portability:</strong> Export your training data
              </li>
              <li>
                <strong>Opt-out:</strong> Unsubscribe from marketing
                communications
              </li>
              <li>
                <strong>Restrict Processing:</strong> Limit how we use your data
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              6. AI and Machine Learning
            </h2>
            <p className="text-gray-700 mb-4">Our AI systems:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Process conversations locally when possible</li>
              <li>Use aggregated, anonymized data for model improvements</li>
              <li>
                Do not share individual conversation content with other users
              </li>
              <li>Allow you to delete your conversation history at any time</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              7. Data Retention
            </h2>
            <p className="text-gray-700 mb-4">
              We retain your data for as long as necessary to provide our
              services. Specifically:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Account data: Until you delete your account</li>
              <li>Training sessions: 12 months for performance tracking</li>
              <li>Payment records: As required by tax and accounting laws</li>
              <li>
                Anonymized analytics: Indefinitely for service improvement
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              8. International Data Transfers
            </h2>
            <p className="text-gray-700 mb-4">
              Your data may be transferred to and processed in countries other
              than your own. We ensure appropriate safeguards are in place to
              protect your information in accordance with this Privacy Policy.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              9. Children's Privacy
            </h2>
            <p className="text-gray-700 mb-4">
              Our service is not intended for users under 18 years of age. We do
              not knowingly collect personal information from children.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              10. Updates to This Policy
            </h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time. We will
              notify you of any material changes by posting the new Privacy
              Policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              11. Contact Us
            </h2>
            <p className="text-gray-700 mb-4">
              If you have questions about this Privacy Policy or our data
              practices, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Address:</strong> Prodius Enterprise
                <br />
                San Francisco, CA 94105
              </p>
              <p className="text-gray-700">
                <strong>Data Protection Officer:</strong>{" "}
                cristian@prodiusenterprise.com
              </p>
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
              <p className="text-gray-700 text-sm mb-0">
                By using our AI Sales Training platform, you acknowledge that
                you have read and understood this Privacy Policy and agree to
                its terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
