import { faFlag, faUser } from "@fortawesome/free-solid-svg-icons";
import Fa from "solid-fa";
import { Component } from "solid-js";

const ContactPage: Component = () => {
  return (
    <div>
      <section id="contact-form-section" class="my-28">
        <form>
          <div class="flex flex-col items-center justify-center space-y-10 md:mx-auto md:flex-row md:space-x-24 md:space-y-0">
            {/* User field */}
            <div class="space-y-10">
              <div class="group relative w-[375px] md:w-[450px]">
                <input type="text" placeholder="Name" />
                <Fa
                  translateY={-1.5}
                  icon={faUser}
                  size="2x"
                  color="var(--color-titles)"
                  scale={0.75}
                />
              </div>
              {/* Email Field */}
              <div class="group relative w-[375px] md:w-[450px]">
                <input type="text" placeholder="Email" />
                <i class="fa-solid fa-envelope"></i>
              </div>
            </div>
            <div class="space-y-10 ">
              {/* Subject Field */}
              <div class="group relative w-[375px] md:w-[450px]">
                <input type="text" placeholder="Subject" />
                <i class="fa-solid fa-pen"></i>
              </div>
              {/* Phone Field */}
              <div class="group relative w-[375px] md:w-[450px]">
                <input type="tel" placeholder="Mobile number" />
                <i class="fa-solid fa-phone"></i>
              </div>
            </div>
          </div>
          {/* Message Field */}
          <div class="mt-10 flex-row items-center justify-center space-y-10 px-10 md:mx-auto md:mt-10 md:flex md:flex-col md:px-[24%]">
            <textarea
              class="form-control m-0 rounded-2xl bg-white bg-clip-padding md:px-3"
              placeholder="Message"
            ></textarea>
            {/* Send Button */}
            <div class="mx-auto  ">
              <button class="send" />
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ContactPage;
