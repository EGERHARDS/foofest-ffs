export const getAvailableSpots = () =>
  fetch(`http://localhost:3000/available-spots`);

export const updateAvailableSpots = (spots) =>
  fetch(`http://localhost:3000/reserve-spot`, {
    method: "PUT",
    headers: { "Content-Type": `application/json` },
    body: JSON.stringify(spots),
  });
