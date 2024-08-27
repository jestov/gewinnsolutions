import { ChangeEvent, useState, useRef } from "react";
import ArrowIcon from "./icons/ArrowIcon";
import ButtonWithArrow from "./ButtonWithArrow";

type InputFieldName = "name" | "email" | "company" | "message";

function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    // Garantiza que name es una de las claves válidas
    setInputValues((prevValues) => ({
      ...prevValues,
      [name as InputFieldName]: value,
    }));

    if (name === "message" && textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const fields = [
    {
      id: "name",
      type: "text",
      required: true,
      placeholder: "Carlos Arellano",
      label: "Nombre*",
    },
    {
      id: "email",
      type: "email",
      required: true,
      placeholder: "gewinn@gmail.com",
      label: "Correo electrónico*",
    },
    {
      id: "phone",
      type: "text",
      required: false,
      placeholder: "+52 81 450 0000",
      label: "Teléfono",
    },
    {
      id: "project",
      type: "text",
      required: false,
      placeholder: "Indoor Cycling",
      label: "¿Qué proyecto tienes en mente?",
    },
    {
      id: "message",
      type: "textarea",
      required: false,
      placeholder: "Voy a abrir un Indoor Cycling en...",
      label: "Cuéntanos más sobre tu proyecto",
    },
  ];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "2591a97a-9754-456e-a33b-5b876a0e370e",
        name: inputValues.name,
        email: inputValues.email,
        company: inputValues.company,
        services: selectedServices,
        budget: selectedBudget,
        message: inputValues.message,
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      setFormSubmitted(true);

      setTimeout(() => {
        setFormSubmitted(false);
      }, 10000);
    }
  }

  if (formSubmitted) {
    return (
      <div
        className="p-5 text-2xl lg:text-7xl -tracking-[2.5px] lg:-tracking-[5px]"
        role="alert"
      >
        Gracias por tu mensaje, te contactaremos lo más pronto posible, gracias
        por tu preferencia.
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={
        formSubmitted
          ? "hidden"
          : "flex flex-col items-end lg:items-start lg:grid lg:grid-cols-2 gap-6 lg:gap-10 w-full"
      }
    >
      {fields.map((field, index) => (
        <div
          key={field.id}
          className={`flex flex-col gap-0 w-full text-lg font-clash ${
            field.type === "textarea" ? "col-span-2" : ""
          }`}
        >
          <label
            htmlFor={field.id}
            className={`flex gap-6 items-center transition-colors duration-500 ${
              (field.id === "services" && selectedServices) ||
              (field.id === "budget" && selectedBudget) ||
              (field.id !== "services" &&
                field.id !== "budget" &&
                inputValues[field.id as InputFieldName])
                ? "text-white text-opacity-40"
                : ""
            }`}
          >
            {field.label}
          </label>
          {field.type === "textarea" ? (
            <textarea
              ref={textareaRef}
              id={field.id}
              name={field.id}
              required={field.required}
              rows={1}
              placeholder={field.placeholder}
              className="appearance-none bg-transparent min-h-[30px] h-auto text-xl lg:text-2xl font-clash resize-none py-4 md:py-5 w-full placeholder-white placeholder-opacity-40 !outline-none col-span-2"
              onChange={handleInputChange}
            ></textarea>
          ) : (
            <input
              id={field.id}
              type={field.type}
              name={field.id}
              required={field.required}
              placeholder={field.placeholder}
              className="appearance-none text-xl lg:text-2xl font-clash bg-transparent py-4 md:py-5 w-full placeholder-white placeholder-opacity-40 !outline-none"
              onChange={handleInputChange}
            />
          )}
        </div>
      ))}
      <ButtonWithArrow type="submit" dark={true} fullWidth={true}>
        Enviar mensaje
      </ButtonWithArrow>
    </form>
  );
}

export default Contact;
