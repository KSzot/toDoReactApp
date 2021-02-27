export const keys = {
  ARRAY_TO_DO: 'array_to_do',
  ARRAY_COMPLETED: 'array_completed',
  ARRAY_NOTES: 'array_notes',
  IS_MODE: 'is_mode',
};

export const storeValue = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getValue = (key: string): any => {
  return localStorage.getItem(key);
};

export const removeValue = (key: string) => {
  localStorage.removeItem(key);
};
