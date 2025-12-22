// Fill in your Google Form details so the UI can post directly to it.
// actionUrl: use the /formResponse link from your form (not the /viewform link).
// fields: map each question to its Google Form entry ID (found by viewing the form source and copying the name="entry.xxxxx" value).
// Example usage: set your MKInput `name` prop to these entry IDs and wrap inputs in a native <form action={actionUrl} method="POST" target="_blank">.

const googleFormConfig = {
  actionUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSeSUqhc8NovIhC8mHpJr0SkaaF5VUJTKVITwJoLqAtib63kmg/formResponse",
  fields: {
    waitlistCard: {
      fullName: "entry.298224068",
      email: "entry.129544125",
      primaryInterest: "entry.1831992628",
      primaryInterestOptions: [
        "Early Access to the Product/Service",
        "Exclusive Discounts and Offers",
        "Beta Testing and Feedback Opportunities",
        "Staying Updated on Launch News",
        "Other (Please specify below)",
      ],
      other: "entry.1813715986",
      referredBy: "entry.205616203",
      referredByOptions: [
        "Search Engine (e.g., Google, Bing)",
        "Friend/Colleague Referral",
        "Online Article or Blog Post",
        "Advertisement",
        "Other",
      ],
      excitementScale: "entry.218868993",
      excitementScaleOptions: ["1", "2", "3", "4", "5"],
      additionalComments: "entry.353772807",
      timezone: "entry.196963240",
      timezoneOptions: [
        "Eastern Time (ET)",
        "Central Time (CT)",
        "Mountain Time (MT)",
        "Pacific Time (PT)",
        "Other/International",
      ],
    },
  },
};

export default googleFormConfig;
