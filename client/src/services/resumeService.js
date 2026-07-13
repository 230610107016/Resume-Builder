import api from "./api";

export const getMyResumes = async () => {
  const token = localStorage.getItem("token");

  const response = await api.get("/resumes", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const createResume = async () => {
  const token = localStorage.getItem("token");

  const response = await api.post(
    "/resumes",
    {
      title: "Untitled Resume",
      template: "modern",
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
