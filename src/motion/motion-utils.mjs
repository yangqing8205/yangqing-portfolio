export function getPaperWidthMode(viewportWidth) {
  if (viewportWidth < 520) return "mobile";
  if (viewportWidth < 1100) return "tablet";
  return "desktop";
}

export function getActiveJourneyNode(progress, thresholds) {
  let active = -1;
  thresholds.forEach((threshold, index) => {
    if (progress >= threshold) active = index;
  });
  return active;
}

export function wrapEvidenceIndex(index, length) {
  return ((index % length) + length) % length;
}

