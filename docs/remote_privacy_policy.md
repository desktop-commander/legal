# Privacy Policy for Remote Desktop Commander

**Last updated: January 20, 2026**

## Introduction

We at Desktop Commander are committed to respecting your privacy and keeping secure any information collected through our service. This privacy policy explains how we collect, use, and protect your data when you use Remote Desktop Commander ("the Service").

Remote Desktop Commander is a cloud-based service that enables remote device execution through authenticated connections. This policy applies to all data collected through the Service, including our web application, API, and connected devices.

## Data Collection

### Account Information

When you create an account, we collect:

- **Email address**: Required for account creation and communication
- **Name and profile picture**: If you sign in with Google OAuth
- **Password**: If you use email/password authentication (stored as a secure hash)

### Authentication and Session Data

We collect data necessary to authenticate you and maintain secure sessions:

- **Session identifiers**: Random UUIDs used to manage your login sessions
- **OAuth tokens**: Access and refresh tokens for authentication (stored server-side only)
- **IP address**: Collected during authentication for security purposes
- **User agent**: Browser/client information for session management
- **Authentication timestamps**: When you signed in, last activity time

### Device Information

When you connect devices to the Service:

- **Device name**: A name you provide or we generate to identify your device
- **Device capabilities**: What tools/features your device supports
- **Device status**: Online/offline status and last seen timestamp
- **Device authentication tokens**: Secure tokens for device authorization

### Tool Execution Data

When you execute remote tools through the Service:

- **Tool name**: The name of the tool being executed
- **Tool arguments**: Parameters passed to the tool (may contain file paths, code, or other data you submit)
- **Tool results**: Output from tool execution
- **Execution metadata**: Timestamps, status (pending/executing/completed/failed), timeout settings
- **Error messages**: If a tool execution fails

**Important**: Tool arguments and results may contain sensitive data depending on what you execute. This data is stored **only for the duration necessary to execute the request and synchronize between your systems** (typically seconds to minutes). Once the tool execution is complete and the result has been delivered to the requesting client, the tool arguments and results are automatically removed from our systems. We do not retain, analyze, or use this data for any other purposes.

### Analytics Data (PostHog)

We use PostHog for product analytics to understand how the Service is used. PostHog collects:

**Automatically captured:**
- Page views and navigation patterns
- Click events on buttons and interactive elements
- Page leave events
- Browser and device type

**Manually tracked events:**
- Authentication events (sign-in, sign-up, sign-out)
- Device management actions (verification, revocation)
- OAuth flow completion
- Error occurrences

**What we track with events:**
- User ID and email (for identified users)
- Device counts and status
- Success/failure states
- Error messages (sanitized)

**Privacy-focused configuration:**
- Person profiles are created only for authenticated users (`identified_only`)
- Session recording is **disabled**
- Do Not Track (DNT) browser setting is respected
- Data is stored in PostHog's EU region

### Error Tracking (Sentry)

We use Sentry to monitor and fix errors in both client and server applications:

**Client-side (browser):**
- JavaScript errors and exceptions
- Error stack traces
- Browser and device information
- Page URL where error occurred
- User ID (for authenticated users)

**Server-side:**
- Application errors and exceptions
- Request context (URL, method, IP address)
- User ID (if authenticated)
- Performance traces

**Privacy measures:**
- Session replay is configured with `maskAllText: true` and `blockAllMedia: true`

## Google User Data

If you sign in to the Service using your Google account, the following applies to your Google user data:

### Data Accessed

When you authenticate with Google, we request access to the following scopes:
- **email**: Your Google account email address
- **profile**: Your name and profile picture
- **openid**: Basic authentication identifier

We do **not** request access to Gmail, Google Drive, Google Calendar, or any other Google services beyond basic profile information.

### How We Use Google Data

We use your Google user data solely for the following purposes:
- **Account Creation and Authentication**: To create your Remote Desktop Commander account and verify your identity when you sign in
- **User Profile**: To display your name and profile picture within the Service
- **Account Communication**: To send you service-related emails (security alerts, account notifications) to your Google email address

We do **not** use your Google data for:
- Advertising or marketing to third parties
- Training AI models
- Any purpose unrelated to providing the Service

### Google Data Sharing

Your Google user data is shared only with:
- **Supabase**: Our authentication and database provider, which stores your account information securely
- **Sentry**: Our error monitoring service, which may receive your email for error tracking (with masking enabled)

We do **not** sell, rent, or share your Google user data with advertisers, data brokers, or any other third parties for their own purposes.

### Google Data Storage and Protection

Your Google user data is:
- Stored in Supabase's secure infrastructure (AWS, EU region)
- Protected by industry-standard encryption in transit (TLS) and at rest
- Accessible only to authorized personnel for support and security purposes
- Subject to Supabase's security practices and certifications

### Google Data Retention and Deletion

- **Retention**: Your Google user data is retained for as long as your account remains active
- **Account Deletion**: You may request deletion of your account and all associated data by contacting privacy@desktopcommander.app or through your account settings
- **Deletion Timeline**: Upon receiving a deletion request, we will delete your Google user data within 30 days, except where retention is required by law
- **Revoke Access**: You can revoke Desktop Commander's access to your Google account at any time through your [Google Account Security Settings](https://myaccount.google.com/permissions)

### Additional Google Data Restrictions

