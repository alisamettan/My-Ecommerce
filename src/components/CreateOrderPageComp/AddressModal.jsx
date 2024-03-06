import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import {
  getDistrictsOfEachCity,
  getCityNames,
  getNeighbourhoodsByCityCodeAndDistrict,
  getCityCodes,
} from "turkey-neighbourhoods";
import {
  setAddressThunkAction,
  updateAddressThunkAction,
} from "../../store/actions/shoppingCartAction";
import { useDispatch } from "react-redux";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AddressModal({ modal, setModal, address }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      name: "",
      surname: "",
      phone: "",
      city: "",
      district: "",
      neighborhood: "",
      address: "",
    },
    mode: "onChange",
  });
  const cities = getCityNames();
  const districts = getDistrictsOfEachCity();
  const dispatch = useDispatch();
  const codes = getCityCodes();
  const [districtsOfCity, setDistrictsOfCity] = useState([districts["01"]]);
  const [cityCode, setCityCode] = useState("01");
  const [neighborhood, setNeighborhood] = useState(["Akpınar Mah"]);
  const cityDistrictNeighborhoodObj = {};
  cities.forEach((city, i) => {
    cityDistrictNeighborhoodObj[codes[i]] = city;
  });

  const onFormSubmit = (formData) => {
    const cityName = cityDistrictNeighborhoodObj[formData.city];
    const postData = {
      title: formData.title,
      name: formData.name,
      surname: formData.surname,
      phone: formData.phone,
      address: formData.address,
      city: cityName,
      district: formData.district,
      neighborhood: formData.neighborhood,
    };
    console.log("FormData:", formData);
    if (address && address.id) {
      const updatedFormData = {
        ...address,
        ...postData,
      };
      dispatch(updateAddressThunkAction(updatedFormData));
      console.log("ID:", address.id);
      console.log("FormData:", postData);
      setModal(false);
    } else {
      dispatch(setAddressThunkAction(postData));
      setModal(false);
    }
  };

  useEffect(() => {
    // Use useEffect to dynamically update form values when the address prop changes
    setValue("title", address?.title || "");
    setValue("name", address?.name || "");
    setValue("surname", address?.surname || "");
    setValue("phone", address?.phone || "");
    setValue("city", address?.city || "");
    setValue("district", address?.district || "");
    setValue("neighborhood", address?.neighborhood || "");
    setValue("address", address?.address || "");
  }, [address, setValue]);

  const clickHandleCity = (e) => {
    const value = e.target.value;
    setCityCode(value);
    setDistrictsOfCity(districts[value]);
  };

  const districtHandle = (e) => {
    setNeighborhood(
      getNeighbourhoodsByCityCodeAndDistrict(cityCode, e.target.value)
    );
  };

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={modal}
    >
      <FontAwesomeIcon
        onClick={() => setModal(false)}
        icon={faX}
        className="pl-[700px] py-2 border-1 bg-orange-500 text-white cursor-pointer"
      />
      <div className="form-card  m-auto py-16">
        <div className="form-container">
          <form
            onSubmit={handleSubmit(onFormSubmit)}
            className="flex flex-col px-2 py-2 "
          >
            <div className="flex flex-col sm:w-4/4 w-full">
              <div className=" flex flex-col ">
                <label className="font-bold text-xl p-3">Address Title</label>
                <input
                  autoFocus
                  placeholder="Address Title"
                  className="p-2 rounded-md border border-[#DADADA] text-black"
                  {...register("title")}
                />
              </div>
            </div>
            <div className="flex justify-between gap-1">
              <div className=" flex flex-col sm:w-2/3 w-full">
                <label className="font-bold text-xl p-3">Name</label>
                <input
                  placeholder="Name"
                  className="p-2 rounded-md border border-[#DADADA] text-black"
                  type="text"
                  {...register("name", {
                    required: "Name is required!",
                    minLength: {
                      value: 3,
                      message: "At least 3 char is must be",
                    },
                  })}
                  invalid={errors.name?.message}
                />
                <span className="text-red-600">{errors.name?.message}</span>
              </div>
              <div className=" flex flex-col sm:w-2/3 w-full">
                <label className="font-bold text-xl p-3">Surname</label>
                <input
                  placeholder="Surname"
                  className="p-2 rounded-md border border-[#DADADA] text-black"
                  type="text"
                  {...register("surname", {
                    required: "surname is required!",
                    minLength: {
                      value: 3,
                      message: "At least 3 char is must be",
                    },
                  })}
                  invalid={errors.surname?.message}
                />
                <span className="text-red-600">{errors.surname?.message}</span>
              </div>
            </div>

            <div className="flex justify-between gap-1">
              <div className=" flex flex-col sm:w-2/3 w-full ">
                <label className="font-bold text-xl p-3">Phone</label>
                <input
                  placeholder="555 555 55 55"
                  className={`p-2 rounded-md border border-[#DADADA] text-black`}
                  type="text"
                  {...register("phone", {
                    required: "phone is required.",
                    maxLength: {
                      value: 10,
                      message: "Must be at most 10 characters",
                    },
                  })}
                />
                <div className="text-red-600 invalid-feedback">
                  {errors.phone?.message}
                </div>
              </div>
              <div className="sm:w-2/3 w-full flex flex-col">
                <label className="font-bold text-xl p-3">City</label>
                <select
                  className="w-[300px] p-2 rounded-md border border-[#DADADA] text-black"
                  {...register("city")}
                  onClick={(e) => changeOptionHandle(e)}
                  onChange={clickHandleCity}
                >
                  {codes?.map((code, i) => (
                    <option
                      key={i}
                      value={code}
                      id={code}
                      className="w-[300px] text-lg font-bold"
                    >
                      {cityDistrictNeighborhoodObj[code]}
                    </option>
                  ))}
                </select>
                <div className="text-red-600">{errors.city?.message}</div>
              </div>
            </div>

            <div className="flex justify-between gap-1">
              <div className="sm:w-2/3 w-full flex flex-col ">
                <label className="font-bold text-xl p-3">District</label>
                <select
                  className="w-[250px] p-2 rounded-md border border-[#DADADA] text-black"
                  {...register("district")}
                  onChange={districtHandle}
                >
                  {districtsOfCity?.map((district, i) => (
                    <option
                      key={i}
                      value={district}
                      className="w-[250px] text-lg font-bold"
                    >
                      {district}
                    </option>
                  ))}
                </select>
                <div className="text-red-600">{errors.district?.message}</div>
              </div>
              <div className="sm:w-2/3 w-full flex flex-col ">
                <label className="font-bold text-xl p-3">Neighborhood</label>
                <select
                  placeholder="Neighborhood"
                  className="w-[340px] p-2 rounded-md border border-[#DADADA] text-black"
                  {...register("neighborhood")}
                >
                  {neighborhood?.map((n, i) => (
                    <option
                      key={i}
                      value={n}
                      className="w-[330px] text-lg font-bold"
                      invalid={errors.neighborhood?.message}
                    >
                      {n}
                    </option>
                  ))}
                </select>
                <div className="text-red-600">
                  {errors.neighborhood?.message}
                </div>
              </div>
            </div>

            <div className="sm:w-4/4 w-full flex flex-col ">
              <label className="font-bold text-xl p-3">Address</label>
              <input
                type="text"
                placeholder="address"
                className="p-4 rounded-md border border-[#DADADA] text-black"
                {...register("address", {
                  required: "Address is required!",
                })}
                invalid={errors.address?.message}
              />
              <div className="text-red-600">{errors.address?.message}</div>
            </div>

            <button
              className="flex justify-center hover:border-orange-700 hover:border hover:text-black bg-orange-700 text-white px-6 py-3 rounded-md text-xl  mt-6 hover:bg-white cursor-pointer text-center"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </Modal>
  );
}
