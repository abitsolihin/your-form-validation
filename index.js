import axios from "axios";
import { object, string } from "yup";
import { map } from "lodash";

const formValidation = async (formData) => {
  const schema = object({
    name: string().required("Nama wajib diisi"),
    email: string().email("Format email tidak valid"),
    password: string().min(8, "Password minimal 8 karakter"),
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
