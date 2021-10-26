export function media(display) {
  let width;

  if (display === 'tablet') width = '768';
  if (display === 'laptop') width = '1024';
  if (display === 'laptop-l') width = '1440';
  if (display === '4k') width = '2560';
  if (typeof display === 'number') width = display;

  return `@media only screen and (min-width: ${width}px)`;
}
