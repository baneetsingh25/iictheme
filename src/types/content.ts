export type NavItem = {
  label: string;
  href: string;
};

export type HighlightStat = {
  label: string;
  value: string;
};

export type EventCard = {
  id: string;
  title: string;
  category: "Workshop" | "Competition" | "Webinar";
  date: string;
  venue: string;
  image: string;
};

export type Notice = {
  id: string;
  title: string;
  priority: "Urgent" | "Normal";
};
