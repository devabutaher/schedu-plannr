import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";

const FormSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters.",
    })
    .regex(/[a-zA-Z]/, {
      message: "Password must contain at least one letter.",
    })
    .regex(/[0-9]/, {
      message: "Password must contain at least one number.",
    }),
});

export default function LoginForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-between w-full gap-8"
      >
        <div className="flex items-center justify-center gap-4">
          <h1 className="text-3xl antialiased font-semibold text-slate-800 dark:text-slate-200 lg:text-5xl">
            Welcome back
          </h1>
          <div className="rounded-full size-6 lg:size-8 bg-sky-500" />
        </div>

        <div className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <label htmlFor="email" className="antialiased font-semibold">
                  Email
                </label>
                <FormControl>
                  <Input
                    {...field}
                    id="email"
                    placeholder="Email"
                    className="px-4 py-6 text-lg border-none"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <label htmlFor="password" className="antialiased font-semibold">
                  Password
                </label>
                <FormControl>
                  <Input
                    {...field}
                    id="password"
                    placeholder="Password"
                    className="px-4 py-6 text-lg border-none"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button type="submit" size={"lg"}>
              Login Now
            </Button>
          </div>
        </div>

        <p className="text-lg antialiased font-semibold text-center sm:text-xl">
          Don't have an account?{" "}
          <Link to={"/register"} className="text-sky-500">
            Sign Up
          </Link>
        </p>
      </form>
    </Form>
  );
}
