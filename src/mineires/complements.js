const random = (percent = 20) => Math.random() > ((1 - (percent - 99)) * .01)

const complementsAdder = (...complements) => text => {
  if (!text) return text;

  for (const complement of complements) {
    if (random()) {
      return `${text.trim()}, ${complement}`;
    }
  }

  return text;
};

export const addComplements = complementsAdder('uai', 'sô');
