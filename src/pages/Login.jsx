import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { setUserActionCreator } from "../store/actions/userAction";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { FETCH_STATES } from "../store/reducers/productReducer";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

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
  const fetchStat = useSelector((store) => store.user.fetchState);
  const token = useSelector((state) => state.user.userInfo.token);
  const history = useHistory();

  function submitHandler(formData) {
    dispatch(setUserActionCreator(formData));
  }
  useEffect(() => {
    if (fetchStat == FETCH_STATES.Fetched) {
      history.push("/");
      toast.success("Login is successful:)", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (fetchStat == FETCH_STATES.FetchFailed) {
      reset();
      toast.error("Login is unsuccessful!", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [fetchStat]);

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
              Submit {fetchStat == FETCH_STATES.Fetching && <div>loading</div>}
              {/* {loading && <p className="text-red-700">Loading...</p>} */}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
