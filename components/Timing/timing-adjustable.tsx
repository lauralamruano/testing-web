import { useState, useEffect, ChangeEvent, FormEvent } from "react";

const TimeLimitForm: React.FC = () => {
  const [disableTimeLimit, setDisableTimeLimit] = useState<boolean>(false);
  const [timeRemaining, setTimeRemaining] = useState<number>(120); // 2 minutos por defecto
  const [formData, setFormData] = useState<{ name: string; email: string }>({
    name: "",
    email: "",
  });

  useEffect(() => {
    if (!disableTimeLimit && timeRemaining > 0) {
      const timer = setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [disableTimeLimit, timeRemaining]);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDisableTimeLimit(event.target.checked);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Formulario enviado");
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Time-limited form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white"
            required
          />
        </div>
        <div className="form-control">
          <label className="cursor-pointer label">
            <input
              type="checkbox"
              checked={disableTimeLimit}
              onChange={handleCheckboxChange}
              defaultChecked
              aria-label="Disable time limit"
              className="checkbox checkbox-success"
            />
            <span className="label-text text-gray-700">Disable time limit</span>
          </label>
        </div>

        {!disableTimeLimit && (
          <div className="mb-4 text-sm text-red-600">
            Time remaining: {timeRemaining} segundos
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default TimeLimitForm;
