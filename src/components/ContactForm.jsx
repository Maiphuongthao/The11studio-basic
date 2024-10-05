import { Button, Input, list } from "@material-tailwind/react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    telephone: "",
    option: "",
    message: "",
  });
  const options = [
    "Tattoo",
    "Piercing",
    "Maquillage semi-permpanent",
    "Tricopigmentation",
    "Cils",
    "Browlift",
    "Autres",
  ];
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleServicesChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setForm((prevData) => ({
        ...prevData,
        options: [...prevData.options, value],
      }));
    } else {
      // Remove service from array
      setForm((prevData) => ({
        ...prevData,
        options: prevData.options.filter((option) => option !== value),
      }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "The 11 Studio",
          from_email: form.email,
          to_email: "bonjour@the11studio.fr",
          from_option: form.option,
          to_option: "service",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Merci! Nous allons vous répondre dès possible");

          setForm({
            name: "",
            email: "",
            telephone: "",
            option: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="bg-color-1 text-color-4 w-full md:mx-auto md:py-15 md:px-20 flex flex-col gap-8">
      <h2>DES QUESTIONS ?</h2>
      <div className="">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col w-full gap-8"
        >
          <label className="flex w-full">
            <input
              type="text"
              placeholder="Nom & prénom*"
              name="name"
              id="name"
              onChange={handleChange}
              value={form.name}
              required
              className="placeholder:text-color-2 placeholder:text-md bg-inherit border rounded-full h-10 w-full border-color-4 text-base py-1 px-6"
            />
          </label>
          <div className="w-full flex gap-8">
            <label className="flex w-full">
              <input
                type="email"
                placeholder="Email*"
                name="email"
                id="emaile"
                onChange={handleChange}
                value={form.email}
                required
                className="placeholder:text-color-2 placeholder:text-md  bg-inherit border rounded-full h-10 w-full border-color-4 text-base py-1 px-6"
              />
            </label>
            <label className="flex w-full">
              <input
                type="text"
                placeholder="Télephone*"
                name="telephone"
                id="telephone"
                onChange={handleChange}
                value={form.telephone}
                required
                className="placeholder:text-color-2 placeholder:text-md  bg-inherit border rounded-full h-10 w-full border-color-4 text-base py-1 px-6"
              />
            </label>
          </div>
          {/* Services List */}
          <div className="w-full flex justify-between flex-wrap">
            {options.map((op, index) => (
              <label key={index} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={`${op}`}
                  value={form.option}
                  onChange={handleServicesChange}
                  className="h-4 w-4 text-color-1 bg-color-4 border-color-4 border rounded checked:border-color-1"
                />
                <span
                  htmlFor={`service-${index}`}
                  className="ml-2 text-color-4"
                >
                  {op}
                </span>
              </label>
            ))}
          </div>
          <label className="flex flex-col">
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Dites-nous tous..."
              required
              className="placeholder:text-color-2 placeholder:text-md  bg-inherit border rounded-2xl w-full border-color-4 text-base py-1 px-6 placeholder:p-4"
            />
          </label>
          <div className="flex justify-center">
            <Button
              className="bg-color-1 w-fit rounded-full text-xl font-normal border-color-4 border"
              type="submit"
            >
              {loading ? "Entrain d'envoyer..." : "Envoyer"}
            </Button>
          </div>
        </form>
      </div>
      <p></p>
    </div>
  );
};

export default ContactForm;
