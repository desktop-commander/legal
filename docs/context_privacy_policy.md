# Privacy Policy for Context Commander

**Effective: Upon publication**

## Introduction

Desktop Commander SIA ("Desktop Commander," "we," or "us") is committed to respecting your privacy and keeping secure any information collected through our services. This Privacy Policy explains how we collect, use, and protect your data when you use Context Commander ("the Service").

Context Commander is a hosted Model Context Protocol (MCP) service that helps you save and resume ongoing projects across conversations and compatible AI applications. It stores project context rather than executing commands or accessing your connected devices. This policy applies to the Context Commander MCP endpoint, its account and onboarding pages, and the related service operations.

You may use your Desktop Commander account to access the Service. Other Desktop Commander products are covered by their respective privacy policies. Our [Website Privacy Policy](https://legal.desktopcommander.app/#/website_privacy_policy) and [Cookie Policy](https://legal.desktopcommander.app/#/cookie_policy) also apply when you visit our website.

## Data Collection

### Account Information

When you create or use a Desktop Commander account, we collect:

- **Email address:** Required for account creation, authentication and service-related communication.
- **Name and profile picture:** If you choose to sign in with Google.
- **Password:** If you use email/password authentication, your password is handled by our authentication provider and stored as a secure hash.
- **Account identifier:** Used to associate saved projects with your account and distinguish your data from other users' data.

### Authentication and Session Data

We process data necessary to authenticate you, authorize connected applications, and maintain secure sessions:

- Session identifiers and OAuth authorization information.
- Access and refresh tokens used for authentication and authorization.
- IP address, browser or client information, and authentication timestamps.

Context Commander uses authentication and authorization to associate MCP requests with your account. Connecting an AI application to Context Commander does not in itself give that application access to your computer or other Desktop Commander services.

### Saved Project and Context Data

When you or a connected AI application use the Service to save or update your work, we may store:

- **Projects:** Names, goals, descriptions, status, and timestamps.
- **Tasks:** Titles, status, notes and their associated projects.
- **Checkpoints:** Summaries, completed work, decisions, blockers, next steps, source AI application where known, and timestamps.
- **Tool requests and responses:** Information submitted through MCP tools to find, save, update, resume or delete this context.

Saved context can include personal or confidential information if you or your AI application choose to submit it. Please avoid submitting passwords, API keys, sensitive personal data, or other information you do not need to preserve.

**Important:** Unlike Remote Desktop Commander, Context Commander deliberately retains saved projects, tasks and checkpoints so they can be retrieved in future conversations. It does not automatically import your complete chat history, read your files, or monitor your devices. The Service processes information that you or an authorized AI application send to it. A saved checkpoint records reported progress; it is not independently verified execution evidence.

We do not sell your saved context, use it to train AI models, or send its contents to advertising or product analytics services.

### Connected AI Applications

When you connect Context Commander to an AI application, that application may submit information to the Service and receive saved project context in response to authorized requests. For example, it may retrieve a project's latest checkpoint to help you continue work in a new conversation.

Your AI application's own processing, conversation history, and retention practices are governed by its terms and privacy policy. Deleting data from Context Commander does not delete copies already held by an AI application. You can disconnect the integration in your AI application's settings.

### Analytics Data (PostHog)

We use product analytics to understand how the Service is discovered and used. Where enabled, we may collect:

- Page views, navigation and interaction events, browser and device type.
- Sign-up, sign-in and connection events.
- Whether a project was created, a checkpoint saved, or a project resumed, together with timestamps and success or failure.
- Account identifiers, acquisition source where available, and whether an account used other Desktop Commander products before connecting to Context Commander.

We use these events to measure adoption, activation, repeat usage, and whether the Service reaches new audiences. We do not include project names, task notes, checkpoint text, prompts, credentials, or tool arguments and results in product analytics events.

Our intended privacy-focused configuration is identified-user analytics in PostHog's EU region, with Context Commander session recording disabled. Website statistics and marketing cookies are subject to the choices described in our Website Privacy Policy and Cookie Policy.

### Error Tracking and Operational Logs

We use operational logs and may use Sentry to monitor and fix service errors. Diagnostic data may include error messages, stack traces, request metadata, client information, timestamps, pseudonymous account identifiers, and performance measurements. Error messages can occasionally contain information from a request; we seek to minimize and redact sensitive diagnostic information. Saved project content is not intentionally recorded as a diagnostic payload. Access to diagnostic data is restricted to authorized personnel.

## Google User Data

If you sign in using your Google account, the following applies to your Google user data:

### Data Accessed

We request only the basic authentication scopes:

- **email:** Your Google account email address.
- **profile:** Your name and profile picture.
- **openid:** Basic authentication identifier.

We do not request access to Gmail, Google Drive, Google Calendar, or other Google services beyond basic profile information.

### How We Use Google Data

We use your Google user data solely for account creation and authentication, displaying your profile where applicable, and service-related account communication.

We do not use Google user data for serving advertisements, advertising conversion matching, marketing to third parties, training AI models, or purposes unrelated to providing the Service.

### Google Data Sharing, Storage and Protection

Google user data is shared with providers only as necessary to deliver account authentication, database storage and error monitoring, including Supabase and, where applicable, Sentry. We do not sell, rent or share your Google user data with advertisers, data brokers or other third parties for their own purposes.

Google user data is protected by encryption in transit and at rest and restricted to authorized personnel. It is stored with our authentication and database provider in the configured region.

### Google Data Retention and Deletion

- Google account information is retained while your Desktop Commander account remains active.
- You may request deletion of your account and associated data by contacting support@desktopcommander.app. We aim to complete deletion within 30 days, except where retention is required by law.
- You may revoke Desktop Commander's access through your [Google Account Security Settings](https://myaccount.google.com/permissions).

Notwithstanding anything else in this policy, we will not allow humans to read Google user data unless necessary for security purposes, legal compliance, or internal operations as permitted by applicable Google policies.

## Third-Party Services

We use service providers to operate the Service. The following describes their intended roles; website-specific services and cookies are described separately in our Website Privacy Policy.

| Service | Purpose | Data Shared | Privacy Policy |
|---------|---------|-------------|----------------|
| **Supabase** | Authentication and PostgreSQL storage | Account information, authentication data, saved project context | [supabase.com/privacy](https://supabase.com/privacy) |
| **Google Cloud** | Application hosting and infrastructure logging | Requests processed by the hosted Service and operational metadata | [cloud.google.com/terms/cloud-privacy-notice](https://cloud.google.com/terms/cloud-privacy-notice) |
| **PostHog** | Product analytics | Usage events, account identifiers and acquisition metadata, not saved context contents | [posthog.com/privacy](https://posthog.com/privacy) |
| **Sentry** | Error monitoring, where enabled | Error reports, stack traces and diagnostic metadata | [sentry.io/privacy](https://sentry.io/privacy) |
| **Google** | Optional Google sign-in | Basic profile and authentication information | [policies.google.com/privacy](https://policies.google.com/privacy) |

An AI application you authorize, such as ChatGPT or another compatible MCP client, receives the context returned by its requests. Its independent processing is described in its own privacy policy (for example, [OpenAI's Privacy Policy](https://openai.com/policies/privacy-policy/)).

We may also disclose information as required by law or with your consent.

## How We Use Your Data

**Service delivery:**
- Authenticate your account and authorize connected applications.
- Save, search, retrieve, update and delete your project context.
- Return relevant saved context to applications you authorize.

**Service improvement and security:**
- Understand usage patterns, investigate errors, and measure adoption.
- Protect against abuse and unauthorized access.
- Maintain and improve reliability.

**Communication:**
- Respond to support requests and send necessary service-related notices.

## Marketing Communications and Advertising

Marketing emails are opt-in only. You may withdraw consent at any time through the unsubscribe link or by contacting support@desktopcommander.app. This does not affect necessary service-related communications.

Context Commander project content is not used for advertising or advertising conversion matching. Website-wide cookies and advertising measurement, where applicable and subject to your choices, are described in our Website Privacy Policy and Cookie Policy. We do not use Google OAuth profile data for advertising conversion matching.

## Data Retention

| Data Type | Retention Period |
|-----------|------------------|
| Account data | While your Desktop Commander account remains active, subject to deletion requests and legal requirements |
| Authentication and session data | As necessary to maintain and secure your account and authorized connections |
| Saved projects, tasks and checkpoints | Until you delete them, close your account, or the Service is discontinued, subject to the exceptions below |
| Product analytics (PostHog) | Up to 12 months |
| Error data (Sentry) | Up to 90 days |
| Backups and infrastructure logs | As necessary for recovery, security and legal compliance, according to our applicable retention schedules |

Deleting a project removes its associated tasks and checkpoints from the active database. Deleted data may remain in restricted backups until they expire under the applicable backup retention schedule. Where legally required, certain information may be retained for longer.

If we discontinue Context Commander, we will provide reasonable notice and a way to request export of your saved context where practicable, then remove the saved context when it is no longer necessary to operate the Service or meet legal obligations.

## Data Security

We use technical and organizational safeguards appropriate to the Service, including:

- HTTPS/TLS for connections to the Service.
- Account authentication and OAuth authorization, including PKCE where applicable.
- Database row-level security and access controls designed to isolate each user's saved context.
- Restricted access to production data and credentials.
- Password hashing handled by our authentication provider.

No system is completely secure. Please protect your account credentials and only connect AI applications you trust.

## Your Rights and Choices

### Access, Correct and Export Your Data

You can retrieve and update your saved projects and tasks through the Service's MCP tools. To request access, correction, a copy or export of your personal data, contact support@desktopcommander.app.

### Delete Your Data

- **Delete a project:** Use the Service's project deletion feature to remove that project and its associated tasks and checkpoints.
- **Delete all Context Commander data:** Use the account data-deletion feature when available, or contact support@desktopcommander.app. This is distinct from deleting your shared Desktop Commander account and does not by itself delete data from other Desktop Commander products.
- **Delete your account:** Contact support@desktopcommander.app to request full account deletion. We aim to complete deletion requests within 30 days, subject to applicable legal obligations.
- **Disconnect an AI application:** Remove the integration in that application's settings. Disconnecting does not itself delete saved projects or copies in the AI application's conversation history.

### Analytics and Other Privacy Choices

You can manage website cookies through Cookie Settings and exercise applicable rights to withdraw consent, object to processing, restrict processing, or request portability or deletion by contacting us. Where applicable, we respect browser Do Not Track settings for website analytics. Diagnostic processing necessary for service security and reliability may continue where permitted by law.

## Data Transfers

The Service uses cloud infrastructure and service providers that may process data in the European Union and other jurisdictions. Where required, we use appropriate safeguards for international transfers, including applicable adequacy decisions and Standard Contractual Clauses. Our intended product analytics region is the EU.

## Children

The Service is not intended for anyone under 18 years of age or the age of majority in their jurisdiction, whichever is higher. We do not knowingly collect personal information from children. If we learn that we have collected personal data from a child, we will take steps to delete it.

## Changes to This Policy

We may update this Privacy Policy from time to time. For material changes, we will provide reasonable advance notice, such as a notice in the Service or by email, and indicate when the change takes effect.

## Contact Us

Desktop Commander SIA is responsible for personal data processed through Context Commander. For privacy questions, support, or requests to exercise your rights, contact **support@desktopcommander.app**. We aim to respond to privacy inquiries within 30 days.

## Legal Bases for Processing (EEA, UK, and Switzerland)

If you are located in the European Economic Area, United Kingdom or Switzerland, we process personal information under the following legal bases:

- **Performance of a contract:** Providing the Service, managing your account, and saving and retrieving context you request.
- **Legitimate interests:** Securing and improving the Service, diagnosing errors, and measuring usage where permitted by law.
- **Consent:** Where required for optional analytics, marketing or other processing.
- **Legal obligations:** Complying with applicable laws and regulations.

You have the right to lodge a complaint with your local data protection authority if you believe we have violated your data protection rights.
