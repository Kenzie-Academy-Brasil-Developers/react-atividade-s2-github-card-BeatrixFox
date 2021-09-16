import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import ListCollection from "../ListCollection/ListCollection";
import "./Search.css";

export const Seach = () => {
  const [owner, setOwner] = useState("");
  const [repo, setRepo] = useState("");
  const [text, setText] = useState("");
  const [check, setCheck] = useState(false);

  const formSchema = yup.object().shape({
    nameLink: yup
      .string()
      .required("Nome do link obrigatório")
      .matches(/(?=.*[/])(?=.*[a-z])/, "Faltando o nome do repositório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    let link = data.nameLink.split("/");
    setOwner(link[0]);
    setRepo(link[1]);
    setCheck(true);
    setText("");
  };

  return (
    <div className="container">
      <h3>Busca de repositório no GitHub</h3>
      <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
        <input
          placeholder="Nome"
          {...register("nameLink")}
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button type="submit">Buscar</button>
        <p
          className="alert"
          value={text}
          onChange={(event) => setText(event.target.value)}
        >
          {errors.nameLink?.message}
        </p>
      </form>{" "}
      {check && <ListCollection owner={owner} repo={repo} />}
    </div>
  );
};

export default Seach;
