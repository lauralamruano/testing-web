import { useState, useEffect, useCallback, ChangeEvent, FormEvent } from "react";

const TimeAlertForm: React.FC = () => {
  const [disableTimeLimit, setDisableTimeLimit] = useState<boolean>(false);
  const [timeRemaining, setTimeRemaining] = useState<number>(30); // 2 minutos por defecto
  const [formData, setFormData] = useState<{ name: string; email: string }>({
    name: "",
    email: "",
  });
  const [showWarning, setShowWarning] = useState<boolean>(false);
  const [extensions, setExtensions] = useState<number>(0);
  const maxExtensions = 10;

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (event.code === "Space" && showWarning && extensions < maxExtensions) {
      setTimeRemaining(120); // Reset to 2 minutes
      setShowWarning(false);
      setExtensions(extensions + 1);
    }
  }, [showWarning, extensions]);

  useEffect(() => {
    if (!disableTimeLimit && timeRemaining > 0) {
      const timer = setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [disableTimeLimit, timeRemaining]);

  useEffect(() => {
    if (timeRemaining <= 22 && !disableTimeLimit) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
    }
  }, [timeRemaining, disableTimeLimit]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

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
    <div className="relative max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      {showWarning && (
        <div className="absolute inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-md shadow-md">
            <p className="text-black text-center">Time is going to expire. Press the spacebar to extend time</p>
          </div>
        </div>
      )}
      <div className={showWarning ? "opacity-50" : "opacity-100"}>
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
          {/* <div className="form-control">
            <label className="cursor-pointer label">
              <input
                type="checkbox"
                checked={disableTimeLimit}
                onChange={handleCheckboxChange}
                aria-label="Disable time limit"
                className="checkbox checkbox-success"
              />
              <span className="label-text text-gray-700"></span>
            </label>
          </div> */}

          {!disableTimeLimit && (
            <div className="mb-4 text-sm text-red-600">
              Time remaining: {timeRemaining} seconds
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
    </div>
  );
};

export default TimeAlertForm;