import { useState } from "react";

const AuthForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        setError(response.statusText);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-10">
      <div className="flex items-center justify-center gap-4">
        <h1 className="text-4xl antialiased font-semibold leading-4 text-slate-200 lg:text-5xl">
          Auth Form
        </h1>
        <div className="rounded-full size-8 lg:size-10 bg-sky-500" />
      </div>

      <form className="space-y-6 lg:space-y-8" onSubmit={handleSubmit}>
        {error && (
          <p className="text-lg text-center text-rose-600">Error: {error}</p>
        )}

        <label
          htmlFor="email"
          className="block p-2 px-4 overflow-hidden border shadow-2xl border-slate-600 rounded-2xl lg:p-4 focus-within:border-sky-500 focus-within:ring-1 focus-within:ring-sky-500"
        >
          <span className="text-sm font-medium lg:text-lg">Email</span>
          <input
            className="w-full p-0 mt-1 text-xl bg-transparent border-none focus:border-transparent focus:outline-none focus:ring-0"
            type="email"
            id="email"
            name="email"
            placeholder="example@mail.com"
            required
          />
        </label>
        <label
          htmlFor="password"
          className="block p-2 px-4 overflow-hidden border shadow-2xl border-slate-600 rounded-2xl lg:p-4 focus-within:border-sky-500 focus-within:ring-1 focus-within:ring-sky-500"
        >
          <span className="text-sm font-medium lg:text-lg">Password</span>
          <input
            className="w-full p-0 mt-1 text-xl bg-transparent border-none focus:border-transparent focus:outline-none focus:ring-0"
            type="password"
            id="password"
            name="password"
            placeholder="123456"
            required
          />
        </label>

        <button
          disabled={loading}
          className="flex items-center justify-center w-32 h-12 gap-2 transition-colors border rounded-xl hover:rounded border-sky-600 bg-sky-600 focus:outline-none focus:ring"
        >
          {loading ? (
            <div className="border-2 border-dashed rounded-full size-6 animate-spin"></div>
          ) : (
            <>
              <span className="text-sm font-medium lg:text-lg">Submit</span>
              <div className="rounded-full bg-slate-100 size-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
