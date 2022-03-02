import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useLoginMutation } from "../../generated";
import { Cookies } from "react-cookie";

const Index = () => {
  const cookies = new Cookies();
  const router = useRouter();
  const [loginMutation, { data, loading, error }] = useLoginMutation();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (cookies.get("token") || cookies.get("club")) router.push("/admin");
  });

  useEffect(() => {
    if (data?.login.__typename == "User") {
      cookies.set("token", data?.login.token, {
        path: "/",
        secure: true,
        sameSite: "none",
      });
      cookies.set("club", data?.login.role, {
        path: "/",
        secure: true,
        sameSite: "none",
      });

      router.push("admin/" + data?.login.role);
    }
  }, [data, loading]);

  const handleClick = () => {
    loginMutation({
      variables: {
        input: {
          id: id,
          password: password,
        },
      },
    });
    setId("");
    setPassword("");
  };

  const handleKeyPress = (e: any) => {
    if (e.key == "Enter") {
      handleClick();
    }
  };

  return (
    <Base>
      <Form>
        <Title>LOGIN</Title>
        <Input
          type="text"
          placeholder="ID"
          value={id}
          onChange={({ target: { value } }) => setId(value)}
          onKeyPress={handleKeyPress}
          required
        />
        <Input
          type="password"
          placeholder="PASSWORD"
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
          onKeyPress={handleKeyPress}
          required
        />
        {error || data?.login.__typename == "InvalidAccountError" ? (
          <Error>아이디 또는 비밀번호를 잘못 입력했습니다.</Error>
        ) : (
          ""
        )}
        <Button onClick={handleClick}>LOGIN</Button>
      </Form>
    </Base>
  );
};

const Base = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #3d516b;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.div`
  width: 25%;
  height: 60%;
  border-radius: 15px;
  background-color: #fff;
  padding: 70px 60px;
`;

const Title = styled.div`
  font-size: 45px;
  font-weight: bolder;
  text-align: center;
  margin-bottom: 115px;
`;

const Error = styled.div`
  color: #e61919;
  font-size: 15px;
  margin-top: -10px;
`;

const Input = styled.input`
  width: 100%;
  height: 10%;
  font-size: 13px;
  border-radius: 5px;
  outline: 0;
  padding: 10px 10px;
  margin-bottom: 15px;
`;

const Button = styled.button`
  width: 100%;
  height: 10%;
  background-color: #000;
  color: #fff;
  font-size: 16px;
  border: 0;
  border-radius: 5px;
  outline: 0;
  padding: 10px 15px;
  margin-top: 15px;
  font-weight: bolder;
`;

export default Index;
