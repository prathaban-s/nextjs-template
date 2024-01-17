const ACCESS_TOKEN = "accessToken";

const getAccessToken = (): string | null => {
  return localStorage.getItem(ACCESS_TOKEN);
};

const saveAccessToken = (token: string): void => {
  localStorage.setItem(ACCESS_TOKEN, token);
};

const deleteAccessToken = (): void => {
  localStorage.removeItem(ACCESS_TOKEN);
};

export { deleteAccessToken, getAccessToken, saveAccessToken };
