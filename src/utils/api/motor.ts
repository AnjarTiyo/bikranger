export async function getListMotor() {
  try {
    const data = await fetch(process.env.BASE_URL + "/api/motors", {
      method: "GET",
    });

    return data.json();
  } catch (error) {
    console.log(error);
    throw new Error("Unable to get list motors");
  }
}
