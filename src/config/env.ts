export const env = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? "http://localhost:4000/api",
  appName: import.meta.env.VITE_APP_NAME ?? "Institution's Innovation Council",
  collegeName:
    import.meta.env.VITE_COLLEGE_NAME ??
    "Guru Tegh Bahadur Institute of Technology, GGSIPU",
  collegeLogoUrl:
    import.meta.env.VITE_COLLEGE_LOGO_URL ?? "/assets/college-logo.jpg",
  societyLogoUrl:
    import.meta.env.VITE_SOCIETY_LOGO_URL ?? "/assets/society-logo.jpg"
};
