import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "reactstrap";

export default function Footer() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-center  ">
        <div className="w-4/5  flex flex-row justify-between py-16 gap-8 border-b-2">
          <h2 className="text-3xl font-semibold ">Bandage</h2>
          <div className="flex gap-5 text-primaryColor">
            <FontAwesomeIcon icon={faFacebook} className="w-8 h-8" />
            <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
            <FontAwesomeIcon icon={faTwitter} className="w-8 h-8" />
          </div>
        </div>
      </div>
      <div className=" flex justify-center">
        <div className="w-4/5  xl:py-10 py-16 xl:flex xl:flex-row xl:justify-between flex flex-col gap-8 xl:font-normal font-semibold">
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="capitalize font-semibold text-lg text-textColor">
                company info
              </h3>
            </div>
            <div className="text-secondText flex flex-col gap-2">
              <p className="capitalize">about us</p>
              <p>Carrier</p>
              <p>We are hiring</p>
              <p>Blog</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="capitalize font-semibold text-lg text-textColor">
                legal
              </h3>
            </div>
            <div className="text-secondText flex flex-col gap-2">
              <p className="capitalize">about us</p>
              <p>Carrier</p>
              <p>We are hiring</p>
              <p>Blog</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="capitalize font-semibold text-lg text-textColor">
                features
              </h3>
            </div>
            <div className="text-secondText flex flex-col gap-2">
              <p className="capitalize">business marketing</p>
              <p>User Analytic</p>
              <p>Live Chat</p>
              <p>Unlimited Support</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="capitalize font-semibold text-lg text-textColor">
                resources
              </h3>
            </div>
            <div className="text-secondText flex flex-col gap-2">
              <p className="capitalize">IOS & Android</p>
              <p>Watch a Demo</p>
              <p>Customer</p>
              <p>API</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="capitalize font-semibold text-lg text-textColor">
                get in touch
              </h3>
            </div>
            <div>
              <div className="flex ">
                <input
                  className="p-3 rounded-l-md text-secondText bg-blue-gray-50 border-2"
                  type="email"
                  placeholder="Your E-mail"
                />
                <Button className="bg-primaryColor text-lightText py-3 capitalize tracking-wider font-montserrat  font-medium text-sm rounded-r-md">
                  Subscribe
                </Button>
              </div>

              <p className="text-secondText">Lorem ipsum dolor sit.</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-lightGray flex justify-start py-10 px-48 ">
        <p className="text-secondText text-center  font-semibold">
          Made With Love By Finland All Right Reserved
        </p>
      </div>
    </div>
  );
}
