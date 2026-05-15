/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly CONTACT_WEBHOOK_URL?: string;
  readonly CONTACT_NOTIFICATION_EMAIL?: string;
  readonly GOOGLE_WORKSPACE_CLIENT_ID?: string;
  readonly GOOGLE_WORKSPACE_CLIENT_SECRET?: string;
  readonly GOOGLE_WORKSPACE_REFRESH_TOKEN?: string;
  readonly GOOGLE_WORKSPACE_SENDER_EMAIL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
