export function setCookie(name: string, value: string, days: number) {
  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = 'expires=' + expirationDate.toUTCString();
  document.cookie = name + '=' + value + ';' + expires + ';path=/';
}

export function removeCookie(name: string) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}

export function getCookie(name: string) {
  const cookieName = name + '=';
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return '';
}
