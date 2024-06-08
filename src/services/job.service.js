import axios from "axios";
const API_URI = process.env.NEXT_PUBLIC_API_URI
axios.defaults.withCredentials = true;
export async function getAllJobPosts() {
  try {
    const response = await axios.get(API_URI + "joblist", {
      withCredentials: true
    });
    return response.data;
  } catch (error) {
    throw error || "Failed to fetch job posts";
  }
}
export async function getRecentJobPost() {
  try {
    const response = await axios
      .get(API_URI + "joblist", {
        withCredentials: true
      })
      .then(response => response.json())
      .then(data => {
        const sortedJobPosts = data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        const mostRecentJob = sortedJobPosts[0];
        console.log("Recent", mostRecentJob);
      })
      .catch(error => {
        console.error("Error fetching job posts:", error);
      });
    return response.data;
  } catch (error) {
    throw error || "Failed to fetch job posts";
  }
}
export const searchJobs = async title => {
  try {
    const response = await axios.get(API_URI + `searchjobs?title=${title}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getJobPostById = async id => {
  try {
    const response = await axios.get(API_URI + `getJobPostsId/${id}`, {
      withCredentials: true
    });
    return response;
  } catch (error) {
    throw error.response.data.error || "Failed to fetch job post by ID";
  }
};
export async function getUserJob () {
  try {
    const response = await axios.get(API_URI + `getjobuser/`, {
      withCredentials: true
    });
    return response.data;
  } catch (error) {
    throw error.response.data.error || "Failed to fetch job by ID";
  }
};
export const job_apply = async (jobId, formData) => {
  const formDataToSend = new FormData();
  formDataToSend.append("full_name", formData.full_name);
  formDataToSend.append("email", formData.email);
  formDataToSend.append("phone_no", formData.phone_no);
  formDataToSend.append("cv", formData.cv);

  try {
    const response = await axios.post(
      API_URI + `jobapply/${jobId}`,
      formDataToSend,
      {
        withCredentials: true
      }
    );
    console.log(jobId);
    return response.data;
  } catch (error) {
    throw error;
  }
};
