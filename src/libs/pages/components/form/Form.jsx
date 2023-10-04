"use client";
import { useForm, Controller } from "react-hook-form";
import { useState, useEffect, useRef } from "@/libs/hooks/hooks";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IMask from "react-input-mask";
import {
  faChevronDown,
  faPhone,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

import { faViber, faTelegram } from "@fortawesome/free-brands-svg-icons";

import Button from "@/libs/components/button/Button";
import ModalThanks from "@/libs/modal/modalThanks/modalThanks";
import CountyCode from "./country_code/CountyCode";

import { borderEnums } from "./enumsForm/enumsForm";

import styles from "./Form.module.scss";

const ERROR_MESSAGE = "Заповніть поле!";

export default function Form({ type, isOpenModal, setIsOpenModal }) {
  const [selectValue, setSelectValue] = useState("");
  const [phone, setPhone] = useState("38");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isOpenCountry, setIsOpenCountry] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [isStep, setIsStep] = useState(false);

  const { border, color_text, options_hover, border_check_color, check_color } =
    borderEnums[type];

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    resetField,
    setError,

    formState: { errors },
  } = useForm({
    shouldFocusError: true,
    reValidateMode: "onChange",
  });

  const handleCLickOnSelect = (event) => {
    setSelectValue(event.currentTarget.innerText);
    setValue("message", event.currentTarget.innerText, { shouldTouch: true });
    setIsOpen(false);
  };

  const handleToggleSelect = () => {
    setIsOpen(!isOpen);
    setIsOpenCountry(false);
  };

  const onSubmit = (data) => {
    console.log(data);
    console.log(phoneNumber.length);
    console.log(selectValue);

    if (phoneNumber.length >= 12) {
      setIsStep(true);
      reset();
      setSelectValue("");
    } else {
      setError(
        "phone",
        { message: "Перевірте номер телефону!", type: "minLength" },
        { shouldFocus: false }
      );
    }
  };

  useEffect(() => {
    const header = document.getElementById("header");

    if (isOpenModal) {
      header.style.display = "none";
    }
    return () => {
      header.style.display = "flex";
    };
  }, [isOpenModal]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/\D/g, "");
    setPhoneNumber(numericValue);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
        autoCorrect="yes"
        autoFocus={true}
      >
        <div className={styles.wrapper_name}>
          <label
            htmlFor="name"
            className={`${styles.lable} ${styles[color_text]}`}
          >
            {"Вкажіть ім'я і прізвище"}
          </label>

          <div className={styles.conteiner_name}>
            <div className={styles[border]}>
              <input
                onClick={() => setIsOpenCountry(false)}
                className={
                  errors.name
                    ? `${styles.input} ${styles.error_input}`
                    : styles.input
                }
                id="name"
                type="text"
                {...register("name", {
                  required: true,
                  minLength: 2,
                })}
                placeholder={
                  errors.name ? ERROR_MESSAGE : "Вкажіть ім'я і прізвище"
                }
              />
            </div>
            {errors.name && (
              <div className={styles.error_name}>
                <FontAwesomeIcon
                  icon={faCircleExclamation}
                  className={styles.error_icon}
                />
              </div>
            )}
          </div>
        </div>
        <div className={styles.wrapper_name}>
          <label
            htmlFor="textarea"
            className={`${styles.lable} ${styles[color_text]}`}
          >
            Ваше питання
          </label>
          <div className={styles.conteiner_name}>
            <div className={styles[border]}>
              <textarea
                onClick={() => setIsOpenCountry(false)}
                className={
                  errors.textarea
                    ? `${styles.textarea} ${styles.error_input}`
                    : styles.textarea
                }
                id="textarea"
                {...register("textarea", {
                  required: true,
                  minLength: 3,
                })}
                placeholder={
                  errors.textarea
                    ? ERROR_MESSAGE
                    : "Будь ласка, напишіть ваше питання. Від якості переданої інформації буде залежати і якість відповіді експерта."
                }
              />
            </div>

            {errors.textarea && (
              <div className={styles.error_textarea}>
                <FontAwesomeIcon
                  icon={faCircleExclamation}
                  className={styles.error_icon}
                />
              </div>
            )}
          </div>
        </div>

        <div className={styles.wrapper_name}>
          <label
            htmlFor="phone"
            className={`${styles.lable} ${styles[color_text]}`}
          >
            {/* Номер телефону */}
            Вкажіть номер, на якому встановлений Месенджер
          </label>
          <div className={styles.conteiner_name}>
            <CountyCode
              setPhoneNumber={setPhoneNumber}
              resetField={resetField}
              color_text={color_text}
              setPhone={setPhone}
              isOpenCountry={isOpenCountry}
              setIsOpenCountry={setIsOpenCountry}
              setIsOpen={setIsOpen}
              phone={phone}
            />

            <div className={styles[border]}>
              <Controller
                name="phone"
                control={control}
                defaultValue={""}
                rules={{
                  value: phoneNumber,
                  required: { value: true, message: "Заповніть поле!" },
                  minLength: {
                    value: 12,
                    message: "Перевірте номер телефону!",
                  },
                  onChange: handleInputChange,
                }}
                placeholder={errors.phone ? ERROR_MESSAGE : ""}
                render={({ field }) => (
                  <IMask
                    mask={`+${phone} (999) 999 99 99`}
                    maskChar={" "}
                    alwaysShowMask={true}
                    {...field}
                  >
                    {(inputProps) => (
                      <input
                        className={
                          errors.phone
                            ? `${styles.input} ${styles.two_input} ${styles.error_input}`
                            : `${styles.input} ${styles.two_input} ${styles.number_input}`
                        }
                        {...inputProps}
                      />
                    )}
                  </IMask>
                )}
              />
            </div>
            {errors.phone && (
              <div className={styles.error_phone}>
                <p>{errors.phone.message}</p>
              </div>
            )}
            {errors.phone && (
              <div className={styles.error_phone_icon}>
                <FontAwesomeIcon
                  icon={faCircleExclamation}
                  className={styles.error_icon}
                />
              </div>
            )}
          </div>
        </div>

        <div className={styles.wrapper_name}>
          <label
            htmlFor="message"
            className={`${styles.lable} ${styles[color_text]}`}
          >
            Месенджер
          </label>
          <div className={styles.conteiner_name}>
            <div className={styles[border]}>
              <input
                onClick={handleToggleSelect}
                value={selectValue}
                translate="yes"
                type="search"
                name="message"
                readOnly
                {...register("message", {
                  required: true,
                })}
                className={
                  errors.message && !selectValue
                    ? `${styles.input} ${styles.second_input} ${styles.select} ${styles.error_input}`
                    : `${styles.input} ${styles.second_input} ${styles.select}`
                }
                placeholder={
                  errors.message
                    ? "Виберіть мессенджер!"
                    : "Оберіть спосіб отримання відповіді"
                }
              />
            </div>

            {errors.message && !selectValue && (
              <div className={styles.error_message}>
                <FontAwesomeIcon
                  icon={faCircleExclamation}
                  className={styles.error_icon}
                />
              </div>
            )}
            <motion.div
              animate={{ rotate: isOpen ? "180deg" : "0deg" }}
              transition={{ duration: 0.5 }}
              className={styles.conteiner_icon}
              onClick={handleToggleSelect}
            >
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`${styles.icon} ${styles[color_text]}`}
              />
            </motion.div>
            {isOpen && (
              <motion.div className={styles.options_conteiner}>
                <div
                  onClick={handleCLickOnSelect}
                  className={`${styles.options} ${styles[options_hover]}`}
                >
                  <FontAwesomeIcon
                    icon={faViber}
                    className={styles.options_icon}
                  />
                  Viber
                </div>
                <div
                  onClick={handleCLickOnSelect}
                  className={`${styles.options} ${styles[options_hover]}`}
                >
                  <FontAwesomeIcon
                    icon={faTelegram}
                    className={styles.options_icon}
                  />
                  Telegram
                </div>
                <div
                  onClick={handleCLickOnSelect}
                  className={`${styles.options} ${styles[options_hover]}`}
                >
                  <FontAwesomeIcon
                    icon={faPhone}
                    className={styles.options_icon}
                  />
                  Телефон
                </div>
              </motion.div>
            )}
          </div>
        </div>

        <div className={styles.wrapper_name}>
          <label
            htmlFor="services"
            className={`${styles.lable} ${styles[color_text]}`}
          >
            Оберіть послугу
          </label>
          {errors.services && (
            <div className={styles.error_services}>
              <FontAwesomeIcon
                icon={faCircleExclamation}
                className={styles.error_icon_service}
              />
            </div>
          )}
          {/* --------- radio ---------- */}
          <div className={styles.conteiner_radio_groupe}>
            <div className={styles.conteiner_radio}>
              <label htmlFor="services_first" className={styles.lable_radio}>
                Консультація Адвоката. Дзвінок або зустріч в офісі (550-950
                грн.)
              </label>
              <div
                className={`${styles.check_border} ${styles[border_check_color]}`}
              >
                <div className={styles.check_border_befor}></div>
                <input
                  className={styles.radio_btn}
                  type="radio"
                  value="Консультація Адвоката. Дзвінок або зустріч в офісі (550-950 грн.)"
                  id="services_first"
                  {...register("services", { required: true })}
                  placeholder="Оберіть спосіб отримання відповіді."
                />
                <label
                  htmlFor="services_first"
                  className={styles[check_color]}
                ></label>
              </div>
            </div>

            <div className={styles.conteiner_radio}>
              <label htmlFor="services_second" className={styles.lable_radio}>
                Вирішення питань через суд: розлучення, аліменти, майно,
                батьківські права, тощо (від 5000 грн.)
              </label>
              <div
                className={`${styles.check_border} ${styles[border_check_color]}`}
              >
                <div className={styles.check_border_befor}></div>
                <input
                  className={styles.radio_btn}
                  type="radio"
                  value="Вирішення питань через суд: розлучення, аліменти, майно, батьківські права, тощо (від 5000 грн.)"
                  id="services_second"
                  {...register("services", { required: true })}
                  placeholder="Оберіть спосіб отримання відповіді."
                />
                <label
                  htmlFor="services_second"
                  className={styles[check_color]}
                ></label>
              </div>
            </div>

            <div className={styles.conteiner_radio}>
              <label htmlFor="services_third" className={styles.lable_radio}>
                Допомога з документами: написання заяв, позовів, договорів, тощо
                (від 2000 грн.)
              </label>
              <div
                className={`${styles.check_border} ${styles[border_check_color]}`}
              >
                <div className={styles.check_border_befor}></div>
                <input
                  className={styles.radio_btn}
                  type="radio"
                  value="Допомога з документами: написання заяв, позовів, договорів, тощо (від 2000 грн.)"
                  id="services_third"
                  {...register("services", { required: true })}
                  placeholder="Оберіть спосіб отримання відповіді."
                />
                <label
                  htmlFor="services_third"
                  className={styles[check_color]}
                ></label>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.btn_wrapper}>
          <Button
            type="submit"
            text="надіслати запит"
            style="button_service"
            typeStyle={type}
          />
        </div>
      </form>
      {isStep && (
        <ModalThanks
          type={type}
          setIsStep={setIsStep}
          setIsOpenModal={setIsOpenModal}
        />
      )}
    </>
  );
}