Notwithstanding anything else in this Privacy Policy:
- (a) The Service will not access your Gmail messages or any Google service data beyond basic profile information.
- (b) The Service will not use Google data for serving advertisements.
- (c) The Service will not allow humans to read Google data unless necessary for security purposes (such as investigating abuse), to comply with applicable law, or for the Service's internal operations.

## Third-Party Services

We use the following third-party services to provide and improve the Service:

| Service | Purpose | Data Shared | Privacy Policy |
|---------|---------|-------------|----------------|
| **Supabase** | Database, authentication, real-time communication | All account data, device data, tool execution data | [supabase.com/privacy](https://supabase.com/privacy) |
| **PostHog** | Product analytics | Usage events, user identifiers, page views | [posthog.com/privacy](https://posthog.com/privacy) |
| **Sentry** | Error monitoring | Error reports, stack traces, user context | [sentry.io/privacy](https://sentry.io/privacy) |
| **Google** | OAuth authentication (optional) | Email, name, profile picture (if you choose Google sign-in) | [policies.google.com/privacy](https://policies.google.com/privacy) |

## How We Use Your Data

We use your data for the following purposes:

**Service delivery:**
- Authenticate you and manage your sessions
- Connect and manage your devices
- Execute remote tools on your behalf
- Provide real-time status updates

**Service improvement:**
- Understand usage patterns to improve the product
- Identify and fix bugs and errors
- Measure feature adoption
- Guide development priorities

**Security:**
- Detect and prevent unauthorized access
- Audit security-relevant events
- Protect against abuse

**Communication:**
- Send service-related announcements
- Respond to support requests

## Data Retention

| Data Type | Retention Period |
|-----------|------------------|
| Account data | Until you delete your account |
| Session data | 30 days after last activity, or until you sign out |
| Device data | Until device is revoked or account deleted; offline devices deleted after 24 hours |
| Tool execution data | Deleted immediately after execution completes |
| Analytics data (PostHog) | 12 months |
| Error data (Sentry) | 90 days |

## Data Security

We implement the following security measures:

- **Encryption in transit**: All data is transmitted over HTTPS/TLS
- **Secure token storage**: Refresh tokens are stored server-side only, never exposed to browsers
- **Row-Level Security**: Database access is restricted to your own data via Supabase RLS policies
- **Session management**: HTTP-only cookies, secure flags in production
- **OAuth 2.0 with PKCE**: Industry-standard secure authentication
- **Password hashing**: Passwords are hashed using secure algorithms (handled by Supabase Auth)

## Your Rights and Choices

### Access Your Data

You can view your account information, connected devices, and active sessions through the Service interface.

### Delete Your Data

- **Delete a device**: Revoke individual devices from your account dashboard
- **Delete your account**: Contact us at privacy@desktopcommander.app to request full account deletion
- **Clear session data**: Sign out to clear your active sessions

### Opt-Out of Analytics

- **PostHog**: Enable "Do Not Track" in your browser settings
- **Sentry**: Error tracking cannot be disabled individually, but session replay is already disabled

### Export Your Data

Contact us at privacy@desktopcommander.app to request an export of your data.

## Data Transfers

The Service is operated from servers that may be located in the United States and European Union. When you use the Service from other regions, your data may be transferred internationally. We ensure appropriate safeguards are in place for such transfers, including:

- Supabase: Data stored in your selected region
- PostHog: Data stored in EU region (eu.i.posthog.com)
- Sentry: Standard Contractual Clauses for international transfers

## Children

The Service is not intended for use by anyone under 18 years of age. We do not knowingly collect personal information from children. If we learn that we have collected personal data from a child, we will take steps to delete that information.

## Changes to This Policy

We may update this privacy policy from time to time. When we make material changes, we will:

- Update the "Last updated" date at the top of this page
- Notify you through the Service interface or via email for significant changes

Your continued use of the Service after changes constitutes acceptance of the updated policy.

## Contact Us

For privacy-related questions or to exercise your rights:

- **Email**: privacy@desktopcommander.app
- **General questions**: Open an issue on our [GitHub repository](https://github.com/desktop-commander/remote-dc-mcp)

We aim to respond to privacy inquiries within 30 days.

## Legal Bases for Processing (EEA, UK, and Switzerland)

If you are located in the European Economic Area, United Kingdom, or Switzerland, we process your personal information under the following legal bases:

- **Performance of a Contract**: To provide the Service, manage your account, and execute remote tools
- **Legitimate Interests**: To improve and secure the Service, perform analytics, and communicate with you
- **Consent**: Where required by law, such as for certain types of marketing
- **Legal Obligations**: To comply with applicable laws and regulations

You have the right to lodge a complaint with your local data protection authority if you believe we have violated your data protection rights.

## Local MCP Server

To use Remote Desktop Commander, you install the Desktop Commander MCP server locally on your device. The local MCP server has its own telemetry and data collection practices, which are covered by a separate privacy policy.

**See**: [Desktop Commander MCP Privacy Policy](./mcp-privacy-policy)

The local MCP server collects anonymized telemetry data (opt-out available) to help improve the software, including usage events, platform information, and error reports. This data collection is separate from the Remote service and can be disabled independently.

---

*This privacy policy applies to Remote Desktop Commander. For the Desktop Commander MCP server (local installation), see the [Desktop Commander MCP Privacy Policy](./mcp-privacy-policy).*
