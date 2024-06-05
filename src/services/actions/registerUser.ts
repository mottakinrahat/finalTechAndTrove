"use server";
export const registerUser = async (formData: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formData,
      cache: "no-store",
    }
  );
  const userInfo = await res.json();
  console.log(userInfo);
  return userInfo;
};
