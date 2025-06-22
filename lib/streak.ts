// lib/streak.ts
export function getStreaks() {
  const current = parseInt(sessionStorage.getItem('currentStreak') || '0', 10);
  const max     = parseInt(sessionStorage.getItem('maxStreak')     || '0', 10);
  return { current, max };
}

export function saveStreaks(current: number, max: number) {
  sessionStorage.setItem('currentStreak', current.toString());
  sessionStorage.setItem('maxStreak',     max.toString());
}
