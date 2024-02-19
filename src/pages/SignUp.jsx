import { useForm } from "react-hook-form";
import { Button } from "reactstrap";
import { instance } from "../hooks/useAxios";
import { useEffect, useState } from "react";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role_id: "3",
      store: { name: "", phone: "", tax_no: "", bank_account: "" },
    },
    mode: "all",
  });
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sellerRole, setSellerRole] = useState(false);

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
    let postData = {};
    if (formData.role_id !== "2") {
      postData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role_id: formData.role_id,
      };
    } else if (formData.role_id == "2") {
      console.log("else");
      postData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role_id: formData.role_id,
        store: {
          name: formData.store.name,
          tax_no: formData.store.tax_no,
          phone: formData.store.phone,
          bank_account: formData.store.bank_account,
        },
      };
    }
    setLoading(true);
    instance
      .post("/signup", postData)
      .then((res) => {
        console.log(res);
        console.log(postData);
      })
      .finally(() => {
        setLoading(false);
      });
    // reset();
  }
  const changeOptionHandle = (e) => {
    const selectedId = e.target.value;
    selectedId == "2" ? setSellerRole(true) : setSellerRole(false);
  };

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
                required: "Name field is required!",
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
                required: "Email field is required!",
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
                required: "Password field is required!",
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
            <label className="form-label">Role</label>
            <select
              className="w-full p-2 border rounded"
              {...register("role_id")}
              onChange={(e) => changeOptionHandle(e)}
            >
              {roles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.name}
                </option>
              ))}
            </select>
          </div>
          {sellerRole && (
            <div className="mb-3">
              <label className="form-label">Store Name</label>
              <input
                placeholder="Store Name"
                className={`form-control ${
                  errors.name ? "border-red-500" : ""
                }`}
                {...register("store.name", {
                  required: "Store name is required!",
                  minLength: {
                    value: 3,
                    message: "At least 3 characters must be entered",
                  },
                })}
              />
              <div className="text-red-700">{errors.store?.name?.message}</div>

              <label className="form-label">Store Phone</label>
              <input
                placeholder="Store Phone"
                className={`form-control ${
                  errors.phone ? "border-red-500" : ""
                }`}
                {...register("store.phone", {
                  required: "Store phone is required!",
                  pattern: {
                    value:
                      /^(\+90|0)?\s*(\(\d{3}\)[\s-]*\d{3}[\s-]*\d{2}[\s-]*\d{2}|\(\d{3}\)[\s-]*\d{3}[\s-]*\d{4}|\(\d{3}\)[\s-]*\d{7}|\d{3}[\s-]*\d{3}[\s-]*\d{4}|\d{3}[\s-]*\d{3}[\s-]*\d{2}[\s-]*\d{2})$/,
                    message: "Store Phone needs to be Turkish phone number!",
                  },
                })}
              />
              <div className="text-red-700">{errors.store?.phone?.message}</div>

              <label className="form-label">Store Tax ID</label>
              <input
                placeholder="TXXXXVXXXXXX"
                className={`form-control ${
                  errors.name ? "border-red-500" : ""
                }`}
                {...register("store.tax_no", {
                  required: "Tax ID is required!",
                  pattern: {
                    value: /^T\d{4}V\d{6}$/ /*[1-9](\d{9})([0,2,4,6,8]{1})*/,
                    message: "TAX ID is not valid",
                  },
                })}
              />
              <div className="text-red-700">
                {errors.store?.tax_no?.message}
              </div>

              <label className="form-label">Iban</label>
              <input
                placeholder="TRXXXXXXXXXXXXXXXXXXXXXXXX"
                className={`form-control ${
                  errors.name ? "border-red-500" : ""
                }`}
                {...register("store.bank_account", {
                  required: "Iban is required!",
                  pattern: {
                    value:
                      /TR[a-zA-Z0-9]{2}s?([0-9]{4}s?){1}([0-9]{1})([a-zA-Z0-9]{3}s?)([a-zA-Z0-9]{4}s?){3}([a-zA-Z0-9]{2})s?/,
                    message: "Iban is not valid",
                  },
                })}
              />
              <div className="text-red-700">
                {errors.store?.bank_account?.message}
              </div>
            </div>
          )}
          <div className="pt-3 text-center">
            <Button
              type="submit"
              color="primary"
              className="px-12 py-6 bg-primaryColor rounded-lg text-white"
              disabled={!isValid || loading}
            >
              Submit {loading && <p className="text-red-700">Loading...</p>}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
