import axios from "axios";

const endPointStudent = "https://kattadetailsbackend.onrender.com/students";
const endPointReg = "https://kattadetailsbackend.onrender.com/register";
const endPointLog = "https://kattadetailsbackend.onrender.com/log";

async function getStudents() {
  let data = [];
  await axios
    .get(endPointStudent)
    .then((res) => {
      data = res.data;
    })
    .catch((error) => {
      console.log(error.message);
    });

  return data;
}

async function regStudent(formData) {
  await axios
    .post(endPointReg, formData)
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      if (error.response.status === 409 && error.response.data === "username") {
        throw new Error("username");
      } else if (
        error.response.status === 409 &&
        error.response.data === "User"
      ) {
        throw new Error("User");
      }
    });
}

async function login(loginData) {
  let data;
  await axios
    .post(endPointLog, loginData)
    .then((res) => {
      data = res.data;
    })
    .catch((error) => {
      if (error.response.status === 401) {
        throw new Error("unAuth");
      }
    });

  return data;
}

export { getStudents, regStudent, login };
