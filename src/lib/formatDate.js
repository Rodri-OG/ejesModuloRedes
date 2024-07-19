export default function formatDate(isoDate) {
  // Crear un objeto Date a partir de la cadena ISO
  const date = new Date(isoDate);

  // Configuración de opciones para toLocaleString
  const options = {
    weekday: 'long', // Lunes, Martes, etc.
    day: 'numeric',  // Día del mes
    month: 'long',   // Enero, Febrero, etc.
    hour: 'numeric', // Hora
    minute: 'numeric' // Minuto
  };

  // Convertir la fecha a una cadena con el formato deseado
  const formattedDate = date.toLocaleString('es-ES', options);

  return formattedDate;
}
