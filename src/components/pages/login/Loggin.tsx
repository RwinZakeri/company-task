"use client";
import { loginFormSchema } from "@/components/schema/login/userLoginSchema";
import CustomeButton from "@/components/UI/button";
import CustomeInput from "@/components/UI/input";
import { useClient } from "@/context/clients/client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { loginForm } from "./type";

const Loggin = () => {
  const [formData, setFormData] = useState<loginForm>({
    email: "",
    password: "",
    phone: "",
  });
  const router = useRouter();
  const { client, setClient } = useClient();

  const [errors, setErrors] = useState<
    { email: string; password: string; phone: string } | undefined
  >();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = loginFormSchema.safeParse(formData);
    if (!result?.success) {
      const allErrors = result.error?.flatten().fieldErrors;
      setErrors({
        email: allErrors?.email ? allErrors?.email[0] : "",
        password: allErrors?.password ? allErrors?.password[0] : "",
        phone: allErrors?.phone ? allErrors?.phone[0] : "",
      });
      console.log(allErrors);
      return;
    }

    setErrors({ email: "", password: "", phone: "" });
    fetch("https://randomuser.me/api/?results=1&nat=us*")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.results[0].picture.large);
        setClient(res.results);
        router.push("/dashboard");
      });
  };

  return (
    <div>
      <form onSubmit={formHandler}>
        <CustomeInput
          name={"phone"}
          type="text"
          value={formData.phone}
          onChange={changeHandler}
          helperError={errors?.phone}
          placeholder="phone"
        />
        <CustomeInput
          name={"email"}
          value={formData.email}
          onChange={changeHandler}
          helperError={errors?.email}
          placeholder="email"
        />
        <CustomeInput
          name={"password"}
          placeholder="password"
          value={formData.password}
          onChange={changeHandler}
          helperError={errors?.password}
        />

        <CustomeButton type="submit">submit</CustomeButton>
      </form>
    </div>
  );
};

export default Loggin;
