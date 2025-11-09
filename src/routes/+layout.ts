import posthog from 'posthog-js';
import { browser } from '$app/environment';
import { env } from '$env/dynamic/public';

const POSTHOG_KEY = env.PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST = env.PUBLIC_POSTHOG_HOST;

export const load = async () => {
  if (browser && POSTHOG_KEY) {
    posthog.init(
      POSTHOG_KEY,
      {
        api_host: POSTHOG_HOST,
        capture_pageview: false,
        capture_pageleave: false,
        capture_exceptions: true, // This enables capturing exceptions using Error Tracking, set to false if you don't want this
      }
    );
  }
  return;
};
