// Display helpers for people.json records. Dates in the data are free text
// ("About 1827", "26 Apr 1866", "1784 or 1785", "Alive", ""), so years are
// pulled out loosely rather than parsed as dates.

export function displayName(p) {
  if (!p) return '';
  const surname = p.married_name || p.last_name;
  return [p.first_name, surname].filter(Boolean).join(' ');
}

export function maidenName(p) {
  if (!p) return '';
  return p.married_name && p.last_name && p.married_name !== p.last_name ? p.last_name : '';
}

// Returns e.g. "1823", "c. 1827", or "" when no four-digit year is present.
function year(raw) {
  const text = String(raw ?? '').trim();
  const years = text.match(/\b(1[5-9]\d\d|20\d\d)\b/g);
  if (!years) return '';
  const approximate = years.length > 1 || /\b(about|abt|c\.|circa|or|between|before|after)\b/i.test(text);
  return approximate ? `c. ${years[0]}` : years[0];
}

export function isLiving(p) {
  return String(p?.['life-status'] ?? '').trim().toLowerCase() === 'alive';
}

// "1823–1879", "b. 1991, living", "b. 1823", "d. 1879", or "Dates unknown".
export function lifeYears(p) {
  const born = year(p.date_of_birth);
  if (isLiving(p)) return born ? `b. ${born}, living` : 'Living';
  const died = year(p['life-status']);
  if (born && died) return `${born}–${died}`;
  if (born) return `b. ${born}`;
  if (died) return `d. ${died}`;
  return 'Dates unknown';
}

// Lower-case, accent-free text for client-side name search.
export function searchText(...parts) {
  return parts
    .filter(Boolean)
    .join(' ')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();
}
