 // app.config.js - add EXPO and Clerk keys
export default {
    expo: {
      // ... other config options ...
      scheme: "your-scheme", // Add this line
      web: {
        bundler: "metro"
      },
      extra: {
        clerkPublishableKey: process.env.CLERK_PUBLISHABLE_KEY,
      },
    }
  };