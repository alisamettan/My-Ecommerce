import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { setUserActionCreator } from "../store/actions/userAction";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { FETCH_STATES } from "../store/reducers/productReducer";
import { useEffect } from "react";

export default function Login() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
  });
  const dispatch = useDispatch();
  const fetchedStat = useSelector((state) => state.user.fetchState);
  const history = useHistory();

  const userNotFetched = useSelector(
    (store) => store.user.fetchState === FETCH_STATES.FetchFailed
  );

  const userLoaded = useSelector(
    (store) => store.user.fetchState === FETCH_STATES.Fetched
  );

  function submitHandler(formData) {
    dispatch(setUserActionCreator(formData));
  }
  useEffect(() => {
    if (userLoaded) {
      history.push("/");
    } else if (userNotFetched) {
      reset();
    }
  }, [userLoaded, userNotFetched, reset, history]);

  return (
    <div className="form-card w-96 m-auto py-16">
      <div className="form-container">
        <form onSubmit={handleSubmit(submitHandler)} className="card-body">
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              className={`form-control ${errors.email ? "border-red-500" : ""}`}
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
              })}
            />
            {errors.password && (
              <p className="form-hata-mesaji text-red-700">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="pt-3 text-center">
            <Button
              type="submit"
              color="primary"
              className="px-10 py-3 bg-primaryColor rounded-lg text-white"
              disabled={!isValid}
            >
              Submit{" "}
              {/* {loading && <p className="text-red-700">Loading...</p>} */}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
