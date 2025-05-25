const showFormattedDate = (date) => {
  const d = new Date(date);

  const tanggal = d.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const waktu = d.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return `${tanggal} pukul ${waktu}`;
};

export { showFormattedDate };
