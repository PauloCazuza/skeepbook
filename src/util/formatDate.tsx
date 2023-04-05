export function formatDateAndHourBR(data: Date): string {
  if (!data)
    return "Data não omitida";

  const dia = data.getDate().toString().padStart(2, '0');
  const mes = (data.getMonth() + 1).toString().padStart(2, '0');
  const ano = data.getFullYear().toString();
  const hora = data.getHours().toString().padStart(2, '0');
  const minuto = data.getMinutes().toString().padStart(2, '0');
  const segundo = data.getSeconds().toString().padStart(2, '0');

  return `${dia}/${mes}/${ano} ás ${hora}:${minuto}:${segundo}`;
}

export function formatDateBR(data: Date): string {
  if (!data)
    return "Sem data";

  const dia = data.getDate().toString().padStart(2, '0');
  const mes = (data.getMonth() + 1).toString().padStart(2, '0');
  const ano = data.getFullYear().toString();
  const hora = data.getHours().toString().padStart(2, '0');
  const minuto = data.getMinutes().toString().padStart(2, '0');
  const segundo = data.getSeconds().toString().padStart(2, '0');

  return `${dia}/${mes}/${ano}`;
}

// Converter strings em objetos Date
export const convertedDates = (dateString: string) => {
  const [day, month, year] = dateString.split('/');
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
};
