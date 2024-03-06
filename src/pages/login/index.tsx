import { Button, Form, Input } from "antd";
import ButtonComponent from "../../components/ui/Button";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
};

const LoginPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex justify-center items-center h-[83px] border-solid border-b-2 border-l-0 border-r-0 border-t-0 border-[#dfe1e3] ">
        <img src="../src/assets/ui/logo.png" />
      </header>
      <main className="flex-grow">
        <h3 className="flex justify-center items-center text-center text-[#7ab800] text-[18px] leading-[1.1] font-medium mt-[45px] mb-[70px]">
          იუსტიციის სახლის სერვისების მართვის ერთიანი სისტემა
        </h3>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          labelAlign="left"
          labelWrap={true}
          colon={false}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          requiredMark={false}
          className="w-[95%] max-w-[600px] mx-auto text-[#616365] px-[60px] py-[45px] border-solid border-2 border-[#dfe1e3]"
        >
          <Form.Item<FieldType>
            className="text-[#616365]"
            label="მომხმარებლის სახელი"
            name="username"
            rules={[
              { required: true, message: "მომხმარებლის სახელი სავალდებულოა" },
            ]}
          >
            <Input className="text-[#616365]" />
          </Form.Item>

          <Form.Item<FieldType>
            label="პაროლი"
            name="password"
            rules={[{ required: true, message: "პაროლი სავალდებულოა" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <ButtonComponent type="primary" htmlType="submit" height="50px">
              შესვლა
            </ButtonComponent>
          </Form.Item>
        </Form>
      </main>
      <footer className="flex justify-center items-center leading-[42px] text-[#616365] bg-[#e8eaec] text-[13px]">
        © მონაცემთა გაცვლის სააგენტო 2016
      </footer>
    </div>
  );
};

export default LoginPage;
