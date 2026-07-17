import api from "./api";

const getToken = () => localStorage.getItem("token");

export const getMyResumes = async () => {
  const response = await api.get("/resumes", {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return response.data;
};

export const getResumeById = async (id) => {
  const response = await api.get(`/resumes/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return response.data;
};

export const createResume = async () => {
  const response = await api.post(
    "/resumes",
    {
      title: "Untitled Resume",
      template: "modern",
    },
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  return response.data;
};

export const updateResume = async (id, resumeData) => {
  const response = await api.put(
    `/resumes/${id}`,
    resumeData,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  return response.data;
};

export const deleteResume = async (id) => {
  const response = await api.delete(`/resumes/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return response.data;
};

export const renameResume = async (id, title) => {
  const response = await api.patch(
    `/resumes/${id}/rename`,
    { title },
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  return response.data;
};

export const duplicateResume = async (id) => {
  const response = await api.post(
    `/resumes/${id}/duplicate`,
    {},
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  return response.data;
};