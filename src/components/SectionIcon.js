const paths = {
  profile: <><circle cx="12" cy="8" r="3"/><path d="M5 21v-2a7 7 0 0 1 14 0v2M3 3h18v18H3z"/></>,
  work: <><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V3h8v4M3 12c6 4 12 4 18 0M12 12v5"/></>,
  education: <><path d="m2 9 10-5 10 5-10 5-10-5M6 11v7c4 3 8 3 12 0v-7M22 9v9"/></>,
  awards: <><path d="m12 2 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"/></>,
  code: <><path d="m7 6-5 6 5 6M17 6l5 6-5 6M14 3l-4 18"/></>,
  feedback: <><path d="M4 3h16v13H9l-5 5V3zM8 8h8M8 12h5"/></>,
  interests: <><path d="M12 21 3 12C-3 4 8-1 12 7c4-8 15-3 9 5z"/></>,
};
export default function SectionIcon({name}) {
  return <svg className="section-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">{paths[name]}</svg>;
}
