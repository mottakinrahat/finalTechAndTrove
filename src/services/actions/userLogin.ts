"use server";
export const userLogin = async (data: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
      cache: "no-store",
    }
  );
  const userInfo = await res.json();
  console.log(userInfo);
  return userInfo;
};
