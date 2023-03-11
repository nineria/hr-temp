export const formatLocalDate = (createdAt: number, local: string) => {
  const date = new Date(createdAt);
  const result = date.toLocaleDateString(local, {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });

  return result;
};
