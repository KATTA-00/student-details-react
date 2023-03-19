import axios from "axios";

const endPointStudent = "http://localhost:5000/students";
const endPointReg = "http://localhost:5000/register";

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
      window.location = "/";
    })
    .catch((error) => {
      console.log(error.message);
    });
}

export { getStudents, regStudent };
