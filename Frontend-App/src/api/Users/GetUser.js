
export const handleSearch = async () => {
  try {
    const res = await fetch(`http://localhost:3001/api/users/7`);
    if (!res.ok) {
      throw new Error("Failed to fetch user");
    } else {
      const data = await res.json();
      if (data.result.length === 0) {
        throw new Error("User not found");
      } else {
        console.log(data);
      }
    }
  } catch (error) {
    console.log(error);
  }
};
