import Tag from "./Tag";
import salesforceIcon from "../assets/salesforce.svg"; // Replace with salesforce icon
import hubspotIcon from "../assets/hubspot.svg"; // Replace with hubspot icon

import slackIcon from "../assets/slack.svg"; // Replace with slack icon
import zoomIcon from "../assets/zoom.svg"; // Replace with zoom icon
import teamsIcon from "../assets/teams.svg"; // Replace with teams icon
import IntegrationColumn from "./IntegrationColumn";

const integrations = [
  {
    name: "Salesforce",
    icon: salesforceIcon,
    description: "Sync training data and performance metrics with your CRM.",
  },
  {
    name: "HubSpot",
    icon: hubspotIcon,
    description: "Track sales training progress alongside your sales pipeline.",
  },
  ,
  {
    name: "Slack",
    icon: slackIcon,
    description:
      "Get training updates and feedback directly in your workspace.",
  },
  {
    name: "Zoom",
    icon: zoomIcon,
    description:
      "Seamless integration with your existing video call workflows.",
  },
  {
    name: "Microsoft Teams",
    icon: teamsIcon,
    description: "Native integration with Teams for enterprise sales training.",
  },
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
  return (
    <section className="py-24 overflow-hidden bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          <div>
            <Tag>Seamless Integration</Tag>
            <h2 className="text-6xl font-medium mt-6 text-gray-900">
              Works with your{" "}
              <span style={{ color: "#335edd" }}>existing tools</span>
            </h2>

            <p className="text-gray-600 mt-4 text-lg">
              Our AI sales training platform integrates seamlessly with your
              existing CRM, communication tools, and sales stack. No disruption
              to your workflow - just better trained sales teams.
            </p>
          </div>
          <div>
            <div className="grid md:grid-cols-2 gap-4 lg:h-[800px] h-[400px] lg:mt-0 mt-8 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
              <IntegrationColumn integrations={integrations} />
              <IntegrationColumn
                integrations={integrations.slice().reverse()}
                className="hidden md:flex"
                reverse
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
