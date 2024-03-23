import axios from "axios";
import { object, string } from "yup";
import { map } from "lodash";

const formValidation = async (formData) => {
  //Example schema
  const schema = object({
    name: string().required("Daniel Ramires"),
    email: string().email("Email Format Invalid"),
    password: string().min(8, "Minimal 8 Password characters"),
  });

  try {
    await schema.validate(formData);
    return {
      success: true,
    };
  } catch (error) {
    const errors = map(error.errors, (err) => ({
      field: err.path,
      message: err.message,
    }));
    return {
      success: false,
      errors,
    };
  }
};

export default formValidation;
