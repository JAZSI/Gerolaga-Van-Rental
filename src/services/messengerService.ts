export interface BookingFormData {
  date: string;
  time: string;
  pickupLocation: string;
  dropoffLocation: string;
  numPersons: string;
  notes: string;
}

export const formatBookingMessage = (data: BookingFormData): string => {
  const lines = [
    'Booking Inquiry',
    '',
    `Date: ${data.date || 'Not specified'}`,
    `Time: ${data.time || 'Not specified'}`,
    `Pick-up Location: ${data.pickupLocation || 'Not specified'}`,
    `Drop-off Location: ${data.dropoffLocation || 'Not specified'}`,
    `Number of Passengers: ${data.numPersons || 'Not specified'}`,
    ...(data.notes ? [`Additional Notes: ${data.notes}`] : []),
  ];
  return lines.join('\n');
};

export const sendViaMessenger = (
  data: BookingFormData,
  facebookPageId: string = '61577497282138'
): void => {
  const message = formatBookingMessage(data);
  const encodedMessage = encodeURIComponent(message);
  
  // Facebook Messenger link format
  const messengerLink = `https://m.me/${facebookPageId}?text=${encodedMessage}`;
  
  window.open(messengerLink, '_blank', 'width=500,height=600');
};

export const sendViaWhatsApp = (
  data: BookingFormData,
  phoneNumber: string = '+639945077836'
): void => {
  const message = formatBookingMessage(data);
  const encodedMessage = encodeURIComponent(message);
  
  // Remove country code formatting for WhatsApp link
  const cleanPhone = phoneNumber.replace(/\D/g, '');
  const whatsappLink = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
  
  window.open(whatsappLink, '_blank', 'width=500,height=600');
};

export const getFormData = (): BookingFormData => {
  return {
    date: (document.getElementById('pickup-date') as HTMLInputElement)?.value || '',
    time: (document.getElementById('pickup-time') as HTMLInputElement)?.value || '',
    pickupLocation: (document.getElementById('pickup-loc') as HTMLInputElement)?.value || '',
    dropoffLocation: (document.getElementById('dropoff-loc') as HTMLInputElement)?.value || '',
    numPersons: (document.getElementById('persons') as HTMLSelectElement)?.value || '',
    notes: (document.getElementById('notes') as HTMLTextAreaElement)?.value || '',
  };
};
