import { useForm } from "react-hook-form";
import { Button } from "reactstrap";
import { instance } from "../hooks/useAxios";
import { useEffect, useState } from "react";

const formDataInitial = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUp() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: formDataInitial,
    mode: "all",
  });
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    instance
      .get("/roles")
      .then((res) => {
        setRoles(res.data);
        console.log(res.data);
        setValue(
          "role_id",
          res.data.find((role) => role.code === "customer").id || null
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setValue]);

  function submitHandler(formData) {
    setLoading(true);
    instance
      .post("/signup", formData)
      .then((res) => {
        return console.log(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
    reset();
  }

  return (
    <div className="form-card w-96 m-auto py-16">
      <div className="form-container">
        <form onSubmit={handleSubmit(submitHandler)} className="card-body">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              className={`form-control ${errors.name ? "border-red-500" : ""}`}
              type="text"
              {...register("name", {
                required: "Name field is necessary!",
                minLength: {
                  value: 3,
                  message: "Name field is required with min 3 char!",
                },
              })}
            />
            {errors.name && (
              <p className="form-hata-mesaji text-red-700">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              className={`form-control ${errors.name ? "border-red-500" : ""}`}
              type="email"
              {...register("email", {
                required: "Email field is necessary!",
                pattern: {
                  value: /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm,
                  message: "Please enter a valid email address.",
                },
              })}
            />
            {errors.email && (
              <p className="form-hata-mesaji text-red-700">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              className={`form-control ${errors.name ? "border-red-500" : ""}`}
              type="password"
              {...register("password", {
                required: "Password field is necessary!",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/gm,
                  message:
                    "Password needs to be min 8 character including numbers, lower case, upper case and special character!",
                },
              })}
            />
            {errors.password && (
              <p className="form-hata-mesaji text-red-700">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              className={`form-control ${errors.name ? "border-red-500" : ""}`}
              type="password"
              {...register("confirmPassword", {
                required: "This field is necessary!.",
                validate: (val) => {
                  const { password } = getValues();
                  return password === val || "Passwords should match!";
                },
              })}
            />
            {errors.confirmPassword && (
              <p className="form-hata-mesaji text-red-700">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Role:</label>
            <select
              className="w-full p-2 border rounded"
              {...register("role_id")}
            >
              {roles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.name}
                </option>
              ))}
            </select>
          </div>
          <div className="pt-3 text-center">
            {loading && <p>Loading...</p>}
            <Button
              type="submit"
              color="primary"
              className="px-12 py-6 bg-primaryColor rounded-lg text-white"
              disabled={!isValid || loading}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
