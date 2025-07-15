// Format date in a consistent way for both server and client
export const formatDate = (date: Date | string): string => {
  // Convert to Date object if it's a string
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  // Use a consistent format that works across all locales
  return dateObj.toISOString().split('T')[0]; // Returns YYYY-MM-DD
};
