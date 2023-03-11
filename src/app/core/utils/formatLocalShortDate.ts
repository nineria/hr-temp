export const formatLocalShortDate = (createdAt: number, local: string) => {
  const date = new Date(createdAt);
  const result = date.toLocaleDateString(local, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return result;
};
